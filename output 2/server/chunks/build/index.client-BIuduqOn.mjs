import { _ as __nuxt_component_0, a as __nuxt_component_1$1, c as __nuxt_component_0$1 } from './card-BC35WKp2.mjs';
import { u as useForm, t as toTypedSchema, F as Field, _ as __nuxt_component_5 } from './vee-validate-zod-NJbS403e.mjs';
import { _ as __nuxt_component_2$1 } from './item-BzJ-gaK3.mjs';
import { _ as __nuxt_component_7 } from './footer-DXV0za36.mjs';
import { _ as __nuxt_component_0$2 } from './button-BrROYuAJ.mjs';
import __nuxt_component_0$3 from './index-C2n46nfI.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, withAsyncContext, unref, ref, watch, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { s as socialMediaFetchData } from './social-media-CCAYuXM7.mjs';
import { z } from 'zod';
import { t as toast } from './index-DJGQOf1Z.mjs';
import { u as useAsyncData } from './asyncData-DuMyQiaR.mjs';
import { u as useHead } from './composables-D0i6IdhD.mjs';
import 'reka-ui';
import 'tailwind-variants';
import './client-only-B_PoH0ma.mjs';
import './nuxt-link-Bh--EX_l.mjs';
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
import './server.mjs';
import 'vue-router';
import './index-BAtNd0PJ.mjs';
import './constant-D5BqL6of.mjs';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const SocialMediaSchema = z.object({
  facebook: z.url("Facebook link invalid."),
  instagram: z.url("Instagram link invalid."),
  tiktok: z.url("Tiktok link invalid."),
  twitter: z.url("Twitter link invalid."),
  youtube: z.url("Youtube link invalid."),
  whatsapp: z.url("Whatsapp link invalid.")
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "form",
  __ssrInlineRender: true,
  props: {
    isLoading: { type: Boolean },
    isError: { type: Boolean },
    defaultValue: {}
  },
  setup(__props) {
    const props = __props;
    const { handleSubmit, setValues } = useForm({
      validationSchema: toTypedSchema(SocialMediaSchema),
      initialValues: {
        facebook: props?.defaultValue?.facebook?.link ?? "",
        instagram: props?.defaultValue?.instagram?.link ?? "",
        tiktok: props?.defaultValue?.tiktok?.link ?? "",
        twitter: props?.defaultValue?.twitter?.link ?? "",
        youtube: props?.defaultValue?.youtube?.link ?? "",
        whatsapp: props?.defaultValue?.whatsapp?.link ?? ""
      }
    });
    const isSubmitting = ref(false);
    const isViewMode = ref(true);
    watch(props, () => {
      setValues({
        facebook: props?.defaultValue?.facebook?.link ?? "",
        instagram: props?.defaultValue?.instagram?.link ?? "",
        tiktok: props?.defaultValue?.tiktok?.link ?? "",
        twitter: props?.defaultValue?.twitter?.link ?? "",
        youtube: props?.defaultValue?.youtube?.link ?? "",
        whatsapp: props?.defaultValue?.whatsapp?.link ?? ""
      });
    });
    const onSaveCategory = handleSubmit((values) => {
      isSubmitting.value = true;
      const payload = {
        facebook: {
          title: "facebook",
          link: values?.facebook
        },
        instagram: {
          title: "instagram",
          link: values?.instagram
        },
        tiktok: {
          title: "tiktok",
          link: values?.tiktok
        },
        twitter: {
          title: "twitter",
          link: values?.twitter
        },
        youtube: {
          title: "youtube",
          link: values?.youtube
        },
        whatsapp: {
          title: "whatsapp",
          link: values?.whatsapp
        }
      };
      socialMediaFetchData().update(payload).then(() => {
        toast.success("Succes save data.");
        isViewMode.value = true;
      }).catch((err) => {
        toast.error(err?.response?._data?.message || "Error.");
      }).finally(() => {
        isSubmitting.value = false;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0;
      const _component_UiCardContent = __nuxt_component_0$1;
      const _component_Field = Field;
      const _component_UiFormItem = __nuxt_component_2$1;
      const _component_UiInput = __nuxt_component_5;
      const _component_UiCardFooter = __nuxt_component_7;
      const _component_UiButton = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({
        as: "form",
        class: "shadow-none",
        onSubmit: unref(onSaveCategory)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "!py-4 bg-transparent p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full mx-auto"${_scopeId2}><div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Field, {
                    name: "facebook",
                    class: "hidden"
                  }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, {
                          label: "Facebook URL",
                          class: "mb-6 hidden"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter facebook URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter facebook URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, {
                            label: "Facebook URL",
                            class: "mb-6 hidden"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter facebook URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Field, { name: "instagram" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, {
                          label: "Instagram URL",
                          class: "mb-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter instagram URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter instagram URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, {
                            label: "Instagram URL",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter instagram URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Field, { name: "tiktok" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, {
                          label: "Tiktok URL",
                          class: "mb-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter tiktok URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter tiktok URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, {
                            label: "Tiktok URL",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter tiktok URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Field, { name: "twitter" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, {
                          label: "Twitter URL",
                          class: "mb-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter twitter URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter twitter URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, {
                            label: "Twitter URL",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter twitter URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Field, {
                    name: "youtube",
                    class: "hidden"
                  }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, {
                          label: "Youtube URL",
                          class: "mb-6 hidden"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter youtube URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter youtube URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, {
                            label: "Youtube URL",
                            class: "mb-6 hidden"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter youtube URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Field, { name: "whatsapp" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, {
                          label: "Whatsapp URL",
                          class: "mb-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter whatsapp URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter whatsapp URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, {
                            label: "Whatsapp URL",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter whatsapp URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full mx-auto" }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10" }, [
                        createVNode(_component_Field, {
                          name: "facebook",
                          class: "hidden"
                        }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_UiFormItem, {
                              label: "Facebook URL",
                              class: "mb-6 hidden"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter facebook URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Field, { name: "instagram" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_UiFormItem, {
                              label: "Instagram URL",
                              class: "mb-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter instagram URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Field, { name: "tiktok" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_UiFormItem, {
                              label: "Tiktok URL",
                              class: "mb-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter tiktok URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Field, { name: "twitter" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_UiFormItem, {
                              label: "Twitter URL",
                              class: "mb-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter twitter URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Field, {
                          name: "youtube",
                          class: "hidden"
                        }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_UiFormItem, {
                              label: "Youtube URL",
                              class: "mb-6 hidden"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter youtube URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Field, { name: "whatsapp" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_UiFormItem, {
                              label: "Whatsapp URL",
                              class: "mb-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter whatsapp URL",
                                  class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                  disabled: unref(isViewMode)
                                }), null, 16, ["disabled"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, { class: "!p-0 flex justify-end gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(isViewMode)) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      type: "button",
                      class: "text-lg h-auto !px-5 py-3",
                      onClick: ($event) => isViewMode.value = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Update `);
                        } else {
                          return [
                            createTextVNode(" Update ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      type: "button",
                      variant: "destructive",
                      class: "text-lg h-auto !px-5 py-3",
                      onClick: ($event) => isViewMode.value = true
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Cancel `);
                        } else {
                          return [
                            createTextVNode(" Cancel ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiButton, {
                      type: "submit",
                      class: "text-lg h-auto !px-5 py-3",
                      disabled: unref(isSubmitting)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, { name: "heroicons:archive-box" }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(unref(isSubmitting) ? "Saving..." : "Save")}`);
                        } else {
                          return [
                            createVNode(_component_Icon, { name: "heroicons:archive-box" }),
                            createTextVNode(" " + toDisplayString(unref(isSubmitting) ? "Saving..." : "Save"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  }
                } else {
                  return [
                    unref(isViewMode) ? (openBlock(), createBlock(_component_UiButton, {
                      key: 0,
                      type: "button",
                      class: "text-lg h-auto !px-5 py-3",
                      onClick: ($event) => isViewMode.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Update ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_UiButton, {
                        type: "button",
                        variant: "destructive",
                        class: "text-lg h-auto !px-5 py-3",
                        onClick: ($event) => isViewMode.value = true
                      }, {
                        default: withCtx(() => [
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
                    ], 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "!py-4 bg-transparent p-0" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full mx-auto" }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10" }, [
                      createVNode(_component_Field, {
                        name: "facebook",
                        class: "hidden"
                      }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, {
                            label: "Facebook URL",
                            class: "mb-6 hidden"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter facebook URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Field, { name: "instagram" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, {
                            label: "Instagram URL",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter instagram URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Field, { name: "tiktok" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, {
                            label: "Tiktok URL",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter tiktok URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Field, { name: "twitter" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, {
                            label: "Twitter URL",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter twitter URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Field, {
                        name: "youtube",
                        class: "hidden"
                      }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, {
                            label: "Youtube URL",
                            class: "mb-6 hidden"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter youtube URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Field, { name: "whatsapp" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, {
                            label: "Whatsapp URL",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter whatsapp URL",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter, { class: "!p-0 flex justify-end gap-4" }, {
                default: withCtx(() => [
                  unref(isViewMode) ? (openBlock(), createBlock(_component_UiButton, {
                    key: 0,
                    type: "button",
                    class: "text-lg h-auto !px-5 py-3",
                    onClick: ($event) => isViewMode.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Update ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(_component_UiButton, {
                      type: "button",
                      variant: "destructive",
                      class: "text-lg h-auto !px-5 py-3",
                      onClick: ($event) => isViewMode.value = true
                    }, {
                      default: withCtx(() => [
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
                  ], 64))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-social-media/form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "ManageSocialMediaForm" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "content",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "MANAGE_SOCIAL_MEDIA",
      async () => socialMediaFetchData().getAll(),
      { lazy: true }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCardHeader = __nuxt_component_1$1;
      const _component_UiCardContent = __nuxt_component_0$1;
      const _component_ManageSocialMediaForm = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UiCardHeader, { class: "flex md:!flex-row justify-between py-4 md:items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-semibold text-lg text-dashboard-accent-50"${_scopeId}> Manage Social Media </h3>`);
          } else {
            return [
              createVNode("h3", { class: "font-semibold text-lg text-dashboard-accent-50" }, " Manage Social Media ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCardContent, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ManageSocialMediaForm, {
              "default-value": unref(data),
              "is-loading": unref(pending),
              "is-error": !!unref(error)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ManageSocialMediaForm, {
                "default-value": unref(data),
                "is-loading": unref(pending),
                "is-error": !!unref(error)
              }, null, 8, ["default-value", "is-loading", "is-error"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-social-media/content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "ManageSocialMediaContent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.client",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Aysia LinggarWati - Management Social Media"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0;
      const _component_ManageSocialMediaContent = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "border border-dashboard-neutral-100/50 bg-dashboard-neutral-50" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ManageSocialMediaContent, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ManageSocialMediaContent)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/social-media/index.client.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.client-BIuduqOn.mjs.map
