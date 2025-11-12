import { _ as __nuxt_component_0$1 } from './nuxt-link-Bh--EX_l.mjs';
import { defineComponent, provide, unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
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
import './tiktok-DOxTmlmn.mjs';
import './constant-D5BqL6of.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "pt-12 pb-9" }, _attrs))} data-v-ef56fa22><div class="app-container py-4" data-v-ef56fa22><div class="flex flex-col md:flex-row justify-between gap-4" data-v-ef56fa22>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-center inline-block font-cinzel-decorative text-app-secondary text-2xl leading-[100%] tracking-[-5%]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Aysia<br data-v-ef56fa22${_scopeId}> LinggarWati `);
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
  _push(`<ul class="py-2 flex gap-10 md:gap-[72px] justify-center" data-v-ef56fa22><li data-v-ef56fa22>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "header-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ef56fa22>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "header-link"
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
  _push(`</li><li data-v-ef56fa22>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/galleries",
    class: "header-link"
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
  _push(`</li><li data-v-ef56fa22>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "header-link"
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
  _push(`</li></ul></div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ef56fa22"]]), { __name: "AppHeader" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
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
    provide("socialMedia", data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="md:flex-1">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BqUnalLv.mjs.map
