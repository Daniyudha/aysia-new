import { _ as __nuxt_component_0, a as __nuxt_component_1$1, c as __nuxt_component_0$1 } from './card-BC35WKp2.mjs';
import { _ as __nuxt_component_2$1, a as __nuxt_component_3, b as __nuxt_component_5, c as __nuxt_component_4 } from './head-CEZx0sjE.mjs';
import __nuxt_component_0$2 from './index-C2n46nfI.mjs';
import { f as formatDateApp } from './format-data-D2ElPwyM.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, withAsyncContext, unref, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as categoryFetcher } from './category-DozWu4oW.mjs';
import { b as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_1$2 } from './client-only-B_PoH0ma.mjs';
import { u as useModalForm } from './useModalForm-CBkmuIPn.mjs';
import { u as useQueryParams } from './useQueryParams-DKrG4n2c.mjs';
import { u as useAsyncData } from './asyncData-DuMyQiaR.mjs';
import 'reka-ui';
import 'tailwind-variants';
import './composables-D0i6IdhD.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'date-fns';
import './constant-D5BqL6of.mjs';
import 'vue-router';
import 'perfect-debounce';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "table",
  __ssrInlineRender: true,
  props: {
    items: {},
    isLoading: { type: Boolean },
    isError: { type: Boolean }
  },
  emits: ["onSelectToEdit", "onRefresh"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { $confirmDelete } = useNuxtApp();
    async function handleDelete(categoryName, id) {
      const isDeleted = await $confirmDelete(categoryName, async () => {
        return categoryFetcher().deleteById(id);
      });
      if (isDeleted) {
        emit("onRefresh");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTable = __nuxt_component_2$1;
      const _component_UiTableRow = __nuxt_component_3;
      const _component_UiTableHead = __nuxt_component_4;
      const _component_UiTableData = __nuxt_component_5;
      const _component_Icon = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_UiTable, mergeProps({
        data: __props.items,
        "header-count": 5,
        "is-error": _ctx.$props?.isError,
        "is-loading": _ctx.$props?.isLoading
      }, _attrs), {
        head: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTableRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`ID`);
                      } else {
                        return [
                          createTextVNode("ID")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Category Name`);
                      } else {
                        return [
                          createTextVNode("Category Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Created At`);
                      } else {
                        return [
                          createTextVNode("Created At")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Last Update`);
                      } else {
                        return [
                          createTextVNode("Last Update")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableHead, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("ID")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Category Name")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Created At")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Last Update")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableHead)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTableRow, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("ID")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Category Name")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Created At")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Last Update")
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
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(ssrRenderComponent(_component_UiTableRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(index + 1)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(index + 1), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item?.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item?.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(("formatDateApp" in _ctx ? _ctx.formatDateApp : unref(formatDateApp))(item?.created_at))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(("formatDateApp" in _ctx ? _ctx.formatDateApp : unref(formatDateApp))(item?.created_at)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(("formatDateApp" in _ctx ? _ctx.formatDateApp : unref(formatDateApp))(item?.updated_at))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(("formatDateApp" in _ctx ? _ctx.formatDateApp : unref(formatDateApp))(item?.updated_at)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTableData, { class: "space-x-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<button type="button" class="table-action-button group"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:pencil",
                            class: "opacity-70 group-hover:text-dashboard-info-50"
                          }, null, _parent4, _scopeId3));
                          _push4(`</button><button type="button" class="group table-action-button"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:trash-2",
                            class: "opacity-70 group-hover:text-dashboard-danger-50"
                          }, null, _parent4, _scopeId3));
                          _push4(`</button>`);
                        } else {
                          return [
                            createVNode("button", {
                              type: "button",
                              class: "table-action-button group",
                              onClick: ($event) => _ctx.$emit("onSelectToEdit", item)
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:pencil",
                                class: "opacity-70 group-hover:text-dashboard-info-50"
                              })
                            ], 8, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: "group table-action-button",
                              onClick: () => handleDelete(item?.name, item?.id)
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:trash-2",
                                class: "opacity-70 group-hover:text-dashboard-danger-50"
                              })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
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
                          createTextVNode(toDisplayString(item?.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiTableData, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(("formatDateApp" in _ctx ? _ctx.formatDateApp : unref(formatDateApp))(item?.created_at)), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiTableData, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(("formatDateApp" in _ctx ? _ctx.formatDateApp : unref(formatDateApp))(item?.updated_at)), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiTableData, { class: "space-x-2" }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            type: "button",
                            class: "table-action-button group",
                            onClick: ($event) => _ctx.$emit("onSelectToEdit", item)
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:pencil",
                              class: "opacity-70 group-hover:text-dashboard-info-50"
                            })
                          ], 8, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: "group table-action-button",
                            onClick: () => handleDelete(item?.name, item?.id)
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:trash-2",
                              class: "opacity-70 group-hover:text-dashboard-danger-50"
                            })
                          ], 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                return openBlock(), createBlock(_component_UiTableRow, {
                  key: item?.id
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
                        createTextVNode(toDisplayString(item?.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiTableData, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(("formatDateApp" in _ctx ? _ctx.formatDateApp : unref(formatDateApp))(item?.created_at)), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiTableData, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(("formatDateApp" in _ctx ? _ctx.formatDateApp : unref(formatDateApp))(item?.updated_at)), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiTableData, { class: "space-x-2" }, {
                      default: withCtx(() => [
                        createVNode("button", {
                          type: "button",
                          class: "table-action-button group",
                          onClick: ($event) => _ctx.$emit("onSelectToEdit", item)
                        }, [
                          createVNode(_component_Icon, {
                            name: "lucide:pencil",
                            class: "opacity-70 group-hover:text-dashboard-info-50"
                          })
                        ], 8, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: "group table-action-button",
                          onClick: () => handleDelete(item?.name, item?.id)
                        }, [
                          createVNode(_component_Icon, {
                            name: "lucide:trash-2",
                            class: "opacity-70 group-hover:text-dashboard-danger-50"
                          })
                        ], 8, ["onClick"])
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
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-category/table.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "ManageCategoryTable" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "content",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { handleShowModal } = useModalForm();
    const { currentQueryParams } = useQueryParams();
    const { data, pending, refresh, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "MANAGE_CATEGORY",
      async () => {
        const params = {};
        if (currentQueryParams?.value?.page && !Number.isNaN(Number(currentQueryParams.value.page))) {
          params.page = Number(currentQueryParams.value.page);
        }
        if (currentQueryParams?.value?.perPage && !Number.isNaN(Number(currentQueryParams.value.perPage))) {
          params.limit = Number(currentQueryParams.value.perPage);
        }
        return categoryFetcher().get(params);
      },
      { lazy: true, watch: [currentQueryParams] }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCardHeader = __nuxt_component_1$1;
      const _component_UiCardContent = __nuxt_component_0$1;
      const _component_ManageCategoryTable = __nuxt_component_2;
      const _component_ClientOnly = __nuxt_component_1$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UiCardHeader, { class: "flex md:!flex-row justify-between py-4 md:items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-semibold text-lg text-dashboard-accent-50"${_scopeId}> Manage Category </h3><div class="flex flex-col md:flex-row justify-end gap-4 items-center"${_scopeId}><button type="button" class="text-dashboard-primary-50 bg-dashboard-accent-50 inline-flex h-full py-2 px-6 rounded-lg w-full md:w-auto whitespace-nowrap justify-center"${_scopeId}> + Add </button></div>`);
          } else {
            return [
              createVNode("h3", { class: "font-semibold text-lg text-dashboard-accent-50" }, " Manage Category "),
              createVNode("div", { class: "flex flex-col md:flex-row justify-end gap-4 items-center" }, [
                createVNode("button", {
                  type: "button",
                  class: "text-dashboard-primary-50 bg-dashboard-accent-50 inline-flex h-full py-2 px-6 rounded-lg w-full md:w-auto whitespace-nowrap justify-center",
                  onClick: ($event) => unref(handleShowModal)({ type: "ADD" })
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
            _push2(ssrRenderComponent(_component_ManageCategoryTable, {
              items: unref(data)?.data ?? [],
              "is-loading": unref(pending),
              "is-error": !!unref(error),
              onOnSelectToEdit: (selectedItem2) => unref(handleShowModal)({
                type: "UPDATE",
                selectedItem: selectedItem2
              }),
              onOnRefresh: unref(refresh)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ManageCategoryTable, {
                items: unref(data)?.data ?? [],
                "is-loading": unref(pending),
                "is-error": !!unref(error),
                onOnSelectToEdit: (selectedItem2) => unref(handleShowModal)({
                  type: "UPDATE",
                  selectedItem: selectedItem2
                }),
                onOnRefresh: unref(refresh)
              }, null, 8, ["items", "is-loading", "is-error", "onOnSelectToEdit", "onOnRefresh"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-category/content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "ManageCategoryContent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.client",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0;
      const _component_ManageCategoryContent = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "border border-dashboard-neutral-100/50 bg-dashboard-neutral-50" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ManageCategoryContent, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ManageCategoryContent)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/categories/index.client.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.client-C0CEadtm.mjs.map
