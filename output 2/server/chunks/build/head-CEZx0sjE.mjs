import { defineComponent, withCtx, createTextVNode, createVNode, renderSlot, createBlock, openBlock, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-full w-full overflow-auto" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/container.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]), { __name: "UiTableContainer" });
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<tr${ssrRenderAttrs(mergeProps(_ctx.$attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</tr>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/row.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]), { __name: "UiTableRow" });
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<td${ssrRenderAttrs(mergeProps({ class: "px-6 py-2 text-left border-y border-dashboard-neutral-100/50 text-sm" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</td>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/data.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "UiTableData" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "table",
  __ssrInlineRender: true,
  props: {
    isLoading: { type: Boolean },
    isError: { type: Boolean },
    headerCount: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTableContainer = __nuxt_component_0;
      const _component_UiTableRow = __nuxt_component_3;
      const _component_UiTableData = __nuxt_component_5;
      _push(ssrRenderComponent(_component_UiTableContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table class="w-full" role="table"${_scopeId}><thead${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "head", {}, null, _push2, _parent2, _scopeId);
            _push2(`</thead><tbody${_scopeId}>`);
            if (__props.isLoading) {
              _push2(ssrRenderComponent(_component_UiTableRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableData, {
                      class: "!text-center",
                      colspan: _ctx.$props?.headerCount
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Getting data... `);
                        } else {
                          return [
                            createTextVNode(" Getting data... ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableData, {
                        class: "!text-center",
                        colspan: _ctx.$props?.headerCount
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Getting data... ")
                        ]),
                        _: 1
                      }, 8, ["colspan"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (!__props.isLoading && _ctx.$props?.isError) {
              _push2(ssrRenderComponent(_component_UiTableRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableData, {
                      class: "!text-center",
                      colspan: _ctx.$props?.headerCount
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Something went wrong. `);
                        } else {
                          return [
                            createTextVNode(" Something went wrong. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableData, {
                        class: "!text-center",
                        colspan: _ctx.$props?.headerCount
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Something went wrong. ")
                        ]),
                        _: 1
                      }, 8, ["colspan"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (!__props.isLoading && !_ctx.$props?.data?.length) {
              _push2(ssrRenderComponent(_component_UiTableRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableData, {
                      class: "!text-center",
                      colspan: _ctx.$props?.headerCount
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` No data found. `);
                        } else {
                          return [
                            createTextVNode(" No data found. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableData, {
                        class: "!text-center",
                        colspan: _ctx.$props?.headerCount
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" No data found. ")
                        ]),
                        _: 1
                      }, 8, ["colspan"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              ssrRenderSlot(_ctx.$slots, "body", {}, null, _push2, _parent2, _scopeId);
            }
            _push2(`</tbody>`);
            ssrRenderSlot(_ctx.$slots, "foot", {}, null, _push2, _parent2, _scopeId);
            _push2(`</table>`);
          } else {
            return [
              createVNode("table", {
                class: "w-full",
                role: "table"
              }, [
                createVNode("thead", null, [
                  renderSlot(_ctx.$slots, "head")
                ]),
                createVNode("tbody", null, [
                  __props.isLoading ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableData, {
                        class: "!text-center",
                        colspan: _ctx.$props?.headerCount
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Getting data... ")
                        ]),
                        _: 1
                      }, 8, ["colspan"])
                    ]),
                    _: 1
                  })) : !__props.isLoading && _ctx.$props?.isError ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableData, {
                        class: "!text-center",
                        colspan: _ctx.$props?.headerCount
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Something went wrong. ")
                        ]),
                        _: 1
                      }, 8, ["colspan"])
                    ]),
                    _: 1
                  })) : !__props.isLoading && !_ctx.$props?.data?.length ? (openBlock(), createBlock(_component_UiTableRow, { key: 2 }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableData, {
                        class: "!text-center",
                        colspan: _ctx.$props?.headerCount
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" No data found. ")
                        ]),
                        _: 1
                      }, 8, ["colspan"])
                    ]),
                    _: 1
                  })) : renderSlot(_ctx.$slots, "body", { key: 3 })
                ]),
                renderSlot(_ctx.$slots, "foot")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "UiTable" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<th${ssrRenderAttrs(mergeProps(_ctx.$attrs, { class: "px-6 py-2 text-left border-y text-dashboard-neutral-400 border-dashboard-neutral-100/50 bg-dashboard-neutral-100/10 font-medium text-sm whitespace-nowrap" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</th>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/head.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "UiTableHead" });

export { __nuxt_component_2 as _, __nuxt_component_3 as a, __nuxt_component_5 as b, __nuxt_component_4 as c };
//# sourceMappingURL=head-CEZx0sjE.mjs.map
