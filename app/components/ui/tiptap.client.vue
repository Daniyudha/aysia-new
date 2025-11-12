<script setup lang="ts">
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { Placeholder } from "@tiptap/extensions";
import { EditorContent, useEditor } from "@tiptap/vue-3";

const props = defineProps<{
  value: string;
  disabled?: boolean;
}>();
const emits = defineEmits<{
  (e: "update:value", value: string): void;
  (e: "onBlur"): void;
}>();
const editor = useEditor({
  content: props.value || "",
  editable: !props?.disabled,
  extensions: [
    TextStyle,
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Link,
    Underline,
    Highlight,
    TiptapStarterKit.configure({
      heading: {
        levels: [1, 2, 3, 4, 5, 6],
      },
    }),
    Image,
    Placeholder.configure({
      placeholder: "Type something...",
    }),
  ],
  onUpdate: ({ editor }) => {
    if (!editor || props?.disabled)
      return;
    emits("update:value", editor.getHTML());
  },
  onBlur: () => {
    emits("onBlur");
  },
});

onBeforeUnmount(() => {
  unref(editor)!.destroy();
});

watch(props, () => {
  editor.value?.setEditable(!props?.disabled);
});

function setLink() {
  if (editor.value && typeof window !== "undefined") {
    const previousUrl = editor.value?.getAttributes("link").href;
    // eslint-disable-next-line no-alert
    const url = window.prompt("URL", previousUrl);
    if (url === null) {
      return;
    }
    if (url === "") {
      editor.value.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    try {
      editor.value
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
    catch {
      console.error("Invalid URL:", url);
    }
  }
}

function addImage() {
  if (editor.value && typeof window !== "undefined") {
    // eslint-disable-next-line no-alert
    const url = window.prompt("URL");
    if (url) {
      editor.value.chain().focus().setImage({ src: url }).run();
    }
  }
}

watch(
  () => props.value,
  (newValue) => {
    if (editor.value?.getHTML() !== newValue) {
      editor.value?.commands?.setContent(newValue);
    }
  },
);
</script>

<template>
  <div v-if="editor">
    <EditorContent :editor="editor" class="from-editor-content" />
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
          <UiDropdownMenuContent
            class="w-56 bg-dashboard-neutral-50 border-dashboard-neutral-100"
          >
            <UiDropdownMenuItem as-child>
              <UiButton
                class="w-full border-0 justify-start"
                size="xs"
                variant="outline"
                type="button"
                @click="editor.chain().focus().setParagraph().run()"
              >
                Paragraph
              </UiButton>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem as-child>
              <UiButton
                class="w-full border-0 justify-start"
                size="xs"
                variant="outline"
                type="button"
                @click="
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                "
              >
                Heading 1
              </UiButton>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem as-child>
              <UiButton
                class="w-full border-0 justify-start"
                size="xs"
                variant="outline"
                type="button"
                @click="
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                "
              >
                Heading 2
              </UiButton>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem as-child>
              <UiButton
                class="w-full border-0 justify-start"
                size="xs"
                variant="outline"
                type="button"
                @click="
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                "
              >
                Heading 3
              </UiButton>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem as-child>
              <UiButton
                class="w-full border-0 justify-start"
                size="xs"
                variant="outline"
                type="button"
                @click="
                  editor.chain().focus().toggleHeading({ level: 4 }).run()
                "
              >
                Heading 4
              </UiButton>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem as-child>
              <UiButton
                class="w-full border-0 justify-start"
                size="xs"
                variant="outline"
                type="button"
                @click="
                  editor.chain().focus().toggleHeading({ level: 5 }).run()
                "
              >
                Heading 5
              </UiButton>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem as-child>
              <UiButton
                class="w-full border-0 justify-start"
                size="xs"
                variant="outline"
                type="button"
                @click="
                  editor.chain().focus().toggleHeading({ level: 6 }).run()
                "
              >
                Heading 6
              </UiButton>
            </UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
        <div class="mx-1.5">
          <span class="block w-px h-4 bg-gray-300" />
        </div>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('bold'),
          }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <Icon name="lucide:bold" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('italic'),
          }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <Icon name="lucide:italic" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :disabled="!editor.can().chain().focus().toggleUnderline().run()"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('underline'),
          }"
          @click="editor.chain().focus().toggleUnderline().run()"
        >
          <Icon name="lucide:underline" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('strike'),
          }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <Icon name="lucide:strikethrough" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :disabled="!editor.can().chain().focus().toggleHighlight().run()"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('highlight'),
          }"
          @click="editor.chain().focus().toggleHighlight().run()"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
          class="text-lg"
          variant="outline"
          :disabled="!editor.can().chain().focus().toggleCode().run()"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('code'),
          }"
          @click="editor.chain().focus().toggleCode().run()"
        >
          <Icon name="lucide:code-xml" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :disabled="!editor.can().chain().focus().toggleLink().run()"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('link'),
          }"
          @click="setLink"
        >
          <Icon name="lucide:link" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
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
          class="text-lg"
          variant="outline"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive({ textAlign: 'left' }),
          }"
          @click="editor.chain().focus().toggleTextAlign('left').run()"
        >
          <Icon name="lucide:align-left" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive({ textAlign: 'center' }),
          }"
          @click="editor.chain().focus().toggleTextAlign('center').run()"
        >
          <Icon name="lucide:align-center" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive({ textAlign: 'right' }),
          }"
          @click="editor.chain().focus().toggleTextAlign('right').run()"
        >
          <Icon name="lucide:align-right" />
        </UiButton>
        <div class="mx-1.5">
          <span class="block w-px h-4 bg-gray-300" />
        </div>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          @click="addImage"
        >
          <Icon name="lucide:image" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('bulletList'),
          }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <Icon name="lucide:list" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('orderedList'),
          }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <Icon name="lucide:list-ordered" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :class="{
            'bg-dashboard-primary-50 text-dashboard-accent-50 hover:bg-dashboard-primary-5 hover:text-dashboard-accent-50':
              editor.isActive('blockquote'),
          }"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          <Icon name="lucide:quote" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          @click="editor.chain().focus().setHorizontalRule().run()"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 12h14"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              d="M6 9.5h12m-12 9h12M6 7.5h12m-12 9h12M6 5.5h12m-12 9h12"
            />
          </svg>
        </UiButton>
        <div class="mx-1.5">
          <span class="block w-px h-4 bg-gray-300" />
        </div>
        <UiButton
          size="icon-xs"
          class="text-lg"
          variant="outline"
          :disabled="!editor.can().undo()"
          @click="editor.chain().focus().undo().run()"
        >
          <Icon name="lucide:undo-2" />
        </UiButton>
        <UiButton
          size="icon-xs"
          class="text-lg"
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
