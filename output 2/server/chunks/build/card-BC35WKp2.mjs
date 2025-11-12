import { defineComponent, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { tv } from 'tailwind-variants';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "flex flex-col space-y-1.5 p-6 [&+*]:pt-0"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class }),
        as: __props.as,
        "as-child": __props.asChild
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$4, { __name: "UiCardHeader" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "title",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" },
    title: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "text-xl font-semibold leading-none tracking-tight"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class }),
        as: __props.as,
        "as-child": __props.asChild
      }, _attrs), {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/title.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "UiCardTitle" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "description",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    description: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "text-sm text-muted-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class }),
        as: __props.as,
        "as-child": __props.asChild
      }, _attrs), {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/description.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "UiCardDescription" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "content",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    content: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "p-6 [&+*]:pt-0"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(__props.content)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(__props.content), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$1, { __name: "UiCardContent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "card",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    title: { default: void 0 },
    description: { default: void 0 },
    content: { default: void 0 },
    class: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "rounded-lg shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.08)] bg-card text-card-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCardHeader = __nuxt_component_1$1;
      const _component_UiCardTitle = __nuxt_component_1;
      const _component_UiCardDescription = __nuxt_component_2;
      const _component_UiCardContent = __nuxt_component_0$1;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                _push2(ssrRenderComponent(_component_UiCardHeader, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                        if (__props.title || _ctx.$slots.title) {
                          _push3(ssrRenderComponent(_component_UiCardTitle, { title: __props.title }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                        if (__props.description || _ctx.$slots.description) {
                          _push3(ssrRenderComponent(_component_UiCardDescription, { description: __props.description }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          __props.title || _ctx.$slots.title ? (openBlock(), createBlock(_component_UiCardTitle, {
                            key: 0,
                            title: __props.title
                          }, null, 8, ["title"])) : createCommentVNode("", true)
                        ]),
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          __props.description || _ctx.$slots.description ? (openBlock(), createBlock(_component_UiCardDescription, {
                            key: 0,
                            description: __props.description
                          }, null, 8, ["description"])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              if (__props.content || _ctx.$slots.content) {
                ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                  _push2(ssrRenderComponent(_component_UiCardContent, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div${_scopeId2}>${__props.content ?? ""}</div>`);
                      } else {
                        return [
                          createVNode("div", { innerHTML: __props.content }, null, 8, ["innerHTML"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createVNode(_component_UiCardHeader, null, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        __props.title || _ctx.$slots.title ? (openBlock(), createBlock(_component_UiCardTitle, {
                          key: 0,
                          title: __props.title
                        }, null, 8, ["title"])) : createCommentVNode("", true)
                      ]),
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        __props.description || _ctx.$slots.description ? (openBlock(), createBlock(_component_UiCardDescription, {
                          key: 0,
                          description: __props.description
                        }, null, 8, ["description"])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 3
                  })
                ]),
                __props.content || _ctx.$slots.content ? renderSlot(_ctx.$slots, "content", { key: 0 }, () => [
                  createVNode(_component_UiCardContent, null, {
                    default: withCtx(() => [
                      createVNode("div", { innerHTML: __props.content }, null, 8, ["innerHTML"])
                    ]),
                    _: 1
                  })
                ]) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "UiCard" });

export { __nuxt_component_0 as _, __nuxt_component_1$1 as a, __nuxt_component_2 as b, __nuxt_component_0$1 as c };
//# sourceMappingURL=card-BC35WKp2.mjs.map
