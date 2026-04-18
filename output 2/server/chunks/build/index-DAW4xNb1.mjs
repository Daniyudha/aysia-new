import emblaCarouselVue from "embla-carousel-vue";
import { computed, createTextVNode, createVNode, defineComponent, mergeProps, ref, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";

import { u as useAsyncData } from "./asyncData-DuMyQiaR.mjs";
import { c as categoryFetcher } from "./category-DozWu4oW.mjs";
import { u as useHead } from "./composables-D0i6IdhD.mjs";
import __nuxt_component_0$1 from "./index-C2n46nfI.mjs";
import { j as journeyFetcher } from "./journey-9vIRkXmx.mjs";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-Bh--EX_l.mjs";
import { _ as _export_sfc, u as useRuntimeConfig } from "./server.mjs";
import { u as useQueryParams } from "./useQueryParams-DKrG4n2c.mjs";
import "../nitro/nitro.mjs";
import "node:http";
import "node:https";
import "node:events";
import "node:buffer";
import "node:fs";
import "node:path";
import "node:crypto";
import "node:url";
import "@iconify/utils";
import "consola";
import "vue-router";
import "reka-ui";
import "tailwind-variants";

import "./constant-D5BqL6of.mjs";
import "../routes/renderer.mjs";
import "vue-bundle-renderer/runtime";
import "unhead/server";
import "devalue";
import "unhead/utils";
import "perfect-debounce";

const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-4 border-y border-app-secondary" }, _attrs))}><div class="app-container"><div class="flex flex-col md:flex-row justify-between items-center"><h1 class="text-app-secondary text-5xl font-normal leading-[100%]"> Gallery </h1><div class="w-full md:w-6/12">`);
  ssrRenderSlot(_ctx.$slots, "filter", {}, null, _push, _parent);
  _push(`</div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery/header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]), { __name: "GalleryHeader" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "filter-button",
  __ssrInlineRender: true,
  props: {
    value: {},
  },
  setup(__props) {
    const props = __props;
    const { currentQueryParams } = useQueryParams();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "data-filter": _ctx.$props.value,
        "role": "tab",
        "type": "button",
        "aria-controls": "content-area",
        "aria-selectedd": props.value === unref(currentQueryParams)?.category,
        "tabindex": props.value === unref(currentQueryParams)?.category ? 0 : -1,
        "class": ["px-2 text-md font-light transition-all duration-300 cursor-pointer hover:underline", {
          "font-medium underline": props.value === unref(currentQueryParams)?.category,
        }],
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  },
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery/filter-button.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$4, { __name: "GalleryFilterButton" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "header-filter",
  __ssrInlineRender: true,
  props: {
    categories: { default: () => [] },
  },
  setup(__props) {
    const props = __props;
    const [emblaRef, emblaApi] = emblaCarouselVue();
    const canScrollPrev = ref(false);
    const canScrollNext = ref(false);
    const computedCategories = computed(() => {
      return [{ name: "All", value: "all" }].concat(
        props.categories.map(category => ({
          name: category.name,
          value: category.id,
        })),
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_GalleryFilterButton = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[98%] mx-auto flex gap-2 items-center justify-between" }, _attrs))} data-v-b8dfeedd><button type="button" class="inline-flex disabled:opacity-50 items-center"${ssrIncludeBooleanAttr(!unref(canScrollPrev)) ? " disabled" : ""} data-v-b8dfeedd>`);
      _push(ssrRenderComponent(_component_Icon, { name: "heroicons:chevron-left-16-solid" }, null, _parent));
      _push(`</button><div class="filter-embla overflow-hidden relative w-full" data-v-b8dfeedd><div class="filter-embla__container flex" role="tablist" data-v-b8dfeedd><!--[-->`);
      ssrRenderList(unref(computedCategories), (category) => {
        _push(`<div class="filter-embla__slide flex-shrink-0 px-2 py-1" role="presentation" data-v-b8dfeedd>`);
        _push(ssrRenderComponent(_component_GalleryFilterButton, {
          value: category.value,
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            }
            else {
              return [
                createTextVNode(toDisplayString(category.name), 1),
              ];
            }
          }),
          _: 2,
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><button type="button" class="inline-flex disabled:opacity-50 items-center"${ssrIncludeBooleanAttr(!unref(canScrollNext)) ? " disabled" : ""} data-v-b8dfeedd>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chevron-left-16-solid",
        class: "rotate-180",
      }, null, _parent));
      _push(`</button></div>`);
    };
  },
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery/header-filter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-b8dfeedd"]]), { __name: "GalleryHeaderFilter" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "collection-grid",
  __ssrInlineRender: true,
  props: {
    collections: {},
    chunckSize: { default: 2 },
    pending: { type: Boolean },
  },
  setup(__props) {
    const props = __props;
    const groupedGalleries = computed(() => {
      const groups = [];
      const size = props.chunckSize;
      for (let i = 0; i < props?.collections?.length; i += size) {
        groups.push(props.collections.slice(i, i + size));
      }
      return groups;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      if (__props.pending) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center my-10 animate-spin" }, _attrs))} data-v-80d256ad>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "gg:spinner",
          style: { width: "4rem", height: "4rem" },
        }, null, _parent));
        _push(`</div>`);
      }
      else if (!__props.pending && !__props.collections.length) {
        _push(`<p${ssrRenderAttrs(mergeProps({ class: "text-center text-3xl my-6" }, _attrs))} data-v-80d256ad> No galleries found. </p>`);
      }
      else if (!__props.pending && __props.collections.length) {
        _push(`<section${ssrRenderAttrs(_attrs)} data-v-80d256ad><div class="md:hidden" data-v-80d256ad><!--[-->`);
        ssrRenderList(__props.collections, (item, index) => {
          _push(`<div class="border-b py-10" data-v-80d256ad><div class="app-container" data-v-80d256ad><div class="collection-grid" data-v-80d256ad>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: {
              name: "galleries-galleryId",
              params: { galleryId: item?.id },
            },
            class: "group flex flex-col items-end w-full text-app-secondary",
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBase}${item?.thumbnail}`)}${ssrRenderAttr("alt", item.title)} class="w-full h-auto object-cover object-top mb-3" data-v-80d256ad${_scopeId}><p class="text-base font-light text-right" data-v-80d256ad${_scopeId}>${ssrInterpolate(item?.gallery_category_name)}</p><p class="group-hover:after:block font-medium text-4xl text-right relative after:content-[&#39;&#39;] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-1 after:bg-app-secondary after:hidden after:transition-all" data-v-80d256ad${_scopeId}>${ssrInterpolate(item?.title)}</p>`);
              }
              else {
                return [
                  createVNode("img", {
                    src: `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBase}${item?.thumbnail}`,
                    alt: item.title,
                    class: "w-full h-auto object-cover object-top mb-3",
                  }, null, 8, ["src", "alt"]),
                  createVNode("p", { class: "text-base font-light text-right" }, toDisplayString(item?.gallery_category_name), 1),
                  createVNode("p", { class: "group-hover:after:block font-medium text-4xl text-right relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-1 after:bg-app-secondary after:hidden after:transition-all" }, toDisplayString(item?.title), 1),
                ];
              }
            }),
            _: 2,
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div><!--[-->`);
        ssrRenderList(unref(groupedGalleries), (groupedGallery, index) => {
          _push(`<div class="grouped-collection-row hidden md:block" data-v-80d256ad><div class="app-container" data-v-80d256ad><div class="collection-grid" data-v-80d256ad><!--[-->`);
          ssrRenderList(groupedGallery, (item, indexItem) => {
            _push(`<div class="collection-grid-item" data-v-80d256ad>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: {
                name: "galleries-galleryId",
                params: { galleryId: item?.id },
              },
              class: "group flex flex-col items-end w-full text-app-secondary",
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img${ssrRenderAttr("src", `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBase}${item?.thumbnail}`)}${ssrRenderAttr("alt", item.title)} class="w-full h-auto object-cover object-top mb-3 aspect-square" lazy="true" data-v-80d256ad${_scopeId}><p class="text-base font-light text-right" data-v-80d256ad${_scopeId}>${ssrInterpolate(item?.gallery_category_name)}</p><p class="font-medium text-4xl text-right relative after:content-[&#39;&#39;] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-1 after:bg-app-secondary after:hidden after:transition-all group-hover:after:block" data-v-80d256ad${_scopeId}>${ssrInterpolate(item?.title)}</p>`);
                }
                else {
                  return [
                    createVNode("img", {
                      src: `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBase}${item?.thumbnail}`,
                      alt: item.title,
                      class: "w-full h-auto object-cover object-top mb-3 aspect-square",
                      lazy: "true",
                    }, null, 8, ["src", "alt"]),
                    createVNode("p", { class: "text-base font-light text-right" }, toDisplayString(item?.gallery_category_name), 1),
                    createVNode("p", { class: "font-medium text-4xl text-right relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-1 after:bg-app-secondary after:hidden after:transition-all group-hover:after:block" }, toDisplayString(item?.title), 1),
                  ];
                }
              }),
              _: 2,
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div></div></div>`);
        });
        _push(`<!--]--></section>`);
      }
      else {
        _push(`<!---->`);
      }
    };
  },
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery/collection-grid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-80d256ad"]]), { __name: "GalleryCollectionGrid" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "pagination",
  __ssrInlineRender: true,
  props: {
    currentPage: { default: 1 },
    totalPages: { default: 1 },
  },
  setup(__props) {
    useQueryParams();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-5" }, _attrs))}><div class="app-container text-app-secondary"><div class="flex items-center justify-between gap-4"><button${ssrIncludeBooleanAttr(_ctx.$props?.currentPage === 1) ? " disabled" : ""} type="button" class="inline-flex gap-[0.25rem] items-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:arrow-left-20-solid",
        width: "20",
        height: "20",
      }, null, _parent));
      _push(`<span class="inline-block text-xl">Page ${ssrInterpolate(__props.currentPage === 1 ? 1 : __props.currentPage - 1)}</span></button><p class="text-[1.75rem] font-bold">${ssrInterpolate(__props.currentPage)}</p><button type="button"${ssrIncludeBooleanAttr(_ctx.$props?.currentPage === _ctx.$props?.totalPages) ? " disabled" : ""} class="inline-flex gap-[0.25rem] items-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"><span class="inline-block text-xl">Page ${ssrInterpolate(__props.currentPage === __props.totalPages ? __props.totalPages : __props.currentPage + 1)}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:arrow-left-20-solid",
        class: "rotate-180",
        width: "20",
        height: "20",
      }, null, _parent));
      _push(`</button></div></div></section>`);
    };
  },
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery/pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "GalleryPagination" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Aysia LinggarWati - Gallery",
      meta: [
        {
          name: "description",
          content: "Welcome to the official website of Aysia LinggarWati, where creativity meets elegance. Explore our portfolio and discover the essence of our work.",
        },
        {
          name: "keywords",
          content: "Aysia LinggarWati, portfolio, creative, design, elegance",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
    const { currentQueryParams } = useQueryParams();
    const { data } = useAsyncData(
      "journey_categories",
      () => categoryFetcher().get({}),
      {
        lazy: true,
      },
    );
    const { data: journeys, pending: journeysPending } = useAsyncData(`journey-list-${currentQueryParams.value?.category}-${currentQueryParams.value?.page}`, () => {
      const category = currentQueryParams.value.category;
      const currentPage = currentQueryParams?.value?.page ? Number(currentQueryParams?.value?.page) : 1;
      if (category) {
        return journeyFetcher().getByCategoryId(category?.toString(), { limit: 9, page: currentPage });
      }
      else {
        return journeyFetcher().getAll({ limit: 9, page: currentPage });
      }
    }, {
      watch: [currentQueryParams],
      lazy: true,
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GalleryHeader = __nuxt_component_0;
      const _component_GalleryHeaderFilter = __nuxt_component_1;
      const _component_GalleryCollectionGrid = __nuxt_component_2;
      const _component_GalleryPagination = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_GalleryHeader, null, {
        filter: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_GalleryHeaderFilter, {
              categories: unref(data)?.data,
            }, null, _parent2, _scopeId));
          }
          else {
            return [
              createVNode(_component_GalleryHeaderFilter, {
                categories: unref(data)?.data,
              }, null, 8, ["categories"]),
            ];
          }
        }),
        _: 1,
      }, _parent));
      _push(ssrRenderComponent(_component_GalleryCollectionGrid, {
        collections: unref(journeys)?.data ?? [],
        pending: unref(journeysPending),
      }, null, _parent));
      _push(ssrRenderComponent(_component_GalleryPagination, {
        "total-pages": unref(journeys)?.totalPages ?? 1,
        "current-page": unref(currentQueryParams)?.page ? Number(unref(currentQueryParams)?.page) : 1,
      }, null, _parent));
      _push(`<!--]-->`);
    };
  },
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galleries/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
// # sourceMappingURL=index-DAW4xNb1.mjs.map
