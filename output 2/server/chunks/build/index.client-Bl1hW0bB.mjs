import { _ as __nuxt_component_0, a as __nuxt_component_1$1$1, c as __nuxt_component_0$1$1 } from './card-BC35WKp2.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Bh--EX_l.mjs';
import __nuxt_component_0$2 from './index-C2n46nfI.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, withAsyncContext, createTextVNode, unref, createBlock, openBlock, renderSlot, Fragment, renderList, toDisplayString, createCommentVNode, ref, computed, defineAsyncComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { useForwardPropsEmits, AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent, AccordionHeader } from 'reka-ui';
import { tv } from 'tailwind-variants';
import { r as reactiveOmit } from './index-BAtNd0PJ.mjs';
import { u as useForm, t as toTypedSchema, F as Field, _ as __nuxt_component_5$1 } from './vee-validate-zod-NJbS403e.mjs';
import { _ as __nuxt_component_2$1 } from './item-BzJ-gaK3.mjs';
import { _ as __nuxt_component_3$1, c as createObjectURL, I as ImageUploadSchema } from './file-upload-CKlkL0qx.mjs';
import { e as useRoute, u as useRuntimeConfig, a as __nuxt_component_16, b as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_7 } from './footer-DXV0za36.mjs';
import { _ as __nuxt_component_0$3 } from './button-BrROYuAJ.mjs';
import { j as journeyDetailFetcher } from './journey-detail-DrgFQ8dR.mjs';
import { z } from 'zod';
import { t as toast } from './index-DJGQOf1Z.mjs';
import { _ as __nuxt_component_2$2, a as __nuxt_component_3$2, b as __nuxt_component_5$2, c as __nuxt_component_4$2 } from './head-CEZx0sjE.mjs';
import { _ as __nuxt_component_1$2 } from './client-only-B_PoH0ma.mjs';
import { u as useModalForm } from './useModalForm-CBkmuIPn.mjs';
import { j as journeyFetcher } from './journey-9vIRkXmx.mjs';
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
import './composables-D0i6IdhD.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-Df46HAS4.mjs';
import 'vue-router';
import './constant-D5BqL6of.mjs';
import 'perfect-debounce';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "item",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    value: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class");
    const styles = tv({
      base: "border-x border-t last:border-b border-dashboard-neutral-100/80 px-4 py-1 first:rounded-t-lg last:rounded-b-lg"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionItem), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/item.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$8, { __name: "UiAccordionItem" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class");
    const styles = tv({
      base: "flex"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionHeader), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$7, { __name: "UiAccordionHeader" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "trigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { default: void 0 },
    title: { default: "" },
    icon: { default: "lucide:chevron-down" }
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "icon", "title");
    const styles = tv({
      base: "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&[data-state=open]>svg]:rotate-180"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(ssrRenderComponent(unref(AccordionTrigger), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { props }, () => {
              _push2(`${ssrInterpolate(__props.title)}`);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "icon", { props }, () => {
              if (__props.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  mode: "svg",
                  name: __props.icon,
                  class: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { props }, () => [
                createTextVNode(toDisplayString(__props.title), 1)
              ]),
              renderSlot(_ctx.$slots, "icon", { props }, () => [
                __props.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  mode: "svg",
                  name: __props.icon,
                  class: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/trigger.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$6, { __name: "UiAccordionTrigger" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "content",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    content: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "content");
    const styles = tv({
      base: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionContent), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pb-4 pt-0"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(__props.content)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pb-4 pt-0" }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(__props.content), 1)
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/content.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4$1 = Object.assign(_sfc_main$5, { __name: "UiAccordionContent" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "accordion",
  __ssrInlineRender: true,
  props: {
    collapsible: { type: Boolean, default: true },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: { default: "single" },
    modelValue: {},
    defaultValue: {},
    items: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(reactiveOmit(props, "items"), emits);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiAccordionItem = __nuxt_component_2;
      const _component_UiAccordionHeader = __nuxt_component_1$1;
      const _component_UiAccordionTrigger = __nuxt_component_3;
      const _component_UiAccordionContent = __nuxt_component_4$1;
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((rootSlotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", mergeProps(rootSlotProps, { items: __props.items }), () => {
              _push2(`<!--[-->`);
              ssrRenderList(__props.items, (item, i) => {
                _push2(ssrRenderComponent(_component_UiAccordionItem, {
                  disabled: item.disabled,
                  value: item.value
                }, {
                  default: withCtx((itemSlotProps, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "header", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => {
                        _push3(ssrRenderComponent(_component_UiAccordionHeader, null, {
                          default: withCtx((_, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, "trigger", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => {
                                _push4(ssrRenderComponent(_component_UiAccordionTrigger, {
                                  title: item.title,
                                  icon: item.icon
                                }, null, _parent4, _scopeId3));
                              }, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "trigger", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => [
                                  createVNode(_component_UiAccordionTrigger, {
                                    title: item.title,
                                    icon: item.icon
                                  }, null, 8, ["title", "icon"])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      }, _push3, _parent3, _scopeId2);
                      ssrRenderSlot(_ctx.$slots, "content", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => {
                        _push3(ssrRenderComponent(_component_UiAccordionContent, {
                          content: item.content
                        }, null, _parent3, _scopeId2));
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "header", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => [
                          createVNode(_component_UiAccordionHeader, null, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "trigger", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => [
                                createVNode(_component_UiAccordionTrigger, {
                                  title: item.title,
                                  icon: item.icon
                                }, null, 8, ["title", "icon"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        renderSlot(_ctx.$slots, "content", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => [
                          createVNode(_component_UiAccordionContent, {
                            content: item.content
                          }, null, 8, ["content"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", mergeProps(rootSlotProps, { items: __props.items }), () => [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, i) => {
                  return openBlock(), createBlock(_component_UiAccordionItem, {
                    key: i,
                    disabled: item.disabled,
                    value: item.value
                  }, {
                    default: withCtx((itemSlotProps) => [
                      renderSlot(_ctx.$slots, "header", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => [
                        createVNode(_component_UiAccordionHeader, null, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "trigger", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => [
                              createVNode(_component_UiAccordionTrigger, {
                                title: item.title,
                                icon: item.icon
                              }, null, 8, ["title", "icon"])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      renderSlot(_ctx.$slots, "content", mergeProps({ ref_for: true }, { ...itemSlotProps, ...rootSlotProps, items: __props.items, item }), () => [
                        createVNode(_component_UiAccordionContent, {
                          content: item.content
                        }, null, 8, ["content"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["disabled", "value"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/accordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$4, { __name: "UiAccordion" });
const JourneyGalleryDetailSchema = z.object({
  mode: z.enum(["create", "update"]),
  type: z.enum(["image", "video"]),
  title: z.string("Title is required.").min(1, "Title is required."),
  description: z.string("Description is required.").min(1, "Description is required."),
  thumbnailUrl: z.string().optional(),
  thumbnail: z.any().optional(),
  videoUrl: z.string().optional()
}).superRefine(async (data, ctx) => {
  if (data.type === "image" && !data?.thumbnailUrl?.length) {
    ctx.addIssue({
      code: "custom",
      path: ["thumbnail"],
      message: "Thumbnail is required for image type."
    });
  }
  if (data.type === "video" && !data?.videoUrl?.length) {
    ctx.addIssue({
      code: "custom",
      path: ["videoUrl"],
      message: "Video URL is required for video type."
    });
  }
  if (data.thumbnail) {
    const file = data.thumbnail;
    const isValidImage = await ImageUploadSchema.safeParseAsync(file);
    if (!isValidImage.success) {
      ctx.addIssue({
        code: "custom",
        path: ["thumbnail"],
        message: isValidImage.error?.message || "Invalid image file."
      });
    }
  }
});
const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./image-preview-DmuMZ1gV.mjs').then((c) => c.default || c));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "form",
  __ssrInlineRender: true,
  props: {
    mode: {},
    defaultValue: {},
    isHeader: { type: Boolean }
  },
  emits: ["onRefreshData", "onCloseModal"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const isSubmitting = ref(false);
    const route = useRoute();
    const { handleSubmit, setFieldValue, values } = useForm({
      validationSchema: toTypedSchema(JourneyGalleryDetailSchema),
      initialValues: {
        mode: props?.mode || "create",
        type: props?.defaultValue?.is_video === true ? "video" : "image",
        title: props?.defaultValue?.title || "",
        description: props?.defaultValue?.description || "",
        thumbnail: props?.defaultValue?.thumbnail || "",
        thumbnailUrl: props?.isHeader === true ? props?.defaultValue?.thumbnail || "" : props?.defaultValue?.thumbnail_url || "",
        videoUrl: props?.defaultValue?.video_url || ""
      }
    });
    const thumbnailUrl = computed(() => {
      try {
        if (props?.mode === "update") {
          if (props?.isHeader === true) {
            const url = props?.defaultValue?.thumbnail || values?.thumbnailUrl;
            if (!url) {
              return "";
            }
            if (url.startsWith("blob")) {
              return url;
            }
            return useRuntimeConfig().public.apiBase + url;
          } else {
            const url = values?.thumbnailUrl;
            if (!url) {
              return "";
            }
            if (url.startsWith("blob")) {
              return url;
            }
            return useRuntimeConfig().public.apiBase + url;
          }
        } else {
          const url = values?.thumbnailUrl;
          if (!url) {
            return "";
          }
          if (url.startsWith("blob")) {
            return url;
          }
          return useRuntimeConfig().public.apiBase + url;
        }
      } catch {
        return "";
      }
    });
    function updateJourneyDetail(id, payload) {
      journeyDetailFetcher().updateById(id, payload).then(() => {
        toast.success("Success to update journey detail");
        emits("onRefreshData");
        emits("onCloseModal");
      }).catch((err) => {
        toast.error(
          err?.response?._data?.message || "Fail to save data."
        );
      }).finally(() => {
        isSubmitting.value = false;
      });
    }
    function createJourneyDetail(payload) {
      journeyDetailFetcher().create(payload).then(() => {
        toast.success("Success to create journey detail");
        emits("onRefreshData");
        emits("onCloseModal");
      }).catch((err) => {
        toast.error(
          err?.response?._data?.message || "Fail to save data."
        );
      }).finally(() => {
        isSubmitting.value = false;
      });
    }
    handleSubmit((values2) => {
      const galleryId = route.params?.galleryId;
      if (!galleryId?.length) {
        return;
      }
      isSubmitting.value = true;
      const payload = {
        journey_id: galleryId,
        is_video: values2?.type === "video",
        title: values2?.title,
        description: values2?.description,
        content: values2?.description,
        thumbnail: values2?.thumbnail,
        video_url: values2?.videoUrl
      };
      props?.defaultValue?.id ? updateJourneyDetail(props?.defaultValue?.id, payload) : createJourneyDetail(payload);
    });
    function resetImage() {
      if (!setFieldValue) {
        return;
      }
      try {
        setFieldValue("thumbnail", void 0);
        if (props?.isHeader === true) {
          setFieldValue("thumbnailUrl", "");
        } else if (props?.isHeader === false || props?.isHeader === void 0) {
          setFieldValue("thumbnailUrl", "");
        }
      } catch (err) {
        console.warn("resetImage skipped:", err);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCardContent = __nuxt_component_0$1$1;
      const _component_Field = Field;
      const _component_UiFormItem = __nuxt_component_2$1;
      const _component_UiDropfile = __nuxt_component_3$1;
      const _component_LazyUiImagePreview = __nuxt_component_4_lazy;
      const _component_UiInput = __nuxt_component_5$1;
      const _component_UiTiptap = __nuxt_component_16;
      const _component_UiCardFooter = __nuxt_component_7;
      const _component_UiButton = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiCardContent, { class: "!p-0 border-b border-dashboard-neutral-100/50" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full mx-auto"${_scopeId}>`);
            if (__props.isHeader === false) {
              _push2(ssrRenderComponent(_component_Field, { name: "type" }, {
                default: withCtx(({ componentField }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiFormItem, {
                      label: "Type",
                      class: "mb-6"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex gap-4"${_scopeId3}><label class="flex items-center gap-2 cursor-pointer"${_scopeId3}><input${ssrRenderAttrs(mergeProps({ type: "radio" }, componentField, {
                            value: "image",
                            class: "w-4 h-4 text-primary-600",
                            checked: unref(values)?.type === "image"
                          }))}${_scopeId3}><span${_scopeId3}>Image</span></label><label class="flex items-center gap-2 cursor-pointer"${_scopeId3}><input${ssrRenderAttrs(mergeProps({ type: "radio" }, componentField, {
                            value: "video",
                            class: "w-4 h-4 text-primary-600",
                            checked: unref(values)?.type === "video"
                          }))}${_scopeId3}><span${_scopeId3}>Video</span></label></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [
                                createVNode("input", mergeProps({ type: "radio" }, componentField, {
                                  value: "image",
                                  class: "w-4 h-4 text-primary-600",
                                  checked: unref(values)?.type === "image"
                                }), null, 16, ["checked"]),
                                createVNode("span", null, "Image")
                              ]),
                              createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [
                                createVNode("input", mergeProps({ type: "radio" }, componentField, {
                                  value: "video",
                                  class: "w-4 h-4 text-primary-600",
                                  checked: unref(values)?.type === "video"
                                }), null, 16, ["checked"]),
                                createVNode("span", null, "Video")
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiFormItem, {
                        label: "Type",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [
                              createVNode("input", mergeProps({ type: "radio" }, componentField, {
                                value: "image",
                                class: "w-4 h-4 text-primary-600",
                                checked: unref(values)?.type === "image"
                              }), null, 16, ["checked"]),
                              createVNode("span", null, "Image")
                            ]),
                            createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [
                              createVNode("input", mergeProps({ type: "radio" }, componentField, {
                                value: "video",
                                class: "w-4 h-4 text-primary-600",
                                checked: unref(values)?.type === "video"
                              }), null, 16, ["checked"]),
                              createVNode("span", null, "Video")
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(values)?.type === "image" || __props.isHeader === true) {
              _push2(ssrRenderComponent(_component_Field, { name: "thumbnail" }, {
                default: withCtx(({ errors }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiFormItem, {
                      label: "Thumbnail",
                      class: "mb-6"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (!unref(values)?.thumbnailUrl?.length) {
                            _push4(ssrRenderComponent(_component_UiDropfile, {
                              "aria-invalid": !!errors?.length,
                              onDropped: (value) => {
                                const file = value?.[0];
                                unref(setFieldValue)("thumbnail", file);
                                unref(setFieldValue)("thumbnailUrl", unref(createObjectURL)(file));
                              }
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_LazyUiImagePreview, {
                              "image-url": unref(thumbnailUrl),
                              onOnDeleteImage: resetImage
                            }, null, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            !unref(values)?.thumbnailUrl?.length ? (openBlock(), createBlock(_component_UiDropfile, {
                              key: 0,
                              "aria-invalid": !!errors?.length,
                              onDropped: (value) => {
                                const file = value?.[0];
                                unref(setFieldValue)("thumbnail", file);
                                unref(setFieldValue)("thumbnailUrl", unref(createObjectURL)(file));
                              }
                            }, null, 8, ["aria-invalid", "onDropped"])) : (openBlock(), createBlock(_component_LazyUiImagePreview, {
                              key: 1,
                              "image-url": unref(thumbnailUrl),
                              onOnDeleteImage: resetImage
                            }, null, 8, ["image-url"]))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiFormItem, {
                        label: "Thumbnail",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          !unref(values)?.thumbnailUrl?.length ? (openBlock(), createBlock(_component_UiDropfile, {
                            key: 0,
                            "aria-invalid": !!errors?.length,
                            onDropped: (value) => {
                              const file = value?.[0];
                              unref(setFieldValue)("thumbnail", file);
                              unref(setFieldValue)("thumbnailUrl", unref(createObjectURL)(file));
                            }
                          }, null, 8, ["aria-invalid", "onDropped"])) : (openBlock(), createBlock(_component_LazyUiImagePreview, {
                            key: 1,
                            "image-url": unref(thumbnailUrl),
                            onOnDeleteImage: resetImage
                          }, null, 8, ["image-url"]))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(values)?.type === "video") {
              _push2(ssrRenderComponent(_component_Field, { name: "videoUrl" }, {
                default: withCtx(({ componentField }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiFormItem, {
                      label: "Video URL",
                      class: "mb-6"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiInput, mergeProps(componentField, { placeholder: "www.youtube.com/examples" }), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiInput, mergeProps(componentField, { placeholder: "www.youtube.com/examples" }), null, 16)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiFormItem, {
                        label: "Video URL",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiInput, mergeProps(componentField, { placeholder: "www.youtube.com/examples" }), null, 16)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Field, { name: "title" }, {
              default: withCtx(({ componentField }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormItem, {
                    label: "Title",
                    class: "mb-6"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps(componentField, { placeholder: "Enter title" }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps(componentField, { placeholder: "Enter title" }), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormItem, {
                      label: "Title",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps(componentField, { placeholder: "Enter title" }), null, 16)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Field, { name: "description" }, {
              default: withCtx(({ value, handleChange, errors, validate }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormItem, {
                    label: "Description",
                    class: "mb-6"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTiptap, {
                          value,
                          "aria-invalid": !!errors?.length ? true : void 0,
                          "onUpdate:value": (value2) => handleChange(value2),
                          onOnBlur: ($event) => validate()
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTiptap, {
                            value,
                            "aria-invalid": !!errors?.length ? true : void 0,
                            "onUpdate:value": (value2) => handleChange(value2),
                            onOnBlur: ($event) => validate()
                          }, null, 8, ["value", "aria-invalid", "onUpdate:value", "onOnBlur"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormItem, {
                      label: "Description",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTiptap, {
                          value,
                          "aria-invalid": !!errors?.length ? true : void 0,
                          "onUpdate:value": (value2) => handleChange(value2),
                          onOnBlur: ($event) => validate()
                        }, null, 8, ["value", "aria-invalid", "onUpdate:value", "onOnBlur"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full mx-auto" }, [
                __props.isHeader === false ? (openBlock(), createBlock(_component_Field, {
                  key: 0,
                  name: "type"
                }, {
                  default: withCtx(({ componentField }) => [
                    createVNode(_component_UiFormItem, {
                      label: "Type",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [
                            createVNode("input", mergeProps({ type: "radio" }, componentField, {
                              value: "image",
                              class: "w-4 h-4 text-primary-600",
                              checked: unref(values)?.type === "image"
                            }), null, 16, ["checked"]),
                            createVNode("span", null, "Image")
                          ]),
                          createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [
                            createVNode("input", mergeProps({ type: "radio" }, componentField, {
                              value: "video",
                              class: "w-4 h-4 text-primary-600",
                              checked: unref(values)?.type === "video"
                            }), null, 16, ["checked"]),
                            createVNode("span", null, "Video")
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(values)?.type === "image" || __props.isHeader === true ? (openBlock(), createBlock(_component_Field, {
                  key: 1,
                  name: "thumbnail"
                }, {
                  default: withCtx(({ errors }) => [
                    createVNode(_component_UiFormItem, {
                      label: "Thumbnail",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        !unref(values)?.thumbnailUrl?.length ? (openBlock(), createBlock(_component_UiDropfile, {
                          key: 0,
                          "aria-invalid": !!errors?.length,
                          onDropped: (value) => {
                            const file = value?.[0];
                            unref(setFieldValue)("thumbnail", file);
                            unref(setFieldValue)("thumbnailUrl", unref(createObjectURL)(file));
                          }
                        }, null, 8, ["aria-invalid", "onDropped"])) : (openBlock(), createBlock(_component_LazyUiImagePreview, {
                          key: 1,
                          "image-url": unref(thumbnailUrl),
                          onOnDeleteImage: resetImage
                        }, null, 8, ["image-url"]))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })) : unref(values)?.type === "video" ? (openBlock(), createBlock(_component_Field, {
                  key: 2,
                  name: "videoUrl"
                }, {
                  default: withCtx(({ componentField }) => [
                    createVNode(_component_UiFormItem, {
                      label: "Video URL",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps(componentField, { placeholder: "www.youtube.com/examples" }), null, 16)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_Field, { name: "title" }, {
                  default: withCtx(({ componentField }) => [
                    createVNode(_component_UiFormItem, {
                      label: "Title",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps(componentField, { placeholder: "Enter title" }), null, 16)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                }),
                createVNode(_component_Field, { name: "description" }, {
                  default: withCtx(({ value, handleChange, errors, validate }) => [
                    createVNode(_component_UiFormItem, {
                      label: "Description",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTiptap, {
                          value,
                          "aria-invalid": !!errors?.length ? true : void 0,
                          "onUpdate:value": (value2) => handleChange(value2),
                          onOnBlur: ($event) => validate()
                        }, null, 8, ["value", "aria-invalid", "onUpdate:value", "onOnBlur"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCardFooter, { class: "!py-4 flex justify-end gap-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              class: "text-lg h-auto !px-5 py-3",
              type: "button",
              variant: "outline",
              onClick: ($event) => _ctx.$emit("onCloseModal")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "heroicons:x-mark-20-solid" }, null, _parent3, _scopeId2));
                  _push3(` Cancel `);
                } else {
                  return [
                    createVNode(_component_Icon, { name: "heroicons:x-mark-20-solid" }),
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiButton, {
              type: "submit",
              class: "text-lg h-auto !px-5 py-3",
              disabled: unref(isSubmitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "heroicons:archive-box" }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(isSubmitting) ? "Saving..." : "Save")}`);
                } else {
                  return [
                    createVNode(_component_Icon, { name: "heroicons:archive-box" }),
                    createTextVNode(" " + toDisplayString(unref(isSubmitting) ? "Saving..." : "Save"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                class: "text-lg h-auto !px-5 py-3",
                type: "button",
                variant: "outline",
                onClick: ($event) => _ctx.$emit("onCloseModal")
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, { name: "heroicons:x-mark-20-solid" }),
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_UiButton, {
                type: "submit",
                class: "text-lg h-auto !px-5 py-3",
                disabled: unref(isSubmitting)
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, { name: "heroicons:archive-box" }),
                  createTextVNode(" " + toDisplayString(unref(isSubmitting) ? "Saving..." : "Save"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-gallery-detail/form.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$3, { __name: "ManageGalleryDetailForm" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "table",
  __ssrInlineRender: true,
  props: {
    isLoading: { type: Boolean },
    isError: { type: Boolean },
    items: {}
  },
  emits: ["onRefreshData"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { $confirmDelete } = useNuxtApp();
    const { handleShowModal } = useModalForm();
    async function handleDeleteDetailJourney(title, id) {
      if (!id?.length)
        return;
      const isDeleted = await $confirmDelete(title, async () => {
        return journeyDetailFetcher().deleteById(id);
      });
      if (isDeleted) {
        emits("onRefreshData");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCardHeader = __nuxt_component_1$1$1;
      const _component_UiCardContent = __nuxt_component_0$1$1;
      const _component_UiTable = __nuxt_component_2$2;
      const _component_UiTableRow = __nuxt_component_3$2;
      const _component_UiTableHead = __nuxt_component_4$2;
      const _component_UiTableData = __nuxt_component_5$2;
      const _component_Icon = __nuxt_component_0$2;
      const _component_ClientOnly = __nuxt_component_1$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UiCardHeader, { class: "flex md:!flex-row justify-between py-4 md:items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-semibold text-lg text-dashboard-accent-50"${_scopeId}> Gallery Detail Item </h3><div class="flex flex-col md:flex-row justify-end gap-4 items-center"${_scopeId}><button type="button" class="text-dashboard-primary-50 bg-dashboard-accent-50 inline-flex h-full py-2 px-6 rounded-lg w-full md:w-auto whitespace-nowrap justify-center"${_scopeId}> + Add </button></div>`);
          } else {
            return [
              createVNode("h3", { class: "font-semibold text-lg text-dashboard-accent-50" }, " Gallery Detail Item "),
              createVNode("div", { class: "flex flex-col md:flex-row justify-end gap-4 items-center" }, [
                createVNode("button", {
                  type: "button",
                  class: "text-dashboard-primary-50 bg-dashboard-accent-50 inline-flex h-full py-2 px-6 rounded-lg w-full md:w-auto whitespace-nowrap justify-center",
                  onClick: () => unref(handleShowModal)({ type: "ADD" })
                }, " + Add ", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCardContent, { class: "!px-0 !pb-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTable, {
              data: _ctx.$props.items ?? [],
              "is-error": _ctx.$props?.isError,
              "is-loading": _ctx.$props?.isLoading,
              "header-count": 4
            }, {
              head: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`No.`);
                            } else {
                              return [
                                createTextVNode("No.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Title`);
                            } else {
                              return [
                                createTextVNode("Title")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Description`);
                            } else {
                              return [
                                createTextVNode("Description")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("No.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("Title")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("Description")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("No.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("Title")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("Description")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.$props?.items, (item, index) => {
                    _push3(ssrRenderComponent(_component_UiTableRow, { class: "last:[&>td]:!border-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableData, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(index + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(index + 1), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableData, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item?.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item?.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableData, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="line-clamp-3"${_scopeId4}>${item?.description ?? ""}</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "line-clamp-3",
                                    innerHTML: item?.description
                                  }, null, 8, ["innerHTML"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableData, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex gap-2"${_scopeId4}><button type="button" class="table-action-button group"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:pencil",
                                  class: "opacity-70 group-hover:text-dashboard-info-50"
                                }, null, _parent5, _scopeId4));
                                _push5(`</button><button type="button" class="group table-action-button"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:trash-2",
                                  class: "opacity-70 group-hover:text-dashboard-danger-50",
                                  onClick: () => handleDeleteDetailJourney(item?.title, item?.id)
                                }, null, _parent5, _scopeId4));
                                _push5(`</button></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "table-action-button group",
                                      onClick: ($event) => unref(handleShowModal)({ type: "UPDATE", selectedItem: item })
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:pencil",
                                        class: "opacity-70 group-hover:text-dashboard-info-50"
                                      })
                                    ], 8, ["onClick"]),
                                    createVNode("button", {
                                      type: "button",
                                      class: "group table-action-button"
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:trash-2",
                                        class: "opacity-70 group-hover:text-dashboard-danger-50",
                                        onClick: () => handleDeleteDetailJourney(item?.title, item?.id)
                                      }, null, 8, ["onClick"])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableData, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(index + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableData, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item?.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableData, null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "line-clamp-3",
                                  innerHTML: item?.description
                                }, null, 8, ["innerHTML"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableData, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "table-action-button group",
                                    onClick: ($event) => unref(handleShowModal)({ type: "UPDATE", selectedItem: item })
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:pencil",
                                      class: "opacity-70 group-hover:text-dashboard-info-50"
                                    })
                                  ], 8, ["onClick"]),
                                  createVNode("button", {
                                    type: "button",
                                    class: "group table-action-button"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:trash-2",
                                      class: "opacity-70 group-hover:text-dashboard-danger-50",
                                      onClick: () => handleDeleteDetailJourney(item?.title, item?.id)
                                    }, null, 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$props?.items, (item, index) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: item?.id,
                        class: "last:[&>td]:!border-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(index + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item?.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableData, null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "line-clamp-3",
                                innerHTML: item?.description
                              }, null, 8, ["innerHTML"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableData, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "table-action-button group",
                                  onClick: ($event) => unref(handleShowModal)({ type: "UPDATE", selectedItem: item })
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:pencil",
                                    class: "opacity-70 group-hover:text-dashboard-info-50"
                                  })
                                ], 8, ["onClick"]),
                                createVNode("button", {
                                  type: "button",
                                  class: "group table-action-button"
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:trash-2",
                                    class: "opacity-70 group-hover:text-dashboard-danger-50",
                                    onClick: () => handleDeleteDetailJourney(item?.title, item?.id)
                                  }, null, 8, ["onClick"])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTable, {
                data: _ctx.$props.items ?? [],
                "is-error": _ctx.$props?.isError,
                "is-loading": _ctx.$props?.isLoading,
                "header-count": 4
              }, {
                head: withCtx(() => [
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("No.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("Title")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("Description")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead)
                    ]),
                    _: 1
                  })
                ]),
                body: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$props?.items, (item, index) => {
                    return openBlock(), createBlock(_component_UiTableRow, {
                      key: item?.id,
                      class: "last:[&>td]:!border-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(index + 1), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item?.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableData, null, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "line-clamp-3",
                              innerHTML: item?.description
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableData, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode("button", {
                                type: "button",
                                class: "table-action-button group",
                                onClick: ($event) => unref(handleShowModal)({ type: "UPDATE", selectedItem: item })
                              }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:pencil",
                                  class: "opacity-70 group-hover:text-dashboard-info-50"
                                })
                              ], 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "group table-action-button"
                              }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:trash-2",
                                  class: "opacity-70 group-hover:text-dashboard-danger-50",
                                  onClick: () => handleDeleteDetailJourney(item?.title, item?.id)
                                }, null, 8, ["onClick"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 8, ["data", "is-error", "is-loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-gallery-detail/table.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$2, { __name: "ManageGalleryDetailTable" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "content",
  __ssrInlineRender: true,
  props: {
    galleryId: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data: detailJourneyData, pending: detailJourneyPending, error: detailJourneyError } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "GET_DETAIL_JOURNEY_BY_ID",
      async () => {
        if (!props?.galleryId) {
          return;
        }
        return journeyFetcher().getById(props.galleryId);
      },
      { lazy: true, watch: [props] }
    )), __temp = await __temp, __restore(), __temp);
    const { data: journeyDetailData, pending: journeyDetailPending, error: journeyDetailError, refresh: journeyDetailRefresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "JOURNEY_DETAIL_BY_ID",
      async () => {
        if (!props?.galleryId) {
          return;
        }
        return journeyDetailFetcher().getByJourneyId({
          journeyId: props?.galleryId
        });
      },
      { lazy: true, watch: [props] }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCardContent = __nuxt_component_0$1$1;
      const _component_UiAccordion = __nuxt_component_1;
      const _component_UiAccordionItem = __nuxt_component_2;
      const _component_UiAccordionTrigger = __nuxt_component_3;
      const _component_UiAccordionContent = __nuxt_component_4$1;
      const _component_ManageGalleryDetailForm = __nuxt_component_5;
      const _component_ManageGalleryDetailTable = __nuxt_component_6;
      _push(ssrRenderComponent(_component_UiCardContent, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiAccordion, {
              type: "multiple",
              collapsible: "",
              class: "w-full",
              "default-value": ["detail-table", "detail-form"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiAccordionItem, { value: "detail-form" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiAccordionTrigger, { class: "w-full py-2 text-[15px] leading-6 hover:no-underline" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Detail Form `);
                            } else {
                              return [
                                createTextVNode(" Detail Form ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiAccordionContent, { class: "text-muted-foreground" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(detailJourneyPending)) {
                                _push5(`<p${_scopeId4}>Loading...</p>`);
                              } else if (!unref(detailJourneyPending) && !!unref(detailJourneyError) || !unref(detailJourneyData) && !unref(detailJourneyPending)) {
                                _push5(`<p${_scopeId4}>Data not data.</p>`);
                              } else {
                                _push5(ssrRenderComponent(_component_ManageGalleryDetailForm, {
                                  "default-value": unref(detailJourneyData),
                                  mode: "update",
                                  isHeader: true
                                }, null, _parent5, _scopeId4));
                              }
                            } else {
                              return [
                                unref(detailJourneyPending) ? (openBlock(), createBlock("p", { key: 0 }, "Loading...")) : !unref(detailJourneyPending) && !!unref(detailJourneyError) || !unref(detailJourneyData) && !unref(detailJourneyPending) ? (openBlock(), createBlock("p", { key: 1 }, "Data not data.")) : (openBlock(), createBlock(_component_ManageGalleryDetailForm, {
                                  key: 2,
                                  "default-value": unref(detailJourneyData),
                                  mode: "update",
                                  isHeader: true
                                }, null, 8, ["default-value"]))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiAccordionTrigger, { class: "w-full py-2 text-[15px] leading-6 hover:no-underline" }, {
                            default: withCtx(() => [
                              createTextVNode(" Detail Form ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiAccordionContent, { class: "text-muted-foreground" }, {
                            default: withCtx(() => [
                              unref(detailJourneyPending) ? (openBlock(), createBlock("p", { key: 0 }, "Loading...")) : !unref(detailJourneyPending) && !!unref(detailJourneyError) || !unref(detailJourneyData) && !unref(detailJourneyPending) ? (openBlock(), createBlock("p", { key: 1 }, "Data not data.")) : (openBlock(), createBlock(_component_ManageGalleryDetailForm, {
                                key: 2,
                                "default-value": unref(detailJourneyData),
                                mode: "update",
                                isHeader: true
                              }, null, 8, ["default-value"]))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiAccordionItem, { value: "detail-table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiAccordionTrigger, { class: "w-full py-2 text-[15px] leading-6 hover:no-underline" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Gallery Item `);
                            } else {
                              return [
                                createTextVNode(" Gallery Item ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiAccordionContent, { class: "text-muted-foreground" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ManageGalleryDetailTable, {
                                items: unref(journeyDetailData),
                                "is-error": !!unref(journeyDetailError),
                                "is-loading": unref(journeyDetailPending),
                                onOnRefreshData: unref(journeyDetailRefresh)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ManageGalleryDetailTable, {
                                  items: unref(journeyDetailData),
                                  "is-error": !!unref(journeyDetailError),
                                  "is-loading": unref(journeyDetailPending),
                                  onOnRefreshData: unref(journeyDetailRefresh)
                                }, null, 8, ["items", "is-error", "is-loading", "onOnRefreshData"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiAccordionTrigger, { class: "w-full py-2 text-[15px] leading-6 hover:no-underline" }, {
                            default: withCtx(() => [
                              createTextVNode(" Gallery Item ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiAccordionContent, { class: "text-muted-foreground" }, {
                            default: withCtx(() => [
                              createVNode(_component_ManageGalleryDetailTable, {
                                items: unref(journeyDetailData),
                                "is-error": !!unref(journeyDetailError),
                                "is-loading": unref(journeyDetailPending),
                                onOnRefreshData: unref(journeyDetailRefresh)
                              }, null, 8, ["items", "is-error", "is-loading", "onOnRefreshData"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiAccordionItem, { value: "detail-form" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiAccordionTrigger, { class: "w-full py-2 text-[15px] leading-6 hover:no-underline" }, {
                          default: withCtx(() => [
                            createTextVNode(" Detail Form ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiAccordionContent, { class: "text-muted-foreground" }, {
                          default: withCtx(() => [
                            unref(detailJourneyPending) ? (openBlock(), createBlock("p", { key: 0 }, "Loading...")) : !unref(detailJourneyPending) && !!unref(detailJourneyError) || !unref(detailJourneyData) && !unref(detailJourneyPending) ? (openBlock(), createBlock("p", { key: 1 }, "Data not data.")) : (openBlock(), createBlock(_component_ManageGalleryDetailForm, {
                              key: 2,
                              "default-value": unref(detailJourneyData),
                              mode: "update",
                              isHeader: true
                            }, null, 8, ["default-value"]))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiAccordionItem, { value: "detail-table" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiAccordionTrigger, { class: "w-full py-2 text-[15px] leading-6 hover:no-underline" }, {
                          default: withCtx(() => [
                            createTextVNode(" Gallery Item ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiAccordionContent, { class: "text-muted-foreground" }, {
                          default: withCtx(() => [
                            createVNode(_component_ManageGalleryDetailTable, {
                              items: unref(journeyDetailData),
                              "is-error": !!unref(journeyDetailError),
                              "is-loading": unref(journeyDetailPending),
                              onOnRefreshData: unref(journeyDetailRefresh)
                            }, null, 8, ["items", "is-error", "is-loading", "onOnRefreshData"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiAccordion, {
                type: "multiple",
                collapsible: "",
                class: "w-full",
                "default-value": ["detail-table", "detail-form"]
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiAccordionItem, { value: "detail-form" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiAccordionTrigger, { class: "w-full py-2 text-[15px] leading-6 hover:no-underline" }, {
                        default: withCtx(() => [
                          createTextVNode(" Detail Form ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiAccordionContent, { class: "text-muted-foreground" }, {
                        default: withCtx(() => [
                          unref(detailJourneyPending) ? (openBlock(), createBlock("p", { key: 0 }, "Loading...")) : !unref(detailJourneyPending) && !!unref(detailJourneyError) || !unref(detailJourneyData) && !unref(detailJourneyPending) ? (openBlock(), createBlock("p", { key: 1 }, "Data not data.")) : (openBlock(), createBlock(_component_ManageGalleryDetailForm, {
                            key: 2,
                            "default-value": unref(detailJourneyData),
                            mode: "update",
                            isHeader: true
                          }, null, 8, ["default-value"]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiAccordionItem, { value: "detail-table" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiAccordionTrigger, { class: "w-full py-2 text-[15px] leading-6 hover:no-underline" }, {
                        default: withCtx(() => [
                          createTextVNode(" Gallery Item ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiAccordionContent, { class: "text-muted-foreground" }, {
                        default: withCtx(() => [
                          createVNode(_component_ManageGalleryDetailTable, {
                            items: unref(journeyDetailData),
                            "is-error": !!unref(journeyDetailError),
                            "is-loading": unref(journeyDetailPending),
                            onOnRefreshData: unref(journeyDetailRefresh)
                          }, null, 8, ["items", "is-error", "is-loading", "onOnRefreshData"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-gallery-detail/content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "ManageGalleryDetailContent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.client",
  __ssrInlineRender: true,
  props: {
    galleryId: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0;
      const _component_UiCardHeader = __nuxt_component_1$1$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      const _component_ManageGalleryDetailContent = __nuxt_component_4;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "border border-dashboard-neutral-100/50 bg-dashboard-neutral-50" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "justify-start flex-row" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/dashboard/gallery",
                    class: "inline-flex items-center justify-center gap-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, { name: "heroicons:arrow-long-left-16-solid" }, null, _parent4, _scopeId3));
                        _push4(`<span class="inline-block"${_scopeId3}>Back</span>`);
                      } else {
                        return [
                          createVNode(_component_Icon, { name: "heroicons:arrow-long-left-16-solid" }),
                          createVNode("span", { class: "inline-block" }, "Back")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: "/dashboard/gallery",
                      class: "inline-flex items-center justify-center gap-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, { name: "heroicons:arrow-long-left-16-solid" }),
                        createVNode("span", { class: "inline-block" }, "Back")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ManageGalleryDetailContent, {
              "gallery-id": _ctx.$props?.galleryId ?? ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "justify-start flex-row" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/dashboard/gallery",
                    class: "inline-flex items-center justify-center gap-3"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, { name: "heroicons:arrow-long-left-16-solid" }),
                      createVNode("span", { class: "inline-block" }, "Back")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ManageGalleryDetailContent, {
                "gallery-id": _ctx.$props?.galleryId ?? ""
              }, null, 8, ["gallery-id"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/gallery/[galleryId]/index.client.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.client-Bl1hW0bB.mjs.map
