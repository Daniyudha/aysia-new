<script setup lang="ts">
import Highlight from "@tiptap/extension-highlight";
import TiptapImage from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { Placeholder } from "@tiptap/extensions";
import { StarterKit as TiptapStarterKit } from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/vue-3";
import { useRuntimeConfig } from "#app";
import { onBeforeUnmount, ref, unref, watch } from "vue";

const props = defineProps<{
  value: string;
  disabled?: boolean;
}>();
const emits = defineEmits<{
  (e: "update:value", value: string): void;
  (e: "onBlur"): void;
}>();

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

// Transform HTML to remove figure/figcaption tags that are not recognized by the editor
function transformHtml(html: string): string {
  if (!html)
    return html;
  console.log("transformHtml input:", html);
  const transformed = html
    .replace(/<figure\b[^>]*>/gi, "<div>")
    .replace(/<\/figure>/gi, "</div>")
    .replace(/<figcaption\b[^>]*>/gi, "<div>")
    .replace(/<\/figcaption>/gi, "</div>");
  console.log("transformHtml output:", transformed);
  return transformed;
}

// --- CUSTOM IMAGE EXTENSION DENGAN 4 SUDUT RESIZE ---
const CustomImage = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.() ?? {},
      width: {
        default: "100%",
        renderHTML: attributes => ({
          style: `width: ${attributes.width}; height: auto;`,
        }),
      },
      style: {
        default: null,
        parseHTML: node => node.getAttribute("style"),
        renderHTML: attributes => attributes.style ? { style: attributes.style } : {},
      },
    };
  },
  parseDOM: [
    {
      tag: "img",
      getAttrs: (node) => {
        console.log("Parsing img node - tag:", node.tagName, "node:", node);
        const src = node.getAttribute("src");
        const alt = node.getAttribute("alt");
        const title = node.getAttribute("title");
        const style = node.getAttribute("style");
        const widthAttr = node.getAttribute("width");
        // Extract width from style if width attribute not present
        let width = widthAttr;
        if (!width && style) {
          const widthMatch = style.match(/width:\s*([^;]+)/);
          if (widthMatch) {
            width = widthMatch[1].trim();
          }
        }
        const attrs = {
          src,
          alt,
          title,
          width: width || "100%",
          style,
        };
        console.log("Parsed attrs:", attrs);
        return attrs;
      },
    },
  ],
  addNodeView() {
    return ({ node, getPos, editor }) => {
      console.log("Image node view created", node.attrs);
      console.log("Image node attrs:", node.attrs);
      console.log("Image node type:", node.type.name);
      const container = document.createElement("div");
      container.style.position = "relative";
      container.style.display = "inline-flex";
      container.style.lineHeight = "0";
      container.style.backgroundColor = "rgba(255,0,0,0.1)"; // debug
      container.classList.add("resizable-image-wrapper");

      const img = document.createElement("img");
      let src = node.attrs.src;
      console.log("Image src before transform:", src);
      if (src && !src.match(/^(https?:|data:|blob:)/)) {
        src = apiBase + (src.startsWith("/") ? src : `/${src}`);
      }
      console.log("Image src after transform:", src);
      img.setAttribute("src", src);
      img.style.width = node.attrs.width;
      img.style.height = "auto";
      img.style.display = "block";
      img.style.userSelect = "none";

      // Fungsi untuk membuat handle di sudut tertentu
      const createHandle = (position: "tl" | "tr" | "bl" | "br") => {
        const handle = document.createElement("div");
        handle.classList.add("resize-handle-dot", `handle-${position}`);

        // CSS Inline untuk posisi masing-masing sudut
        const styles: Record<string, string> = {
          tl: "top: -6px; left: -6px; cursor: nw-resize;",
          tr: "top: -6px; right: -6px; cursor: ne-resize;",
          bl: "bottom: -6px; left: -6px; cursor: sw-resize;",
          br: "bottom: -6px; right: -6px; cursor: se-resize;",
        };
        handle.style.cssText = `position: absolute; width: 12px; height: 12px; background: #3b82f6; border: 2px solid white; border-radius: 50%; z-index: 10; display: none; ${styles[position]}`;

        handle.onmousedown = (e) => {
          e.preventDefault();
          e.stopPropagation();

          const startX = e.pageX;
          const startWidth = img.clientWidth;
          const containerWidth = container.parentElement?.clientWidth || 1000;

          const onMouseMove = (moveEvent: MouseEvent) => {
            let deltaX = 0;
            // Jika ditarik dari sisi kiri (tl/bl), arah geser mouse terbalik
            if (position === "tl" || position === "bl") {
              deltaX = startX - moveEvent.pageX;
            }
            else {
              deltaX = moveEvent.pageX - startX;
            }

            const newWidth = Math.max(50, startWidth + deltaX);
            const widthPercent = (newWidth / containerWidth) * 100;
            img.style.width = `${newWidth}px`;

            if (typeof getPos === "function") {
              editor.commands.updateAttributes("image", { width: `${widthPercent.toFixed(2)}%` });
            }
          };

          const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
          };

          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", onMouseUp);
        };
        return handle;
      };

      // Tambahkan keempat handle
      const handles = [
        createHandle("tl"),
        createHandle("tr"),
        createHandle("bl"),
        createHandle("br"),
      ];

      container.append(img, ...handles);

      return {
        dom: container,
        update: (updatedNode) => {
          if (updatedNode.type.name !== "image")
            return false;
          img.style.width = updatedNode.attrs.width;
          return true;
        },
      };
    };
  },
});

const editor = useEditor({
  content: transformHtml(props.value) || "",
  editable: !props?.disabled,
  extensions: [
    TextStyle,
    TextAlign.configure({
      types: ["heading", "paragraph", "image"],
    }),
    Link,
    Underline,
    Highlight,
    TiptapStarterKit.configure({
      heading: { levels: [1, 2, 3, 4, 5, 6] },
      link: false,
      underline: false,
    }),
    CustomImage.configure({
      inline: true,
    }),
    Placeholder.configure({
      placeholder: "Type something...",
    }),
  ],
  onUpdate: ({ editor }) => {
    if (!editor || props?.disabled)
      return;
    const html = editor.getHTML();
    const length = html.length;
    descriptionLength.value = length;
    console.log("Tiptap description length:", length);
    if (length > 10_000_000) {
      console.warn("Description length exceeds 10 MB, may cause server validation error.");
    }
    emits("update:value", html);
  },
  onBlur: () => {
    emits("onBlur");
  },
});

const fileInput = ref<HTMLInputElement>();
const descriptionLength = ref(0);
onBeforeUnmount(() => { unref(editor)!.destroy(); });

watch(() => props.disabled, (val) => { editor.value?.setEditable(!val); });
watch(() => props.value, (newValue) => {
  console.log("props.value changed:", newValue);
  const transformed = transformHtml(newValue);
  console.log("transformed HTML:", transformed);
  const currentHtml = editor.value?.getHTML();
  console.log("current editor HTML:", currentHtml);
  if (currentHtml !== transformed) {
    editor.value?.commands?.setContent(transformed);
    console.log("editor content set");
  }
  else {
    console.log("no change, skipping setContent");
  }
});

function setLink() {
  if (editor.value && typeof window !== "undefined") {
    const previousUrl = editor.value?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null)
      return;
    if (url === "") {
      editor.value.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    try {
      editor.value.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
    catch { console.error("Invalid URL:", url); }
  }
}

function addImage() { fileInput.value?.click(); }
function compressImage(file: File, maxWidth: number = 1000, maxHeight: number = 1000, quality: number = 0.8, preferWebP: boolean = true): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      // Calculate scaling ratio to fit within maxWidth and maxHeight while preserving aspect ratio
      const widthRatio = maxWidth / width;
      const heightRatio = maxHeight / height;
      const ratio = Math.min(widthRatio, heightRatio, 1); // don't scale up

      if (ratio < 1) {
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);

      // Try WebP if preferred and not already WebP
      const tryWebP = preferWebP && file.type !== "image/webp";
      const mimeType = tryWebP ? "image/webp" : file.type;

      canvas.toBlob(
        (blob) => {
          if (blob) {
            console.log(`Image compressed: ${blob.size} bytes, type ${blob.type}`);
            resolve(blob);
          }
          else if (tryWebP) {
            // Fallback to original type if WebP failed
            console.warn("WebP conversion failed, falling back to original type");
            canvas.toBlob(
              fallbackBlob => fallbackBlob ? resolve(fallbackBlob) : reject(new Error("Canvas toBlob failed")),
              file.type,
              quality,
            );
          }
          else {
            reject(new Error("Canvas toBlob failed"));
          }
        },
        mimeType,
        quality,
      );
    };
    img.onerror = () => reject(new Error("Failed to load image"));
  });
}

async function handleImageUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  const files = Array.from(target.files || []);
  if (!files.length || !editor.value)
    return;
  for (const file of files) {
    try {
      const compressedBlob = await compressImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        editor.value!.chain().focus().setImage({ src: dataUrl }).run();
      };
      reader.readAsDataURL(compressedBlob);
    }
    catch (err) {
      console.error("Image compression failed, using original", err);
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        editor.value!.chain().focus().setImage({ src: dataUrl }).run();
      };
      reader.readAsDataURL(file);
    }
  }
  target.value = "";
}
</script>

<template>
  <div v-if="editor">
    <EditorContent :editor="editor" class="from-editor-content" />
    <div v-if="descriptionLength > 10_000_000" class="mt-2 p-2 text-sm border border-yellow-300 bg-yellow-50 text-yellow-800 rounded">
      ⚠️ Description length is {{ descriptionLength }} characters. The server limits descriptions to 16 MB. Consider reducing image sizes or removing some images.
    </div>
    <div
      class="px-3 pb-2 pt-4 border border-t-0 border-dashboard-neutral-100 rounded-bl-lg rounded-br-lg -translate-y-1"
    >
      <div class="flex flex-wrap items-center gap-1">
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton
              size="icon-xs"
              variant="outline"
              type="button"
              class="w-auto px-2"
            >
              Format
              <Icon name="lucide:chevron-down" />
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent class="w-56 bg-dashboard-neutral-50 border-dashboard-neutral-100">
            <UiDropdownMenuItem as-child @click="editor.chain().focus().setParagraph().run()">
              <UiButton
                class="w-full border-0 justify-start"
                size="xs"
                variant="outline"
                type="button"
              >
                Paragraph
              </UiButton>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem
              v-for="i in 6"
              :key="i"
              as-child
              @click="editor.chain().focus().toggleHeading({ level: i as any }).run()"
            >
              <UiButton
                class="w-full border-0 justify-start"
                size="xs"
                variant="outline"
                type="button"
              >
                Heading {{ i }}
              </UiButton>
            </UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>

        <div class="mx-1.5">
          <span class="block w-px h-4 bg-gray-300" />
        </div>

        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <Icon name="lucide:bold" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <Icon name="lucide:italic" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('underline') }"
          @click="editor.chain().focus().toggleUnderline().run()"
        >
          <Icon name="lucide:underline" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <Icon name="lucide:strikethrough" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('highlight') }"
          @click="editor.chain().focus().toggleHighlight().run()"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M9 19.2H5.5c-.3 0-.5-.2-.5-.5V16c0-.2.2-.4.5-.4h13c.3 0 .5.2.5.4v2.7c0 .3-.2.5-.5.5H18m-6-1 1.4 1.8h.2l1.4-1.7m-7-5.4L12 4c0-.1 0-.1 0 0l4 8.8m-6-2.7h4m-7 2.7h2.5m5 0H17"
            />
          </svg>
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('code') }"
          @click="editor.chain().focus().toggleCode().run()"
        >
          <Icon name="lucide:code-xml" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('link') }"
          @click="setLink"
        >
          <Icon name="lucide:link" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :disabled="!editor.isActive('link')"
          @click="editor.chain().focus().unsetLink().run()"
        >
          <Icon name="lucide:unlink" />
        </UiButton>

        <div class="px-1.5">
          <span class="block w-px h-4 bg-gray-300" />
        </div>

        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive({ textAlign: 'left' }) }"
          @click="editor.chain().focus().setTextAlign('left').run()"
        >
          <Icon name="lucide:align-left" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive({ textAlign: 'center' }) }"
          @click="editor.chain().focus().setTextAlign('center').run()"
        >
          <Icon name="lucide:align-center" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive({ textAlign: 'right' }) }"
          @click="editor.chain().focus().setTextAlign('right').run()"
        >
          <Icon name="lucide:align-right" />
        </UiButton>

        <div class="mx-1.5">
          <span class="block w-px h-4 bg-gray-300" />
        </div>

        <UiButton
          size="icon-xs"
          variant="outline"
          @click="addImage"
        >
          <Icon name="lucide:image" />
        </UiButton>
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          class="hidden"
          multiple
          @change="handleImageUpload"
        >

        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <Icon name="lucide:list" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <Icon name="lucide:list-ordered" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :class="{ 'bg-dashboard-primary-50': editor.isActive('blockquote') }"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          <Icon name="lucide:quote" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          @click="editor.chain().focus().setHorizontalRule().run()"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 12h14M6 9.5h12m-12 9h12M6 7.5h12m-12 9h12M6 5.5h12m-12 9h12"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </UiButton>

        <div class="mx-1.5">
          <span class="block w-px h-4 bg-gray-300" />
        </div>

        <UiButton
          size="icon-xs"
          variant="outline"
          :disabled="!editor.can().undo()"
          @click="editor.chain().focus().undo().run()"
        >
          <Icon name="lucide:undo-2" />
        </UiButton>
        <UiButton
          size="icon-xs"
          variant="outline"
          :disabled="!editor.can().redo()"
          @click="editor.chain().focus().redo().run()"
        >
          <Icon name="lucide:redo-2" />
        </UiButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.ProseMirror) {
  outline: none;
  padding-bottom: 10px;
  /* Ruang extra agar tidak mentok */
}

/* Container Image agar Handle nempel di pojok gambar */
:deep(.resizable-image-wrapper) {
  margin: 0.5rem;
  border: 2px solid transparent;
  transition: all 0.2s;
  max-width: calc(100% - 1rem);
  display: inline-flex;
}

:deep(.resizable-image-wrapper:hover) {
  border-color: #3b82f6;
}

/* Titik Resize di pojok kanan bawah gambar */
:deep(.resize-handle-dot) {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 12px;
  height: 12px;
  background-color: #3b82f6;
  border: 2px solid white;
  border-radius: 50%;
  cursor: nwse-resize;
  z-index: 10;
  display: none;
}

:deep(.resizable-image-wrapper:hover .resize-handle-dot) {
  display: block !important;
}

/* Mendukung 3 foto sejajar jika dikecilkan */
:deep(.ProseMirror p) {
  display: block;
  margin-bottom: 1rem;
}

:deep(.ProseMirror img) {
  max-width: 100%;
  height: auto;
}

/* Pastikan paragraf tidak memutus inline-block gambar */
:deep(.ProseMirror .resizable-image-wrapper) {
  vertical-align: bottom;
}
</style>
