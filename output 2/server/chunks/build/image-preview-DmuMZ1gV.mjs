import __nuxt_component_0 from './index-C2n46nfI.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import 'reka-ui';
import 'tailwind-variants';
import './composables-D0i6IdhD.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './asyncData-DuMyQiaR.mjs';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "image-preview",
  __ssrInlineRender: true,
  props: {
    imageUrl: {},
    disabled: { type: Boolean }
  },
  emits: ["onDeleteImage"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex w-auto cursor-pointer items-center justify-center rounded-md border border-dashboard-neutral-100 border-dashed transition relative group" }, _attrs))}><img${ssrRenderAttr("src", _ctx.$props.imageUrl)} class="max-w-full h-auto">`);
      if (!_ctx.$props?.disabled) {
        _push(`<div class="absolute z-10 opacity-0 group-hover:opacity-100 bg-black/80 top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4"><button type="button" class="inline-flex items-center justify-center text-white text-lg cursor-pointer">`);
        _push(ssrRenderComponent(_component_Icon, { name: "lucide:trash" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/image-preview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const imagePreview = Object.assign(_sfc_main, { __name: "UiImagePreview" });

export { imagePreview as default };
//# sourceMappingURL=image-preview-DmuMZ1gV.mjs.map
