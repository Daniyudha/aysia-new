import { e as useRoute, _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import { defineComponent, computed, unref, mergeProps, reactive, withCtx, createVNode, createTextVNode, toDisplayString, renderSlot, createBlock, openBlock, createCommentVNode, Fragment, Transition, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderSlot, ssrRenderSlotInner } from 'vue/server-renderer';
import __nuxt_component_0$3 from './index-C2n46nfI.mjs';
import { useForwardPropsEmits, DialogRoot, DialogContent, DialogClose, Primitive, DialogTitle, DialogDescription, DialogOverlay, DialogPortal } from 'reka-ui';
import { tv } from 'tailwind-variants';
import { r as reactiveOmit } from './index-BAtNd0PJ.mjs';
import { j as journeyFetcher } from './journey-9vIRkXmx.mjs';
import { j as journeyDetailFetcher } from './journey-detail-DrgFQ8dR.mjs';
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
import './constant-D5BqL6of.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "gallery-detail-hero",
  __ssrInlineRender: true,
  props: {
    image: {},
    category: {},
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-14" }, _attrs))}><div class="app-container"><div class="flex flex-col lg:flex-row md:justify-between gap-4"><div class="lg:w-5/12"><img${ssrRenderAttr("src", `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBase}${_ctx.$props.image}`)}${ssrRenderAttr("alt", _ctx.$props?.title)} class="w-full h-auto"></div><div class="lg:w-6/12 text-app-secondary"><p class="text-[2.25rem]">${ssrInterpolate(_ctx.$props?.category)}</p><h1 class="mb-8 font-medium text-[8rem] leading-[100%] tracking-[0]">${ssrInterpolate(_ctx.$props?.title)}</h1><div class="prose font-sans font-thin space-y-4">${_ctx.$props.description ?? ""}</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery/gallery-detail-hero.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$b, { __name: "GalleryDetailHero" });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "dialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const forwarded = useForwardPropsEmits(props, emit);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/dialog.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$a, { __name: "UiDialog" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "portal",
  __ssrInlineRender: true,
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), mergeProps(props, _attrs), {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/portal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$9, { __name: "UiDialogPortal" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "overlay",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class");
    const styles = tv({
      base: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogOverlay), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), null, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/overlay.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$8, { __name: "UiDialogOverlay" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class");
    const styles = tv({
      base: "flex flex-col space-y-1.5 text-center sm:text-left"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$7, { __name: "UiDialogHeader" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "title",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "title");
    const styles = tv({
      base: "text-xl font-semibold leading-none tracking-tight md:text-lg text-dashboard-accent-50 mb-2"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTitle), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(__props.title)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(__props.title), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/title.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$6, { __name: "UiDialogTitle" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "description",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    description: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "description");
    const styles = tv({
      base: "text-base text-muted-foreground md:text-sm"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogDescription), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(__props.description)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(__props.description), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/description.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$5, { __name: "UiDialogDescription" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "close",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogClose), mergeProps(props, _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/close.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$4, { __name: "UiDialogClose" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "content",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    icon: {},
    title: {},
    description: {},
    class: {},
    hideClose: { type: Boolean },
    to: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(
      reactiveOmit(
        props,
        "icon",
        "title",
        "description",
        "class",
        "hideClose",
        "to"
      ),
      emits
    );
    const styles = tv({
      base: "fixed left-[50%] top-[50%] z-50 grid max-h-[calc(100%-4rem)] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialogPortal = __nuxt_component_0;
      const _component_UiDialogOverlay = __nuxt_component_2;
      const _component_UiDialogHeader = __nuxt_component_5;
      const _component_UiDialogTitle = __nuxt_component_6;
      const _component_UiDialogDescription = __nuxt_component_7;
      const _component_UiDialogClose = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_UiDialogPortal, mergeProps({ to: __props.to }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            ssrRenderSlotInner(_ctx.$slots, "overlay", {}, () => {
              _push2(ssrRenderComponent(_component_UiDialogOverlay, null, null, _parent2, _scopeId));
            }, _push2, _parent2, null + _scopeId, true);
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({
              class: unref(styles)({ class: props.class })
            }, { ...unref(forwarded), ..._ctx.$attrs }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                      _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                              if (__props.title) {
                                _push4(ssrRenderComponent(_component_UiDialogTitle, { title: __props.title }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                              if (__props.description) {
                                _push4(ssrRenderComponent(_component_UiDialogDescription, { description: __props.description }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                __props.title ? (openBlock(), createBlock(_component_UiDialogTitle, {
                                  key: 0,
                                  title: __props.title
                                }, null, 8, ["title"])) : createCommentVNode("", true)
                              ]),
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                __props.description ? (openBlock(), createBlock(_component_UiDialogDescription, {
                                  key: 0,
                                  description: __props.description
                                }, null, 8, ["description"])) : createCommentVNode("", true)
                              ])
                            ];
                          }
                        }),
                        _: 3
                      }, _parent3, _scopeId2));
                    }, _push3, _parent3, _scopeId2);
                    ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                    ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push3, _parent3, _scopeId2);
                  }, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "close", {}, null, _push3, _parent3, _scopeId2);
                  if (!__props.hideClose) {
                    _push3(ssrRenderComponent(_component_UiDialogClose, { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:x",
                            class: "h-4 w-4",
                            mode: "svg"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "lucide:x",
                              class: "h-4 w-4",
                              mode: "svg"
                            }),
                            createVNode("span", { class: "sr-only" }, "Close")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      renderSlot(_ctx.$slots, "header", {}, () => [
                        createVNode(_component_UiDialogHeader, null, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              __props.title ? (openBlock(), createBlock(_component_UiDialogTitle, {
                                key: 0,
                                title: __props.title
                              }, null, 8, ["title"])) : createCommentVNode("", true)
                            ]),
                            renderSlot(_ctx.$slots, "description", {}, () => [
                              __props.description ? (openBlock(), createBlock(_component_UiDialogDescription, {
                                key: 0,
                                description: __props.description
                              }, null, 8, ["description"])) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 3
                        })
                      ]),
                      renderSlot(_ctx.$slots, "content"),
                      renderSlot(_ctx.$slots, "footer")
                    ]),
                    renderSlot(_ctx.$slots, "close"),
                    !__props.hideClose ? (openBlock(), createBlock(_component_UiDialogClose, {
                      key: 0,
                      class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:x",
                          class: "h-4 w-4",
                          mode: "svg"
                        }),
                        createVNode("span", { class: "sr-only" }, "Close")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Transition, {
                "enter-active-class": "transition-opacity duration-300 ease-out",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "transition-opacity duration-200 ease-in",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "overlay", {}, () => [
                    createVNode(_component_UiDialogOverlay)
                  ])
                ]),
                _: 3
              }),
              createVNode(unref(DialogContent), mergeProps({
                class: unref(styles)({ class: props.class })
              }, { ...unref(forwarded), ..._ctx.$attrs }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    renderSlot(_ctx.$slots, "header", {}, () => [
                      createVNode(_component_UiDialogHeader, null, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            __props.title ? (openBlock(), createBlock(_component_UiDialogTitle, {
                              key: 0,
                              title: __props.title
                            }, null, 8, ["title"])) : createCommentVNode("", true)
                          ]),
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            __props.description ? (openBlock(), createBlock(_component_UiDialogDescription, {
                              key: 0,
                              description: __props.description
                            }, null, 8, ["description"])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 3
                      })
                    ]),
                    renderSlot(_ctx.$slots, "content"),
                    renderSlot(_ctx.$slots, "footer")
                  ]),
                  renderSlot(_ctx.$slots, "close"),
                  !__props.hideClose ? (openBlock(), createBlock(_component_UiDialogClose, {
                    key: 0,
                    class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "h-4 w-4",
                        mode: "svg"
                      }),
                      createVNode("span", { class: "sr-only" }, "Close")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/content.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$3, { __name: "UiDialogContent" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "detail-dialog",
  __ssrInlineRender: true,
  props: {
    image: {},
    title: {},
    content: {},
    isVideo: { type: Boolean },
    videoUrl: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = computed({
      get: () => props.modelValue ?? false,
      set: (value) => emit("update:modelValue", value)
    });
    function isYouTubeUrl(url) {
      return /youtu\.be|youtube\.com/.test(url);
    }
    function getYouTubeId(url) {
      if (!url) return "";
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/) || url.match(/shorts\/([\w-]{11})/);
      return match ? match[1] ?? "" : "";
    }
    function getYouTubeType(url) {
      if (!url) return "video";
      return url.includes("/shorts/") ? "short" : "video";
    }
    function getAspectRatioStyle(url) {
      if (!isYouTubeUrl(url)) return "aspect-ratio: 16/9;";
      const type = getYouTubeType(url);
      return type === "short" ? "aspect-ratio: 9/16; max-width: 400px;" : "aspect-ratio: 16/9;";
    }
    function getEmbedUrl(url) {
      if (!isYouTubeUrl(url)) return "";
      const videoId = getYouTubeId(url);
      if (!videoId) return "";
      const base = `https://www.youtube.com/embed/${videoId}`;
      const params = [
        "autoplay=1",
        "mute=1",
        "playsinline=1",
        "rel=0",
        "showinfo=0",
        "enablejsapi=1",
        "loop=1",
        "fs=1"
      ];
      if (getYouTubeType(url) === "short") {
        params.push("controls=0", `playlist=${videoId}`);
      }
      return `${base}?${params.join("&")}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = __nuxt_component_0$1;
      const _component_UiDialogContent = __nuxt_component_1$1;
      const _component_UiDialogOverlay = __nuxt_component_2;
      const _component_UiDialogClose = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0$3;
      const _component_UiDialogHeader = __nuxt_component_5;
      const _component_UiDialogTitle = __nuxt_component_6;
      const _component_UiDialogDescription = __nuxt_component_7;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "flex flex-col max-w-[90vw] md:max-w-[70vw] [&>button:last-child]:hidden text-app-secondary !rounded-none !border-none !gap-0 !p-0 max-h-[90vh] overflow-auto" }, {
              overlay: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogOverlay, { class: "bg-black/80" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogOverlay, { class: "bg-black/80" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col md:flex-row w-full gap-4 bg-app-primary" data-v-05eb0eb4${_scopeId2}><div class="md:w-1/2 flex items-center justify-center bg-gray-900" data-v-05eb0eb4${_scopeId2}>`);
                  if (!!_ctx.$props.isVideo && !!_ctx.$props.videoUrl) {
                    _push3(`<div class="w-full flex items-center justify-center" style="${ssrRenderStyle(isYouTubeUrl(_ctx.$props.videoUrl) ? getAspectRatioStyle(_ctx.$props.videoUrl) : "aspect-ratio: 16/9;")}" data-v-05eb0eb4${_scopeId2}>`);
                    if (isYouTubeUrl(_ctx.$props.videoUrl)) {
                      _push3(`<iframe${ssrRenderAttr("src", getEmbedUrl(_ctx.$props.videoUrl))} frameborder="0" class="w-full h-full rounded-lg" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-v-05eb0eb4${_scopeId2}></iframe>`);
                    } else if (/\.(mp4|webm|ogg)$/i.test(_ctx.$props.videoUrl)) {
                      _push3(`<video${ssrRenderAttr("src", _ctx.$props.videoUrl)} autoplay muted loop playsinline preload="metadata" class="w-full h-[70vh] object-cover rounded-lg shadow object-top" data-v-05eb0eb4${_scopeId2}> Your browser does not support the video tag. </video>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!--[-->`);
                    if (!!_ctx.$props.image?.length) {
                      _push3(`<img${ssrRenderAttr("src", `${unref(useRuntimeConfig)().public.apiBase}${_ctx.$props.image}`)}${ssrRenderAttr("alt", `${_ctx.$props.title} - Gallery Image`)} class="w-full h-[70vh] object-cover object-top rounded-lg" data-v-05eb0eb4${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  }
                  _push3(`</div><div class="md:w-1/2 flex flex-col justify-center p-6 pr-10 py-10 md:overflow-y-auto relative bg-app-primary" data-v-05eb0eb4${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiDialogClose, { class: "absolute top-4 right-4 text-app-secondary outline-none" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "heroicons:x-mark-16-solid",
                          class: "!w-8 !h-8 inline-block"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "heroicons:x-mark-16-solid",
                            class: "!w-8 !h-8 inline-block"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogHeader, { class: "contents space-y-0 text-left" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, { class: "font-medium mb-2 !text-[4rem] leading-[100%] tracking-[0%]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$props.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$props.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, { class: "hidden" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$props.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$props.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, { class: "font-medium mb-2 !text-[4rem] leading-[100%] tracking-[0%]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$props.title), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, { class: "hidden" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$props.title), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-6" data-v-05eb0eb4${_scopeId2}>${_ctx.$props?.content ?? ""}</div></div></div>`);
                  ssrRenderSlot(_ctx.$slots, "control", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col md:flex-row w-full gap-4 bg-app-primary" }, [
                      createVNode("div", { class: "md:w-1/2 flex items-center justify-center bg-gray-900" }, [
                        !!_ctx.$props.isVideo && !!_ctx.$props.videoUrl ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full flex items-center justify-center",
                          style: isYouTubeUrl(_ctx.$props.videoUrl) ? getAspectRatioStyle(_ctx.$props.videoUrl) : "aspect-ratio: 16/9;"
                        }, [
                          isYouTubeUrl(_ctx.$props.videoUrl) ? (openBlock(), createBlock("iframe", {
                            key: 0,
                            src: getEmbedUrl(_ctx.$props.videoUrl),
                            frameborder: "0",
                            class: "w-full h-full rounded-lg",
                            allow: "autoplay; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: ""
                          }, null, 8, ["src"])) : /\.(mp4|webm|ogg)$/i.test(_ctx.$props.videoUrl) ? (openBlock(), createBlock("video", {
                            key: 1,
                            src: _ctx.$props.videoUrl,
                            autoplay: "",
                            muted: "",
                            loop: "",
                            playsinline: "",
                            preload: "metadata",
                            class: "w-full h-[70vh] object-cover rounded-lg shadow object-top"
                          }, " Your browser does not support the video tag. ", 8, ["src"])) : createCommentVNode("", true)
                        ], 4)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          !!_ctx.$props.image?.length ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: `${unref(useRuntimeConfig)().public.apiBase}${_ctx.$props.image}`,
                            alt: `${_ctx.$props.title} - Gallery Image`,
                            class: "w-full h-[70vh] object-cover object-top rounded-lg"
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                        ], 64))
                      ]),
                      createVNode("div", { class: "md:w-1/2 flex flex-col justify-center p-6 pr-10 py-10 md:overflow-y-auto relative bg-app-primary" }, [
                        createVNode(_component_UiDialogClose, { class: "absolute top-4 right-4 text-app-secondary outline-none" }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "heroicons:x-mark-16-solid",
                              class: "!w-8 !h-8 inline-block"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogHeader, { class: "contents space-y-0 text-left" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiDialogTitle, { class: "font-medium mb-2 !text-[4rem] leading-[100%] tracking-[0%]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$props.title), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDialogDescription, { class: "hidden" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$props.title), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", {
                          class: "space-y-6",
                          innerHTML: _ctx.$props?.content
                        }, null, 8, ["innerHTML"])
                      ])
                    ]),
                    renderSlot(_ctx.$slots, "control", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "flex flex-col max-w-[90vw] md:max-w-[70vw] [&>button:last-child]:hidden text-app-secondary !rounded-none !border-none !gap-0 !p-0 max-h-[90vh] overflow-auto" }, {
                overlay: withCtx(() => [
                  createVNode(_component_UiDialogOverlay, { class: "bg-black/80" })
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col md:flex-row w-full gap-4 bg-app-primary" }, [
                    createVNode("div", { class: "md:w-1/2 flex items-center justify-center bg-gray-900" }, [
                      !!_ctx.$props.isVideo && !!_ctx.$props.videoUrl ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "w-full flex items-center justify-center",
                        style: isYouTubeUrl(_ctx.$props.videoUrl) ? getAspectRatioStyle(_ctx.$props.videoUrl) : "aspect-ratio: 16/9;"
                      }, [
                        isYouTubeUrl(_ctx.$props.videoUrl) ? (openBlock(), createBlock("iframe", {
                          key: 0,
                          src: getEmbedUrl(_ctx.$props.videoUrl),
                          frameborder: "0",
                          class: "w-full h-full rounded-lg",
                          allow: "autoplay; encrypted-media; gyroscope; picture-in-picture",
                          allowfullscreen: ""
                        }, null, 8, ["src"])) : /\.(mp4|webm|ogg)$/i.test(_ctx.$props.videoUrl) ? (openBlock(), createBlock("video", {
                          key: 1,
                          src: _ctx.$props.videoUrl,
                          autoplay: "",
                          muted: "",
                          loop: "",
                          playsinline: "",
                          preload: "metadata",
                          class: "w-full h-[70vh] object-cover rounded-lg shadow object-top"
                        }, " Your browser does not support the video tag. ", 8, ["src"])) : createCommentVNode("", true)
                      ], 4)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        !!_ctx.$props.image?.length ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: `${unref(useRuntimeConfig)().public.apiBase}${_ctx.$props.image}`,
                          alt: `${_ctx.$props.title} - Gallery Image`,
                          class: "w-full h-[70vh] object-cover object-top rounded-lg"
                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                      ], 64))
                    ]),
                    createVNode("div", { class: "md:w-1/2 flex flex-col justify-center p-6 pr-10 py-10 md:overflow-y-auto relative bg-app-primary" }, [
                      createVNode(_component_UiDialogClose, { class: "absolute top-4 right-4 text-app-secondary outline-none" }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "heroicons:x-mark-16-solid",
                            class: "!w-8 !h-8 inline-block"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogHeader, { class: "contents space-y-0 text-left" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiDialogTitle, { class: "font-medium mb-2 !text-[4rem] leading-[100%] tracking-[0%]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$props.title), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, { class: "hidden" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$props.title), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", {
                        class: "space-y-6",
                        innerHTML: _ctx.$props?.content
                      }, null, 8, ["innerHTML"])
                    ])
                  ]),
                  renderSlot(_ctx.$slots, "control", {}, void 0, true)
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery/detail-dialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-05eb0eb4"]]), { __name: "GalleryDetailDialog" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "detail-image-grid",
  __ssrInlineRender: true,
  props: {
    journeyDetailItems: {},
    pending: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const showDialogState = reactive({
      openDialog: false,
      selectedJourneyIndex: -1
    });
    function closeDialog() {
      showDialogState.openDialog = false;
      showDialogState.selectedJourneyIndex = -1;
    }
    function handleChangeImage(index) {
      if (index < 0 || index >= props.journeyDetailItems.length) return;
      showDialogState.selectedJourneyIndex = index;
    }
    const selectedJourney = computed(() => {
      if (showDialogState.selectedJourneyIndex === void 0 || showDialogState.selectedJourneyIndex < 0) return null;
      return props.journeyDetailItems[showDialogState.selectedJourneyIndex] ?? null;
    });
    const apiBase = useRuntimeConfig().public?.apiBase ?? "";
    function isYouTubeUrl(url) {
      return !!url && /youtu\.be|youtube\.com/.test(url);
    }
    function getYouTubeId(url) {
      if (!url) return null;
      const patterns = [
        /(?:youtube\.com\/shorts\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
        /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
        /v=([a-zA-Z0-9_-]{11})/,
        /youtu\.be\/([a-zA-Z0-9_-]{11})/
      ];
      for (const p of patterns) {
        const m = url.match(p);
        if (m && m[1]) return m[1];
      }
      const fallback = url.match(/([a-zA-Z0-9_-]{11})/);
      return fallback ? fallback[1] : null;
    }
    function getYouTubeType(url) {
      if (!url) return "video";
      return url.includes("/shorts/") ? "short" : "video";
    }
    function getEmbedUrl(url, autoplay = 1, mute = 1) {
      const id = getYouTubeId(url);
      if (!id) return "";
      const params = [
        `autoplay=${autoplay ? 1 : 0}`,
        `mute=${mute ? 1 : 0}`,
        "playsinline=1",
        "loop=1",
        `playlist=${id}`,
        "controls=1",
        "rel=0",
        "modestbranding=1"
      ];
      return `https://www.youtube.com/embed/${id}?${params.join("&")}`;
    }
    computed(() => {
      if (!selectedJourney.value) return "";
      return getEmbedUrl(selectedJourney.value.video_url ?? null, 1, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$3;
      const _component_GalleryDetailDialog = __nuxt_component_1;
      _push(`<!--[--><section class="pt-6 pb-9" data-v-70b4295e><div class="app-container" data-v-70b4295e>`);
      if (props?.pending) {
        _push(`<div class="flex justify-center my-10 animate-spin" data-v-70b4295e>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "gg:spinner",
          style: { "width": "4rem", "height": "4rem" }
        }, null, _parent));
        _push(`</div>`);
      } else if (!props?.pending && !!props?.journeyDetailItems?.length) {
        _push(`<div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" data-v-70b4295e><!--[-->`);
        ssrRenderList(props.journeyDetailItems, (item, index) => {
          _push(`<div class="break-inside-avoid" data-v-70b4295e>`);
          if (item.is_video) {
            _push(`<div class="relative block w-full rounded-lg overflow-hidden" data-v-70b4295e><div style="${ssrRenderStyle({ aspectRatio: isYouTubeUrl(item.video_url) ? getYouTubeType(item.video_url) === "short" ? "9/16" : "16/9" : "16/9" })}" class="w-full bg-black relative rounded-lg overflow-hidden" data-v-70b4295e>`);
            if (isYouTubeUrl(item.video_url)) {
              _push(`<iframe${ssrRenderAttr("src", getEmbedUrl(item.video_url, 1, 1))} frameborder="0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen class="absolute inset-0 w-full h-full pointer-events-none" data-v-70b4295e></iframe>`);
            } else if (item.video_url) {
              _push(`<video${ssrRenderAttr("src", item.video_url)} autoplay muted loop playsinline preload="metadata" class="absolute inset-0 w-full h-full object-cover pointer-events-none" data-v-70b4295e></video>`);
            } else {
              _push(`<!---->`);
            }
            if (!isYouTubeUrl(item.video_url) && item.thumbnail_url) {
              _push(`<img${ssrRenderAttr("src", `${unref(apiBase)}${item.thumbnail_url}`)} alt="" class="absolute inset-0 w-full h-full object-cover pointer-events-none" data-v-70b4295e>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<button type="button" class="absolute inset-0 z-20 flex items-center justify-center bg-transparent" aria-label="Open gallery item" data-v-70b4295e></button></div></div>`);
          } else {
            _push(`<div class="relative" data-v-70b4295e><img${ssrRenderAttr("src", `${unref(apiBase)}${item.thumbnail_url}`)} alt="" class="w-full h-[30vh] object-cover rounded-lg shadow cursor-pointer" data-v-70b4295e><button type="button" class="absolute inset-0 z-10" aria-label="Open image" data-v-70b4295e></button></div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="text-center text-xl" data-v-70b4295e>Collection not found.</p>`);
      }
      _push(`</div></section>`);
      if (showDialogState.selectedJourneyIndex > -1 && props?.journeyDetailItems?.length) {
        _push(ssrRenderComponent(_component_GalleryDetailDialog, {
          image: selectedJourney.value?.thumbnail_url ?? "",
          title: selectedJourney.value?.title ?? "",
          content: selectedJourney.value?.description ?? "",
          "is-video": selectedJourney.value?.is_video ?? false,
          "video-url": selectedJourney.value && isYouTubeUrl(selectedJourney.value.video_url) ? getEmbedUrl(selectedJourney.value.video_url, 1, 0) : selectedJourney.value?.video_url ?? "",
          "model-value": showDialogState.openDialog && showDialogState.selectedJourneyIndex > -1,
          "onUpdate:modelValue": (isOpen) => {
            if (!isOpen) closeDialog();
          }
        }, {
          control: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-between gap-4 items-center bg-black text-app-primary pb-4 pt-6" data-v-70b4295e${_scopeId}><button type="button" class="control-button"${ssrIncludeBooleanAttr(showDialogState.selectedJourneyIndex === 0) ? " disabled" : ""} data-v-70b4295e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "heroicons:arrow-long-left" }, null, _parent2, _scopeId));
              _push2(`<span class="inline-block" data-v-70b4295e${_scopeId}>Previous</span></button><button type="button" class="control-button"${ssrIncludeBooleanAttr(showDialogState.selectedJourneyIndex === props.journeyDetailItems.length - 1) ? " disabled" : ""} data-v-70b4295e${_scopeId}><span class="inline-block" data-v-70b4295e${_scopeId}>Next</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:arrow-long-left",
                class: "rotate-180"
              }, null, _parent2, _scopeId));
              _push2(`</button></div>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-between gap-4 items-center bg-black text-app-primary pb-4 pt-6" }, [
                  createVNode("button", {
                    type: "button",
                    class: "control-button",
                    disabled: showDialogState.selectedJourneyIndex === 0,
                    onClick: ($event) => handleChangeImage(showDialogState.selectedJourneyIndex - 1)
                  }, [
                    createVNode(_component_Icon, { name: "heroicons:arrow-long-left" }),
                    createVNode("span", { class: "inline-block" }, "Previous")
                  ], 8, ["disabled", "onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: "control-button",
                    disabled: showDialogState.selectedJourneyIndex === props.journeyDetailItems.length - 1,
                    onClick: ($event) => handleChangeImage(showDialogState.selectedJourneyIndex + 1)
                  }, [
                    createVNode("span", { class: "inline-block" }, "Next"),
                    createVNode(_component_Icon, {
                      name: "heroicons:arrow-long-left",
                      class: "rotate-180"
                    })
                  ], 8, ["disabled", "onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery/detail-image-grid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DetailImageGrid = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-70b4295e"]]), { __name: "GalleryDetailImageGrid" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[galleryId]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Aysia LinggarWati - Explore Cuba",
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
    const route = useRoute();
    const galleryId = computed(() => route.params.galleryId);
    const { data, pending } = useAsyncData("journey detail", async () => {
      if (!galleryId.value)
        return;
      return Promise.all([journeyFetcher().getById(galleryId?.value?.toString()), journeyDetailFetcher().getByJourneyId({ journeyId: galleryId.value?.toString() })]);
    }, {
      watch: [galleryId],
      lazy: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GalleryDetailHero = __nuxt_component_0$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_GalleryDetailHero, {
        image: unref(data) ? unref(data)[0]?.thumbnail : "",
        category: unref(data) ? unref(data)[0]?.gallery_category_name : "",
        title: unref(data) ? unref(data)[0]?.title : "",
        description: unref(data) ? unref(data)[0]?.description : ""
      }, null, _parent));
      _push(ssrRenderComponent(DetailImageGrid, {
        "journey-detail-items": unref(data) ? unref(data)[1] : [],
        pending: unref(pending)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galleries/[galleryId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_galleryId_-Bls_zHxJ.mjs.map
