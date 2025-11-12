import { _ as __nuxt_component_0, a as __nuxt_component_1$1, c as __nuxt_component_0$1 } from './card-BC35WKp2.mjs';
import { u as useForm, t as toTypedSchema, F as Field, _ as __nuxt_component_5 } from './vee-validate-zod-NJbS403e.mjs';
import { _ as __nuxt_component_2$1 } from './item-BzJ-gaK3.mjs';
import { _ as __nuxt_component_3, I as ImageUploadSchema, c as createObjectURL } from './file-upload-CKlkL0qx.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, withAsyncContext, unref, ref, watch, computed, defineAsyncComponent, createBlock, openBlock, createTextVNode, toDisplayString, Fragment, useSSRContext } from 'vue';
import { u as useRuntimeConfig, a as __nuxt_component_16 } from './server.mjs';
import { _ as __nuxt_component_7 } from './footer-DXV0za36.mjs';
import { _ as __nuxt_component_0$2 } from './button-BrROYuAJ.mjs';
import __nuxt_component_0$3 from './index-C2n46nfI.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as pagesAboutFetchData } from './pages-about-C7lhVPt5.mjs';
import z from 'zod';
import { h as htmlHasContent } from './format-data-D2ElPwyM.mjs';
import { t as toast } from './index-DJGQOf1Z.mjs';
import { u as useAsyncData } from './asyncData-DuMyQiaR.mjs';
import 'reka-ui';
import 'tailwind-variants';
import './client-only-B_PoH0ma.mjs';
import './index-Df46HAS4.mjs';
import './index-BAtNd0PJ.mjs';
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
import './nuxt-link-Bh--EX_l.mjs';
import './composables-D0i6IdhD.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './constant-D5BqL6of.mjs';
import 'date-fns';
import 'perfect-debounce';

const ManageAboutSchema = z.object({
  title: z.string("Title is required.").min(1, "Title is required."),
  description: z.string("Description is required.").min(1, "Description is required.").refine((val) => htmlHasContent(val), {
    error: "Description is not valid."
  }),
  thumbnailUrl: z.string("Thumbnail is required.").min(1, "Thumbnail is required."),
  thumbnail: z.any().optional()
}).superRefine(async (data, ctx) => {
  if (!data?.thumbnailUrl) {
    ctx.addIssue({
      code: "custom",
      path: ["thumbnail"],
      message: "Thumbnail is required."
    });
  }
  if (data.thumbnail) {
    const file = data.thumbnail;
    const isValidImage = await ImageUploadSchema.safeParseAsync(file);
    if (!isValidImage.success) {
      ctx.addIssue({
        code: "custom",
        path: ["thumbnail"],
        message: isValidImage.error?.message || "Invalid thumbnail file."
      });
    }
  }
});
const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./image-preview-DmuMZ1gV.mjs').then((c) => c.default || c));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "form",
  __ssrInlineRender: true,
  props: {
    defaultValue: {}
  },
  setup(__props) {
    const props = __props;
    const { handleSubmit, setValues, values, setFieldValue } = useForm({
      validationSchema: toTypedSchema(ManageAboutSchema),
      initialValues: {
        title: props?.defaultValue?.title ?? "",
        description: props?.defaultValue?.description ?? "",
        thumbnailUrl: props?.defaultValue?.thumbnail ?? "",
        thumbnail: null
      }
    });
    const isSubmitting = ref(false);
    const isViewMode = ref(true);
    watch(props, () => {
      setValues({
        title: props?.defaultValue?.title ?? "",
        description: props?.defaultValue?.description ?? "",
        thumbnailUrl: props?.defaultValue?.thumbnail ?? "",
        thumbnail: null
      });
    });
    const thumbnailUrl = computed(() => {
      if (!values?.thumbnailUrl?.length)
        return "";
      if (values?.thumbnailUrl?.startsWith("blob")) {
        return values?.thumbnailUrl;
      }
      return useRuntimeConfig().public.apiBase + values?.thumbnailUrl;
    });
    function resetImage() {
      setFieldValue("thumbnail", void 0);
      setFieldValue("thumbnailUrl", "");
    }
    const onSaveManageAbout = handleSubmit((values2) => {
      isSubmitting.value = true;
      pagesAboutFetchData().create(values2).then(() => {
        toast.success("Success to save data.");
        isViewMode.value = true;
      }).catch((err) => {
        toast.error(
          err?.response?._data?.message || "Fail to save data."
        );
      }).finally(() => {
        isSubmitting.value = false;
      });
    });
    function createImageUrl(file) {
      return createObjectURL(file);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0;
      const _component_UiCardContent = __nuxt_component_0$1;
      const _component_Field = Field;
      const _component_UiFormItem = __nuxt_component_2$1;
      const _component_UiDropfile = __nuxt_component_3;
      const _component_LazyUiImagePreview = __nuxt_component_5_lazy;
      const _component_UiInput = __nuxt_component_5;
      const _component_UiTiptap = __nuxt_component_16;
      const _component_UiCardFooter = __nuxt_component_7;
      const _component_UiButton = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({
        as: "form",
        class: "shadow-none w-full",
        onSubmit: unref(onSaveManageAbout)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "!py-4 bg-transparent p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full mx-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Field, { name: "thumbnail" }, {
                    default: withCtx(({ handleChange, errors }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, {
                          label: "Image",
                          class: "mb-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (!unref(values)?.thumbnailUrl?.length) {
                                _push5(ssrRenderComponent(_component_UiDropfile, {
                                  "aria-invalid": !!errors?.length,
                                  disabled: unref(isViewMode),
                                  onDropped: (value) => {
                                    const file = value?.[0];
                                    handleChange(value?.[0]);
                                    unref(setFieldValue)("thumbnailUrl", createImageUrl(file));
                                  }
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(_component_LazyUiImagePreview, {
                                  "image-url": unref(thumbnailUrl),
                                  disabled: unref(isViewMode),
                                  onOnDeleteImage: resetImage
                                }, null, _parent5, _scopeId4));
                              }
                            } else {
                              return [
                                !unref(values)?.thumbnailUrl?.length ? (openBlock(), createBlock(_component_UiDropfile, {
                                  key: 0,
                                  "aria-invalid": !!errors?.length,
                                  disabled: unref(isViewMode),
                                  onDropped: (value) => {
                                    const file = value?.[0];
                                    handleChange(value?.[0]);
                                    unref(setFieldValue)("thumbnailUrl", createImageUrl(file));
                                  }
                                }, null, 8, ["aria-invalid", "disabled", "onDropped"])) : (openBlock(), createBlock(_component_LazyUiImagePreview, {
                                  key: 1,
                                  "image-url": unref(thumbnailUrl),
                                  disabled: unref(isViewMode),
                                  onOnDeleteImage: resetImage
                                }, null, 8, ["image-url", "disabled"]))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormItem, {
                            label: "Image",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              !unref(values)?.thumbnailUrl?.length ? (openBlock(), createBlock(_component_UiDropfile, {
                                key: 0,
                                "aria-invalid": !!errors?.length,
                                disabled: unref(isViewMode),
                                onDropped: (value) => {
                                  const file = value?.[0];
                                  handleChange(value?.[0]);
                                  unref(setFieldValue)("thumbnailUrl", createImageUrl(file));
                                }
                              }, null, 8, ["aria-invalid", "disabled", "onDropped"])) : (openBlock(), createBlock(_component_LazyUiImagePreview, {
                                key: 1,
                                "image-url": unref(thumbnailUrl),
                                disabled: unref(isViewMode),
                                onOnDeleteImage: resetImage
                              }, null, 8, ["image-url", "disabled"]))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Field, { name: "title" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, {
                          label: "Title",
                          class: "mb-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter title",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiInput, mergeProps(componentField, {
                                  placeholder: "Enter title",
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
                            label: "Title",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter title",
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
                  _push3(ssrRenderComponent(_component_Field, { name: "description" }, {
                    default: withCtx(({ value, handleChange, errors, validate }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormItem, {
                          label: "Description",
                          class: "mb-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTiptap, {
                                value,
                                "aria-invalid": !!errors?.length ? true : void 0,
                                disabled: unref(isViewMode),
                                "onUpdate:value": (value2) => handleChange(value2),
                                onOnBlur: ($event) => validate()
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTiptap, {
                                  value,
                                  "aria-invalid": !!errors?.length ? true : void 0,
                                  disabled: unref(isViewMode),
                                  "onUpdate:value": (value2) => handleChange(value2),
                                  onOnBlur: ($event) => validate()
                                }, null, 8, ["value", "aria-invalid", "disabled", "onUpdate:value", "onOnBlur"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
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
                                disabled: unref(isViewMode),
                                "onUpdate:value": (value2) => handleChange(value2),
                                onOnBlur: ($event) => validate()
                              }, null, 8, ["value", "aria-invalid", "disabled", "onUpdate:value", "onOnBlur"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full mx-auto" }, [
                      createVNode(_component_Field, { name: "thumbnail" }, {
                        default: withCtx(({ handleChange, errors }) => [
                          createVNode(_component_UiFormItem, {
                            label: "Image",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              !unref(values)?.thumbnailUrl?.length ? (openBlock(), createBlock(_component_UiDropfile, {
                                key: 0,
                                "aria-invalid": !!errors?.length,
                                disabled: unref(isViewMode),
                                onDropped: (value) => {
                                  const file = value?.[0];
                                  handleChange(value?.[0]);
                                  unref(setFieldValue)("thumbnailUrl", createImageUrl(file));
                                }
                              }, null, 8, ["aria-invalid", "disabled", "onDropped"])) : (openBlock(), createBlock(_component_LazyUiImagePreview, {
                                key: 1,
                                "image-url": unref(thumbnailUrl),
                                disabled: unref(isViewMode),
                                onOnDeleteImage: resetImage
                              }, null, 8, ["image-url", "disabled"]))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Field, { name: "title" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_UiFormItem, {
                            label: "Title",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiInput, mergeProps(componentField, {
                                placeholder: "Enter title",
                                class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                                disabled: unref(isViewMode)
                              }), null, 16, ["disabled"])
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
                                disabled: unref(isViewMode),
                                "onUpdate:value": (value2) => handleChange(value2),
                                onOnBlur: ($event) => validate()
                              }, null, 8, ["value", "aria-invalid", "disabled", "onUpdate:value", "onOnBlur"])
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
                    createVNode(_component_Field, { name: "thumbnail" }, {
                      default: withCtx(({ handleChange, errors }) => [
                        createVNode(_component_UiFormItem, {
                          label: "Image",
                          class: "mb-6"
                        }, {
                          default: withCtx(() => [
                            !unref(values)?.thumbnailUrl?.length ? (openBlock(), createBlock(_component_UiDropfile, {
                              key: 0,
                              "aria-invalid": !!errors?.length,
                              disabled: unref(isViewMode),
                              onDropped: (value) => {
                                const file = value?.[0];
                                handleChange(value?.[0]);
                                unref(setFieldValue)("thumbnailUrl", createImageUrl(file));
                              }
                            }, null, 8, ["aria-invalid", "disabled", "onDropped"])) : (openBlock(), createBlock(_component_LazyUiImagePreview, {
                              key: 1,
                              "image-url": unref(thumbnailUrl),
                              disabled: unref(isViewMode),
                              onOnDeleteImage: resetImage
                            }, null, 8, ["image-url", "disabled"]))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Field, { name: "title" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_UiFormItem, {
                          label: "Title",
                          class: "mb-6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiInput, mergeProps(componentField, {
                              placeholder: "Enter title",
                              class: "disabled:bg-black/10 disabled:cursor-not-allowed",
                              disabled: unref(isViewMode)
                            }), null, 16, ["disabled"])
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
                              disabled: unref(isViewMode),
                              "onUpdate:value": (value2) => handleChange(value2),
                              onOnBlur: ($event) => validate()
                            }, null, 8, ["value", "aria-invalid", "disabled", "onUpdate:value", "onOnBlur"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-about/form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "ManageAboutForm" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "content",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "MANAGE_ABOUT_PAGE",
      () => pagesAboutFetchData().getAll({ limit: 1 }),
      { lazy: true }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCardHeader = __nuxt_component_1$1;
      const _component_UiCardContent = __nuxt_component_0$1;
      const _component_ManageAboutForm = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UiCardHeader, { class: "flex md:!flex-row justify-between py-4 md:items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="font-semibold text-lg text-dashboard-accent-50"${_scopeId}> About Page Form </h3>`);
          } else {
            return [
              createVNode("h3", { class: "font-semibold text-lg text-dashboard-accent-50" }, " About Page Form ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCardContent, { class: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ManageAboutForm, {
              "default-value": unref(data)?.data?.[0]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ManageAboutForm, {
                "default-value": unref(data)?.data?.[0]
              }, null, 8, ["default-value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/manage-about/content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "ManageAboutContent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.client",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0;
      const _component_ManageAboutContent = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "border border-dashboard-neutral-100/50 bg-dashboard-neutral-50" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ManageAboutContent, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ManageAboutContent)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/about-page/index.client.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.client-NE6hXOs9.mjs.map
