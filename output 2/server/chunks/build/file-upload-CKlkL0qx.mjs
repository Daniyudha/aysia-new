import { tv } from "tailwind-variants";
import { defineComponent, mergeProps, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { z } from "zod";

import __nuxt_component_0 from "./index-C2n46nfI.mjs";
import { a as useDropZone, u as useFileDialog } from "./index-Df46HAS4.mjs";

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dropfile",
  __ssrInlineRender: true,
  props: {
    title: { default: "Click to upload or drag & drop files." },
    subtext: { default: "All file types accepted" },
    icon: { default: "heroicons:cloud-arrow-up" },
    onDrop: {},
    multiple: { type: Boolean, default: true },
    accept: { default: "*" },
    class: {},
    disabled: { type: Boolean, default: false },
  },
  emits: ["dropped"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { reset, onChange } = useFileDialog({
      multiple: props.multiple,
      accept: props.accept,
    });
    onChange((files) => {
      if (files?.length && !props?.disabled) {
        handleDrop(Array.from(files || []));
        reset();
      }
    });
    const dropZoneRef = ref();
    function handleDrop(files) {
      if (!files && props?.disabled) {
        return;
      }
      if (props.onDrop) {
        props.onDrop(files);
      }
      emits("dropped", files);
    }
    const { isOverDropZone } = useDropZone(dropZoneRef, handleDrop);
    const styles = tv({
      base: "flex w-full cursor-pointer items-center justify-center rounded-md border border-dashboard-neutral-100 border-dashed transition",
      variants: {
        isOverDropZone: {
          true: "border-dashboard-primary-50 bg-dashboard-primary-50",
        },
        disabled: {
          true: "bg-black/10 cursor-not-allowed",
        },
      },
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "dropZoneRef",
        ref: dropZoneRef,
        class: unref(styles)({ isOverDropZone: unref(isOverDropZone), class: props.class, disabled: props?.disabled }),
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "message", {}, () => {
        _push(`<div class="py-10 text-center">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          if (__props.icon) {
            _push(`<div class="${ssrRenderClass([[unref(isOverDropZone) && "animate-bounce border-primary"], "inline-flex items-center justify-center rounded-md border border-dashboard-neutral-100 p-2 transition"])}">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: __props.icon,
              class: ["h-7 w-7 opacity-70", [unref(isOverDropZone) && "text-primary"]],
            }, null, _parent));
            _push(`</div>`);
          }
          else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
          _push(`<p class="mt-5 text-sm font-medium">${__props.title ?? ""}</p>`);
        }, _push, _parent);
        ssrRenderSlot(_ctx.$slots, "subtext", {}, () => {
          _push(`<p class="mt-1 text-sm text-muted-foreground/60">${__props.subtext ?? ""}</p>`);
        }, _push, _parent);
        _push(`</div>`);
      }, _push, _parent);
      _push(`</div>`);
    };
  },
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "UiDropfile" });
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MIN_DIMENSIONS = { width: 200, height: 200 };
const MAX_DIMENSIONS = { width: 4096, height: 4096 };
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
function formatBytes(bytes, decimals = 2) {
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}
function createObjectURL(selectedImage) {
  if (typeof selectedImage === "string") {
    return selectedImage;
  }
  if (selectedImage instanceof File) {
    return URL.createObjectURL(selectedImage);
  }
  return null;
}
const ImageUploadSchema = z.instanceof(File, {
  message: "Please select an image file.",
}).refine(file => file.size <= MAX_FILE_SIZE, {
  message: `The image is too large. Please choose an image smaller than ${formatBytes(MAX_FILE_SIZE)}.`,
}).refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
  message: "Please upload a valid image file (JPEG, PNG, or WebP).",
}).refine(
  file => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const meetsDimensions = img.width >= MIN_DIMENSIONS.width && img.height >= MIN_DIMENSIONS.height && img.width <= MAX_DIMENSIONS.width && img.height <= MAX_DIMENSIONS.height;
        resolve(meetsDimensions);
      };
      img.src = e.target?.result;
    };
    reader.readAsDataURL(file);
  }),
  {
    message: `The image dimensions are invalid. Please upload an image between ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height} and ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} pixels.`,
  },
);

export { __nuxt_component_3 as _, createObjectURL as c, ImageUploadSchema as I };
// # sourceMappingURL=file-upload-CKlkL0qx.mjs.map
