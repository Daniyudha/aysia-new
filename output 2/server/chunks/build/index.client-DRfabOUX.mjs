import { _ as __nuxt_component_0$5, a as __nuxt_component_1$1$1, c as __nuxt_component_0$1$1 } from './card-BC35WKp2.mjs';
import { _ as __nuxt_component_0$6 } from './nuxt-link-Bh--EX_l.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3$1, b as __nuxt_component_5$1, c as __nuxt_component_4$1 } from './head-CEZx0sjE.mjs';
import __nuxt_component_0$7 from './index-C2n46nfI.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, ref, computed, isRef, renderSlot, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { j as journeyFetcher } from './journey-9vIRkXmx.mjs';
import { b as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_7$1 } from './footer-DXV0za36.mjs';
import { useForwardPropsEmits, PopoverRoot, PopoverTrigger, PopoverContent, ComboboxRoot, ComboboxContent, ComboboxGroup, ComboboxItem, useForwardProps, PopoverPortal, ComboboxLabel, Primitive } from 'reka-ui';
import { _ as __nuxt_component_0$8 } from './button-BrROYuAJ.mjs';
import { tv } from 'tailwind-variants';
import { r as reactiveOmit } from './index-BAtNd0PJ.mjs';
import { u as useQueryParams } from './useQueryParams-DKrG4n2c.mjs';
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
import './constant-D5BqL6of.mjs';
import 'vue-router';
import 'perfect-debounce';

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "table",
  __ssrInlineRender: true,
  props: {
    items: {},
    isLoading: { type: Boolean },
    isError: { type: Boolean }
  },
  emits: ["onRefresh"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { $confirmDelete } = useNuxtApp();
    async function handleDeleteGallery(title, id) {
      if (!id?.length)
        return;
      const isDeleted = await $confirmDelete(title, async () => {
        return journeyFetcher().deleteById(id);
      });
      if (isDeleted) {
        emits("onRefresh");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCardHeader = __nuxt_component_1$1$1;
      const _component_NuxtLink = __nuxt_component_0$6;
      const _component_UiCardContent = __nuxt_component_0$1$1;
      const _component_UiTable = __nuxt_component_2;
      const _component_UiTableRow = __nuxt_component_3$1;
      const _component_UiTableHead = __nuxt_component_4$1;
      const _component_UiTableData = __nuxt_component_5$1;
      const _component_Icon = __nuxt_component_0$7;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UiCardHeader, { class: "flex md:!flex-row justify-between py-4 md:items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-semibold text-lg text-dashboard-accent-50"${_scopeId}> Manage Gallery </h3><div class="flex flex-col md:flex-row justify-end gap-4 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "text-dashboard-primary-50 bg-dashboard-accent-50 inline-flex h-full py-2 px-6 rounded-lg w-full md:w-auto whitespace-nowrap justify-center",
              to: "/dashboard/gallery/add"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` + Add `);
                } else {
                  return [
                    createTextVNode(" + Add ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h3", { class: "font-semibold text-lg text-dashboard-accent-50" }, " Manage Gallery "),
              createVNode("div", { class: "flex flex-col md:flex-row justify-end gap-4 items-center" }, [
                createVNode(_component_NuxtLink, {
                  class: "text-dashboard-primary-50 bg-dashboard-accent-50 inline-flex h-full py-2 px-6 rounded-lg w-full md:w-auto whitespace-nowrap justify-center",
                  to: "/dashboard/gallery/add"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" + Add ")
                  ]),
                  _: 1
                })
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
              data: _ctx.$props?.items ?? [],
              "is-loading": __props.isLoading,
              "is-error": __props.isError,
              "header-count": 5
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
                              _push5(`Category`);
                            } else {
                              return [
                                createTextVNode("Category")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Content`);
                            } else {
                              return [
                                createTextVNode("Content")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTableHead, { width: "75" }, null, _parent4, _scopeId3));
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
                              createTextVNode("Category")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("Content")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { width: "75" })
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
                            createTextVNode("Category")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("Content")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { width: "75" })
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
                                _push5(`${ssrInterpolate(item?.gallery_category_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item?.gallery_category_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableData, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="line-clamp-2"${_scopeId4}>${item?.description ?? ""}</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "line-clamp-2",
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
                                _push5(`<div class="flex gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: {
                                    name: "dashboard-gallery-galleryId",
                                    params: {
                                      galleryId: item?.id
                                    }
                                  },
                                  class: "group opacity-80 hover:opacity-100 cursor-pointer text-lg"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Icon, {
                                        name: "lucide:pencil",
                                        class: "opacity-70 group-hover:text-dashboard-info-50"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Icon, {
                                          name: "lucide:pencil",
                                          class: "opacity-70 group-hover:text-dashboard-info-50"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<button type="button" class="group opacity-80 hover:opacity-100 cursor-pointer text-lg"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:trash-2",
                                  class: "opacity-70 group-hover:text-dashboard-danger-50"
                                }, null, _parent5, _scopeId4));
                                _push5(`</button></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(_component_NuxtLink, {
                                      to: {
                                        name: "dashboard-gallery-galleryId",
                                        params: {
                                          galleryId: item?.id
                                        }
                                      },
                                      class: "group opacity-80 hover:opacity-100 cursor-pointer text-lg"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:pencil",
                                          class: "opacity-70 group-hover:text-dashboard-info-50"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["to"]),
                                    createVNode("button", {
                                      type: "button",
                                      class: "group opacity-80 hover:opacity-100 cursor-pointer text-lg",
                                      onClick: () => handleDeleteGallery(item?.title, item?.id)
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:trash-2",
                                        class: "opacity-70 group-hover:text-dashboard-danger-50"
                                      })
                                    ], 8, ["onClick"])
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
                                createTextVNode(toDisplayString(item?.gallery_category_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableData, null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "line-clamp-2",
                                  innerHTML: item?.description
                                }, null, 8, ["innerHTML"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableData, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: {
                                      name: "dashboard-gallery-galleryId",
                                      params: {
                                        galleryId: item?.id
                                      }
                                    },
                                    class: "group opacity-80 hover:opacity-100 cursor-pointer text-lg"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:pencil",
                                        class: "opacity-70 group-hover:text-dashboard-info-50"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["to"]),
                                  createVNode("button", {
                                    type: "button",
                                    class: "group opacity-80 hover:opacity-100 cursor-pointer text-lg",
                                    onClick: () => handleDeleteGallery(item?.title, item?.id)
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:trash-2",
                                      class: "opacity-70 group-hover:text-dashboard-danger-50"
                                    })
                                  ], 8, ["onClick"])
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
                              createTextVNode(toDisplayString(item?.gallery_category_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableData, null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "line-clamp-2",
                                innerHTML: item?.description
                              }, null, 8, ["innerHTML"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableData, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode(_component_NuxtLink, {
                                  to: {
                                    name: "dashboard-gallery-galleryId",
                                    params: {
                                      galleryId: item?.id
                                    }
                                  },
                                  class: "group opacity-80 hover:opacity-100 cursor-pointer text-lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:pencil",
                                      class: "opacity-70 group-hover:text-dashboard-info-50"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["to"]),
                                createVNode("button", {
                                  type: "button",
                                  class: "group opacity-80 hover:opacity-100 cursor-pointer text-lg",
                                  onClick: () => handleDeleteGallery(item?.title, item?.id)
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:trash-2",
                                    class: "opacity-70 group-hover:text-dashboard-danger-50"
                                  })
                                ], 8, ["onClick"])
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
                data: _ctx.$props?.items ?? [],
                "is-loading": __props.isLoading,
                "is-error": __props.isError,
                "header-count": 5
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
                          createTextVNode("Category")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("Content")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableHead, { width: "75" })
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
                            createTextVNode(toDisplayString(item?.gallery_category_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableData, null, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "line-clamp-2",
                              innerHTML: item?.description
                            }, null, 8, ["innerHTML"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableData, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode(_component_NuxtLink, {
                                to: {
                                  name: "dashboard-gallery-galleryId",
                                  params: {
                                    galleryId: item?.id
                                  }
                                },
                                class: "group opacity-80 hover:opacity-100 cursor-pointer text-lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:pencil",
                                    class: "opacity-70 group-hover:text-dashboard-info-50"
                                  })
                                ]),
                                _: 1
                              }, 8, ["to"]),
                              createVNode("button", {
                                type: "button",
                                class: "group opacity-80 hover:opacity-100 cursor-pointer text-lg",
                                onClick: () => handleDeleteGallery(item?.title, item?.id)
                              }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:trash-2",
                                  class: "opacity-70 group-hover:text-dashboard-danger-50"
                                })
                              ], 8, ["onClick"])
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
              }, 8, ["data", "is-loading", "is-error"])
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-gallery/table.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_1$3 = Object.assign(_sfc_main$f, { __name: "ManageGalleryTable" });
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "popover",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/popover.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$4 = Object.assign(_sfc_main$e, { __name: "UiPopover" });
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "trigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverTrigger), mergeProps(props, _attrs), {
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/trigger.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1$2 = Object.assign(_sfc_main$d, { __name: "UiPopoverTrigger" });
const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
    const forwarded = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverPortal), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/portal.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$3 = Object.assign(_sfc_main$c, { __name: "UiPopoverPortal" });
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "content",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: { default: 8 },
    sideFlip: { type: Boolean },
    align: { default: "start" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: { default: 0 },
    arrowPadding: {},
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    to: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(
      reactiveOmit(props, "to", "class"),
      emits
    );
    const styles = tv({
      base: "PopoverContentFullWidth z-50 w-full rounded-md border border-dashboard-neutral-100/60 bg-dashboard-neutral-50 p-4 text-accent-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopoverPortal = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_UiPopoverPortal, mergeProps({ to: __props.to }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(styles)({ class: props.class })
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(styles)({ class: props.class })
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover/content.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$b, { __name: "UiPopoverContent" });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "command",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    highlightOnHover: { type: Boolean },
    by: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
    const styles = tv({
      base: "flex h-full w-full flex-col overflow-hidden rounded-md bg-dashboard-neutral-50 text-popover-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps(unref(forwarded), {
        open: true,
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/command.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$a, { __name: "UiCommand" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "list",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
    const styles = tv({
      base: "max-h-[300px] overflow-y-auto overflow-x-hidden"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxContent), mergeProps(unref(forwarded), {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/list.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$9, { __name: "UiCommandList" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "label",
  __ssrInlineRender: true,
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    label: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "label");
    const styles = tv({
      base: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxLabel), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(__props.label)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(__props.label), 1)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/label.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$8, { __name: "UiCommandLabel" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "group",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    heading: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const forwarded = reactiveOmit(props, "class", "heading");
    const styles = tv({
      base: "overflow-hidden p-1 text-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCommandLabel = __nuxt_component_0$2;
      _push(ssrRenderComponent(unref(ComboboxGroup), mergeProps({
        class: unref(styles)({ class: props.class })
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "heading", {}, () => {
              if (__props.heading) {
                _push2(ssrRenderComponent(_component_UiCommandLabel, { label: __props.heading }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "heading", {}, () => [
                __props.heading ? (openBlock(), createBlock(_component_UiCommandLabel, {
                  key: 0,
                  label: __props.heading
                }, null, 8, ["label"])) : createCommentVNode("", true)
              ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/group.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$7, { __name: "UiCommandGroup" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "shortcut",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    shortcut: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "ml-auto text-xs tracking-widest text-muted-foreground"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as || "span",
        "as-child": __props.asChild,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(__props.shortcut)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(__props.shortcut), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/shortcut.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$6, { __name: "UiCommandShortcut" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "item",
  __ssrInlineRender: true,
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    icon: {},
    text: {},
    shortcut: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const forwarded = useForwardPropsEmits(
      reactiveOmit(props, "class", "icon", "text", "shortcut"),
      emit
    );
    const styles = tv({
      base: "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$7;
      const _component_UiCommandShortcut = __nuxt_component_1$1;
      _push(ssrRenderComponent(unref(ComboboxItem), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                if (__props.icon) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: __props.icon,
                    class: "h-4 w-4"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(` ${ssrInterpolate(__props.text)} `);
              ssrRenderSlot(_ctx.$slots, "shortcut", {}, () => {
                if (__props.shortcut) {
                  _push2(ssrRenderComponent(_component_UiCommandShortcut, { shortcut: __props.shortcut }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                renderSlot(_ctx.$slots, "icon", {}, () => [
                  __props.icon ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: __props.icon,
                    class: "h-4 w-4"
                  }, null, 8, ["name"])) : createCommentVNode("", true)
                ]),
                createTextVNode(" " + toDisplayString(__props.text) + " ", 1),
                renderSlot(_ctx.$slots, "shortcut", {}, () => [
                  __props.shortcut ? (openBlock(), createBlock(_component_UiCommandShortcut, {
                    key: 0,
                    shortcut: __props.shortcut
                  }, null, 8, ["shortcut"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/item.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$5, { __name: "UiCommandItem" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "per-page",
  __ssrInlineRender: true,
  setup(__props) {
    const rowPerPages = [5, 10, 25];
    const open = ref(false);
    const { getCurrentQuery, updateQueryParams } = useQueryParams();
    const selectedRowPerPage = computed({
      get() {
        const perPageQueryParams = getCurrentQuery(["perPage"])?.perPage;
        const activePerPage = Number.isNaN(Number(perPageQueryParams)) ? 10 : Number(perPageQueryParams);
        const selected = rowPerPages?.find((row) => row === activePerPage);
        return selected;
      },
      set(value) {
        updateQueryParams({ perPage: value });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = __nuxt_component_0$4;
      const _component_UiPopoverTrigger = __nuxt_component_1$2;
      const _component_UiButton = __nuxt_component_0$8;
      const _component_Icon = __nuxt_component_0$7;
      const _component_UiPopoverContent = __nuxt_component_4;
      const _component_UiCommand = __nuxt_component_5;
      const _component_UiCommandList = __nuxt_component_6;
      const _component_UiCommandGroup = __nuxt_component_7;
      const _component_UiCommandItem = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-2" }, _attrs))}><p class="text-dashboard-neutral-500 text-sm"> Show rows per page: </p><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_UiPopover, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": unref(open),
                    class: "w-[100px] justify-between"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(selectedRowPerPage) ?? 10)} `);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:chevrons-up-down",
                          class: "ml-auto h-4 w-4 shrink-0 opacity-50"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(selectedRowPerPage) ?? 10) + " ", 1),
                          createVNode(_component_Icon, {
                            name: "lucide:chevrons-up-down",
                            class: "ml-auto h-4 w-4 shrink-0 opacity-50"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": unref(open),
                      class: "w-[100px] justify-between"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(selectedRowPerPage) ?? 10) + " ", 1),
                        createVNode(_component_Icon, {
                          name: "lucide:chevrons-up-down",
                          class: "ml-auto h-4 w-4 shrink-0 opacity-50"
                        })
                      ]),
                      _: 1
                    }, 8, ["aria-expanded"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "w-[100px] p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCommand, {
                    modelValue: unref(selectedRowPerPage),
                    "onUpdate:modelValue": ($event) => isRef(selectedRowPerPage) ? selectedRowPerPage.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(rowPerPages, (rowPerPage) => {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: rowPerPage,
                                        value: rowPerPage,
                                        onSelect: ($event) => open.value = false
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "lucide:check",
                                              class: ["mr-2 h-4 w-4", [
                                                unref(selectedRowPerPage) === rowPerPage ? "opacity-100" : "opacity-0"
                                              ]]
                                            }, null, _parent7, _scopeId6));
                                            _push7(` ${ssrInterpolate(rowPerPage)}`);
                                          } else {
                                            return [
                                              createVNode(_component_Icon, {
                                                name: "lucide:check",
                                                class: ["mr-2 h-4 w-4", [
                                                  unref(selectedRowPerPage) === rowPerPage ? "opacity-100" : "opacity-0"
                                                ]]
                                              }, null, 8, ["class"]),
                                              createTextVNode(" " + toDisplayString(rowPerPage), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(rowPerPages, (rowPerPage) => {
                                        return createVNode(_component_UiCommandItem, {
                                          key: rowPerPage,
                                          value: rowPerPage,
                                          onSelect: ($event) => open.value = false
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:check",
                                              class: ["mr-2 h-4 w-4", [
                                                unref(selectedRowPerPage) === rowPerPage ? "opacity-100" : "opacity-0"
                                              ]]
                                            }, null, 8, ["class"]),
                                            createTextVNode(" " + toDisplayString(rowPerPage), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(rowPerPages, (rowPerPage) => {
                                      return createVNode(_component_UiCommandItem, {
                                        key: rowPerPage,
                                        value: rowPerPage,
                                        onSelect: ($event) => open.value = false
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:check",
                                            class: ["mr-2 h-4 w-4", [
                                              unref(selectedRowPerPage) === rowPerPage ? "opacity-100" : "opacity-0"
                                            ]]
                                          }, null, 8, ["class"]),
                                          createTextVNode(" " + toDisplayString(rowPerPage), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(rowPerPages, (rowPerPage) => {
                                    return createVNode(_component_UiCommandItem, {
                                      key: rowPerPage,
                                      value: rowPerPage,
                                      onSelect: ($event) => open.value = false
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:check",
                                          class: ["mr-2 h-4 w-4", [
                                            unref(selectedRowPerPage) === rowPerPage ? "opacity-100" : "opacity-0"
                                          ]]
                                        }, null, 8, ["class"]),
                                        createTextVNode(" " + toDisplayString(rowPerPage), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 64))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCommand, {
                      modelValue: unref(selectedRowPerPage),
                      "onUpdate:modelValue": ($event) => isRef(selectedRowPerPage) ? selectedRowPerPage.value = $event : null
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(rowPerPages, (rowPerPage) => {
                                  return createVNode(_component_UiCommandItem, {
                                    key: rowPerPage,
                                    value: rowPerPage,
                                    onSelect: ($event) => open.value = false
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:check",
                                        class: ["mr-2 h-4 w-4", [
                                          unref(selectedRowPerPage) === rowPerPage ? "opacity-100" : "opacity-0"
                                        ]]
                                      }, null, 8, ["class"]),
                                      createTextVNode(" " + toDisplayString(rowPerPage), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": unref(open),
                    class: "w-[100px] justify-between"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(selectedRowPerPage) ?? 10) + " ", 1),
                      createVNode(_component_Icon, {
                        name: "lucide:chevrons-up-down",
                        class: "ml-auto h-4 w-4 shrink-0 opacity-50"
                      })
                    ]),
                    _: 1
                  }, 8, ["aria-expanded"])
                ]),
                _: 1
              }),
              createVNode(_component_UiPopoverContent, { class: "w-[100px] p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCommand, {
                    modelValue: unref(selectedRowPerPage),
                    "onUpdate:modelValue": ($event) => isRef(selectedRowPerPage) ? selectedRowPerPage.value = $event : null
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiCommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(rowPerPages, (rowPerPage) => {
                                return createVNode(_component_UiCommandItem, {
                                  key: rowPerPage,
                                  value: rowPerPage,
                                  onSelect: ($event) => open.value = false
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:check",
                                      class: ["mr-2 h-4 w-4", [
                                        unref(selectedRowPerPage) === rowPerPage ? "opacity-100" : "opacity-0"
                                      ]]
                                    }, null, 8, ["class"]),
                                    createTextVNode(" " + toDisplayString(rowPerPage), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/per-page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$4, { __name: "UiPaginationPerPage" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "number-control",
  __ssrInlineRender: true,
  props: {
    totalPages: { default: 1 },
    totalItem: { default: 0 },
    limit: { default: 10 },
    currentPage: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    useQueryParams();
    function generatePaginationText({ total, page, limit }) {
      const start = (page - 1) * limit + 1;
      const end = Math.min(page * limit, total);
      if (total === 0) {
        return "0 of 0";
      }
      return `${start}-${end} <span class="text-dashboard-accent-50/50">of ${total}</span>`;
    }
    const currentPaginationStatus = computed(() => generatePaginationText({
      total: props?.totalItem,
      page: props?.currentPage,
      limit: props?.limit
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-6" }, _attrs))}><p class="text-sm font-medium">${unref(currentPaginationStatus) ?? ""}</p><div class="space-x-4"><button type="button" class="disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(props.currentPage === 1) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:chevron-left" }, null, _parent));
      _push(`</button><button type="button" class="disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(props.currentPage === props.totalPages) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:chevron-right" }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/number-control.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "UiPaginationNumberControl" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "pagination",
  __ssrInlineRender: true,
  props: {
    totalPages: { default: 1 },
    totalItem: { default: 0 },
    limit: { default: 10 },
    currentPage: { default: 1 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPaginationPerPage = __nuxt_component_0$1;
      const _component_UiPaginationNumberControl = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row sm:justify-between w-full gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiPaginationPerPage, null, null, _parent));
      _push(ssrRenderComponent(_component_UiPaginationNumberControl, _ctx.$props, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "UiPagination" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "content",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { currentQueryParams } = useQueryParams();
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "MANAGE_GALLERY",
      async () => {
        const params = {};
        if (currentQueryParams?.value?.page && !Number.isNaN(Number(currentQueryParams.value.page))) {
          params.page = Number(currentQueryParams.value.page);
        }
        if (currentQueryParams?.value?.perPage && !Number.isNaN(Number(currentQueryParams.value.perPage))) {
          params.limit = Number(currentQueryParams.value.perPage);
        }
        return journeyFetcher().getAll(params);
      },
      { lazy: true, watch: [currentQueryParams] }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0$5;
      const _component_ManageGalleryTable = __nuxt_component_1$3;
      const _component_UiCardFooter = __nuxt_component_7$1;
      const _component_UiPagination = __nuxt_component_3;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "border border-dashboard-neutral-100/50 bg-dashboard-neutral-50" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ManageGalleryTable, {
              items: unref(data)?.data ?? [],
              "is-loading": unref(pending),
              "is-error": !!unref(error),
              onOnRefresh: unref(refresh)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardFooter, { class: "!py-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiPagination, {
                          "total-pages": unref(data)?.totalPages ?? 1,
                          "total-item": unref(data)?.total ?? 0,
                          limit: unref(data)?.limit ?? 10,
                          "current-page": unref(data)?.page ?? 1
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiPagination, {
                            "total-pages": unref(data)?.totalPages ?? 1,
                            "total-item": unref(data)?.total ?? 0,
                            limit: unref(data)?.limit ?? 10,
                            "current-page": unref(data)?.page ?? 1
                          }, null, 8, ["total-pages", "total-item", "limit", "current-page"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardFooter, { class: "!py-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiPagination, {
                          "total-pages": unref(data)?.totalPages ?? 1,
                          "total-item": unref(data)?.total ?? 0,
                          limit: unref(data)?.limit ?? 10,
                          "current-page": unref(data)?.page ?? 1
                        }, null, 8, ["total-pages", "total-item", "limit", "current-page"])
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
              createVNode(_component_ManageGalleryTable, {
                items: unref(data)?.data ?? [],
                "is-loading": unref(pending),
                "is-error": !!unref(error),
                onOnRefresh: unref(refresh)
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardFooter, { class: "!py-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiPagination, {
                        "total-pages": unref(data)?.totalPages ?? 1,
                        "total-item": unref(data)?.total ?? 0,
                        limit: unref(data)?.limit ?? 10,
                        "current-page": unref(data)?.page ?? 1
                      }, null, 8, ["total-pages", "total-item", "limit", "current-page"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items", "is-loading", "is-error", "onOnRefresh"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-gallery/content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ManageGalleryContent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.client",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ManageGalleryContent = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ManageGalleryContent, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/gallery/index.client.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.client-DRfabOUX.mjs.map
