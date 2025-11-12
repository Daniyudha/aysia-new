import { _ as __nuxt_component_0 } from './nuxt-link-Bh--EX_l.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_1 } from './tiktok-DOxTmlmn.mjs';
import { u as useRuntimeConfig } from './server.mjs';
import { defineComponent, inject, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { p as pagesAboutFetchData } from './pages-about-C7lhVPt5.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Aysia LinggarWati - About",
      meta: [
        {
          name: "description",
          content: "Welcome to the official website of Aysia LinggarWati, where creativity meets elegance. Explore our portfolio and discover the essence of our work."
        },
        {
          name: "keywords",
          content: "Aysia LinggarWati, portfolio, creative, design, elegance"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]
    });
    const { data } = useAsyncData("page-about-content", () => pagesAboutFetchData().getAll(), {
      lazy: true
    });
    const sharedData = inject("socialMedia");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconInstagram = __nuxt_component_1$1;
      const _component_IconTiktok = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))}><div class="app-container"><div class="flex flex-col lg:flex-row gap-6 justify-between"><div class="lg:w-5/12">`);
      if (!!unref(data)?.data?.[0]?.thumbnail?.length) {
        _push(`<img${ssrRenderAttr("src", ("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBase + unref(data)?.data?.[0]?.thumbnail)}${ssrRenderAttr("alt", unref(data)?.data?.[0]?.title)} width="530" height="707" class="w-full h-auto object-cover object-top">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="lg:w-6/12 flex flex-col justify-center"><p class="text-[2.25rem] text-app-secondary font-light"> About </p><h1 class="mb-6 text-[5rem] md:text-[7rem] font-medium leading-[100%] tracking-[0%] text-app-secondary">${ssrInterpolate(unref(data)?.data?.[0]?.title ?? "Asyia Linggarwati")}</h1><ul class="flex space-x-8 mb-6">`);
      if (!!unref(sharedData)?.instagram?.link?.length) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(sharedData)?.instagram?.link,
          external: "",
          target: "_blank",
          class: "link-with-icon"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconInstagram, { fill: "#533A1B" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_IconInstagram, { fill: "#533A1B" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (!!unref(sharedData)?.tiktok?.link?.length) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(sharedData)?.tiktok?.link,
          external: "",
          target: "_blank",
          class: "link-with-icon"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconTiktok, { fill: "#533A1B" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_IconTiktok, { fill: "#533A1B" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul><div class="font-sans text-sm space-y-6 font-light">${unref(data)?.data?.[0]?.description ?? ""}</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-7oPcEJfo.mjs.map
