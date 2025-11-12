import { _ as __nuxt_component_0$1 } from './nuxt-link-Bh--EX_l.mjs';
import { a as __nuxt_component_1$1 } from './tiktok-DOxTmlmn.mjs';
import { defineComponent, unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1 } from './footer-qzgl3Iqa.mjs';
import { s as socialMediaFetchData } from './social-media-CCAYuXM7.mjs';
import { u as useHead } from './composables-D0i6IdhD.mjs';
import { u as useAsyncData } from './asyncData-DuMyQiaR.mjs';
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
import './constant-D5BqL6of.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "homepage-header",
  __ssrInlineRender: true,
  props: {
    socialMedia: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_IconTiktok = __nuxt_component_1$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "pb-4 pt-12" }, _attrs))} data-v-9b5ac778><div class="app-container mx-auto" data-v-9b5ac778><div class="text-center mb-4" data-v-9b5ac778>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "font-cinzel-decorative text-4xl md:text-5xl text-app-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Aysia<br data-v-9b5ac778${_scopeId}> LinggarWati `);
          } else {
            return [
              createTextVNode(" Aysia"),
              createVNode("br"),
              createTextVNode(" LinggarWati ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-center mb-4" data-v-9b5ac778>`);
      if (!!_ctx.$props?.socialMedia?.tiktok?.link?.length) {
        _push(`<a${ssrRenderAttr("href", _ctx.$props?.socialMedia?.tiktok?.link)} target="_blank" class="opacity-60" data-v-9b5ac778>`);
        _push(ssrRenderComponent(_component_IconTiktok, { fill: "#533A1B" }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><ul class="flex justify-center w-10/12 md:w-8/12 md:max-w-1/2 mx-auto flex-wrap" data-v-9b5ac778><li class="px-2 flex-1 text-center" data-v-9b5ac778>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-3xl md:text-4xl text-app-secondary leading-[100%] font-normal hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="px-2 flex-1 text-center" data-v-9b5ac778>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/galleries",
        class: "text-3xl md:text-4xl text-app-secondary leading-[100%] font-normal hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Gallery `);
          } else {
            return [
              createTextVNode(" Gallery ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="px-2 flex-1 text-center" data-v-9b5ac778>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-3xl md:text-4xl text-app-secondary leading-[100%] font-normal hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/homepage-header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-9b5ac778"]]), { __name: "AppHomepageHeader" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "homepage",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      htmlAttrs: {
        class: "custom-font"
      }
    });
    const { data } = useAsyncData("social-media", () => socialMediaFetchData().getAll(), {
      lazy: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHomepageHeader = __nuxt_component_0;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHomepageHeader, { "social-media": unref(data) }, null, _parent));
      _push(`<main class="flex-1 flex flex-col">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, { "social-media": unref(data) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/homepage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=homepage-Bz12_19u.mjs.map
