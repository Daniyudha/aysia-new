import { createTextVNode, createVNode, defineComponent, mergeProps, useSSRContext, withCtx } from "vue";
import { ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";

import { _ as __nuxt_component_0 } from "./nuxt-link-Bh--EX_l.mjs";
import { _ as _export_sfc } from "./server.mjs";
import { _ as __nuxt_component_1$1, a as __nuxt_component_1$2 } from "./tiktok-DOxTmlmn.mjs";

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  props: {
    socialMedia: {},
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconInstagram = __nuxt_component_1$1;
      const _component_IconTiktok = __nuxt_component_1$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-app-secondary py-6 text-app-primary overflow-hidden" }, _attrs))} data-v-0a3d6a31><div class="app-container" data-v-0a3d6a31><div class="flex flex-col md:flex-row justify-between items-center gap-8" data-v-0a3d6a31>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-center font-cinzel-decorative text-2xl md:text-3xl text-app-text-primary tracking-wide",
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Aysia<br data-v-0a3d6a31${_scopeId}> LinggarWati `);
          }
          else {
            return [
              createTextVNode(" Aysia"),
              createVNode("br"),
              createTextVNode(" LinggarWati "),
            ];
          }
        }),
        _: 1,
      }, _parent));
      _push(`<div class="flex flex-col items-center md:items-end" data-v-0a3d6a31><ul class="flex flex-wrap justify-center md:justify-end items-center gap-5 md:gap-7 mb-3" data-v-0a3d6a31><li data-v-0a3d6a31>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "footer-link",
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          }
          else {
            return [
              createTextVNode("About"),
            ];
          }
        }),
        _: 1,
      }, _parent));
      _push(`</li><li data-v-0a3d6a31><span class="footer-divider" data-v-0a3d6a31>|</span></li><li data-v-0a3d6a31>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/galleries",
        class: "footer-link",
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Gallery`);
          }
          else {
            return [
              createTextVNode("Gallery"),
            ];
          }
        }),
        _: 1,
      }, _parent));
      _push(`</li><li data-v-0a3d6a31><span class="footer-divider" data-v-0a3d6a31>|</span></li><li data-v-0a3d6a31>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "footer-link",
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          }
          else {
            return [
              createTextVNode("Contact"),
            ];
          }
        }),
        _: 1,
      }, _parent));
      _push(`</li>`);
      if (_ctx.$props?.socialMedia?.instagram?.link?.length) {
        _push(`<li data-v-0a3d6a31><a${ssrRenderAttr("href", _ctx.$props?.socialMedia?.instagram?.link)} target="_blank" rel="noopener" class="footer-social-link" data-v-0a3d6a31>`);
        _push(ssrRenderComponent(_component_IconInstagram, null, null, _parent));
        _push(`</a></li>`);
      }
      else {
        _push(`<!---->`);
      }
      if (_ctx.$props?.socialMedia?.tiktok?.link?.length) {
        _push(`<li data-v-0a3d6a31><a${ssrRenderAttr("href", _ctx.$props?.socialMedia?.tiktok?.link)} target="_blank" rel="noopener" class="footer-social-link" data-v-0a3d6a31>`);
        _push(ssrRenderComponent(_component_IconTiktok, null, null, _parent));
        _push(`</a></li>`);
      }
      else {
        _push(`<!---->`);
      }
      _push(`</ul><p class="text-sm md:text-base font-light text-app-text-primary/70 tracking-wide" data-v-0a3d6a31> © 2025 <span class="text-app-text-primary font-medium" data-v-0a3d6a31>Aysia LinggarWati</span>. Crafted with care by <a href="https://gegacreative.com/" target="_blank" class="font-semibold text-blue-400 hover:text-blue-500 transition-colors" data-v-0a3d6a31> Gega Creative </a></p></div></div></div></footer>`);
    };
  },
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-0a3d6a31"]]), { __name: "AppFooter" });

export { __nuxt_component_1 as _ };
// # sourceMappingURL=footer-qzgl3Iqa.mjs.map
