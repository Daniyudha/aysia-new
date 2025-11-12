import { _ as __nuxt_component_0 } from './nuxt-link-Bh--EX_l.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_1 } from './tiktok-DOxTmlmn.mjs';
import { defineComponent, inject, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useForm, t as toTypedSchema, F as Field, _ as __nuxt_component_5$1 } from './vee-validate-zod-NJbS403e.mjs';
import { _ as __nuxt_component_1$2 } from './floating-item-BVKECQ_n.mjs';
import { tv } from 'tailwind-variants';
import { _ as __nuxt_component_0$1 } from './button-BrROYuAJ.mjs';
import { z } from 'zod';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useHead } from './composables-D0i6IdhD.mjs';
import './server.mjs';
import 'vue-router';
import 'reka-ui';
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
import './client-only-B_PoH0ma.mjs';
import './index-C2n46nfI.mjs';
import './asyncData-DuMyQiaR.mjs';
import 'perfect-debounce';
import './index-BAtNd0PJ.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "whatsapp",
  __ssrInlineRender: true,
  props: {
    fill: { default: "#533A1B" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M17.8547 3.05156C15.8906 1.08281 13.275 0 10.4953 0C4.75781 0 0.0890625 4.66875 0.0890625 10.4062C0.0890625 12.2391 0.567188 14.0297 1.47656 15.6094L0 21L5.51719 19.5516C7.03594 20.3813 8.74687 20.8172 10.4906 20.8172H10.4953C16.2281 20.8172 21 16.1484 21 10.4109C21 7.63125 19.8188 5.02031 17.8547 3.05156ZM10.4953 19.0641C8.93906 19.0641 7.41562 18.6469 6.08906 17.8594L5.775 17.6719L2.50313 18.5297L3.375 15.3375L3.16875 15.0094C2.30156 13.6313 1.84688 12.0422 1.84688 10.4062C1.84688 5.63906 5.72812 1.75781 10.5 1.75781C12.8109 1.75781 14.9812 2.65781 16.6125 4.29375C18.2437 5.92969 19.2469 8.1 19.2422 10.4109C19.2422 15.1828 15.2625 19.0641 10.4953 19.0641ZM15.2391 12.5859C14.9813 12.4547 13.7016 11.8266 13.4625 11.7422C13.2234 11.6531 13.05 11.6109 12.8766 11.8734C12.7031 12.1359 12.2063 12.7172 12.0516 12.8953C11.9016 13.0688 11.7469 13.0922 11.4891 12.9609C9.96094 12.1969 8.95781 11.5969 7.95 9.86719C7.68281 9.40781 8.21719 9.44063 8.71406 8.44687C8.79844 8.27344 8.75625 8.12344 8.69062 7.99219C8.625 7.86094 8.10469 6.58125 7.88906 6.06094C7.67813 5.55469 7.4625 5.625 7.30313 5.61563C7.15313 5.60625 6.97969 5.60625 6.80625 5.60625C6.63281 5.60625 6.35156 5.67188 6.1125 5.92969C5.87344 6.19219 5.20312 6.82031 5.20312 8.1C5.20312 9.37969 6.13594 10.6172 6.2625 10.7906C6.39375 10.9641 8.09531 13.5891 10.7062 14.7188C12.3562 15.4312 13.0031 15.4922 13.8281 15.3703C14.3297 15.2953 15.3656 14.7422 15.5812 14.1328C15.7969 13.5234 15.7969 13.0031 15.7313 12.8953C15.6703 12.7781 15.4969 12.7125 15.2391 12.5859Z"${ssrRenderAttr("fill", _ctx.$props.fill)}></path></svg>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/whatsapp.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3$1 = Object.assign(_sfc_main$4, { __name: "IconWhatsapp" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "textarea",
  __ssrInlineRender: true,
  props: {
    class: {},
    name: {},
    id: {},
    placeholder: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    rows: {},
    modelValue: { default: "" },
    maxlength: {},
    pattern: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const styles = tv({
      base: "form-textarea flex min-h-[80px] w-full ring-dashboard-neutral-100 ring-1 pl-4 pr-4 py-2 rounded-md focus:ring-2 focus:ring-dashboard-warning-50 outline-none focus:border-0 transition-all text-app-secondary focus:shadow-dashboard-warning-50 focus-visible:ring-dashboard-warning-50 [&[aria-invalid='true']]:ring-dashboard-danger-50 [&[aria-invalid='true']]:focus:ring-dashboard-danger-50 [aria-invalid='true']]:focus:shadow-dashboard-danger-50 [aria-invalid='true']]:focus-visible:!shadow-dashboard-danger-50 aria-[invalid='true']]:ring-2"
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps(props, {
        value: __props.modelValue,
        class: unref(styles)({ class: props.class })
      }, _attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/textarea.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$3, { __name: "UiTextarea" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "telegram",
  __ssrInlineRender: true,
  props: {
    fill: { default: "#533A1B" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "21",
        height: "22",
        viewBox: "0 0 21 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M20.4298 0.7296C20.8441 1.01671 21.0615 1.513 20.9835 2.00929L18.3585 19.0718C18.297 19.4696 18.055 19.8183 17.7023 20.0151C17.3495 20.212 16.9271 20.2366 16.5538 20.0808L11.6484 18.0423L8.83881 21.0816C8.47377 21.4794 7.89955 21.6107 7.39506 21.4138C6.89056 21.2169 6.56244 20.7288 6.56244 20.1874V16.7585C6.56244 16.5944 6.62396 16.4386 6.7347 16.3155L13.6089 8.81788C13.8468 8.55948 13.8386 8.16163 13.5925 7.91554C13.3464 7.66944 12.9486 7.65304 12.6902 7.88683L4.3476 15.2983L0.725916 13.4855C0.29115 13.2681 0.0122436 12.8333 -6.10811e-05 12.3493C-0.0123658 11.8653 0.241931 11.4142 0.660291 11.1722L19.0353 0.672178C19.4742 0.421983 20.0156 0.446592 20.4298 0.7296Z"${ssrRenderAttr("fill", _ctx.$props.fill)}></path></svg>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/telegram.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "IconTelegram" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "message-form",
  __ssrInlineRender: true,
  setup(__props) {
    const { handleSubmit } = useForm({
      validationSchema: toTypedSchema(
        z.object({
          name: z.string("Full name is required").min(3, "Full name must be at least 3 characters"),
          email: z.email("Email must be a valid email"),
          phone: z.string().transform((value) => !value ? null : value).refine((value) => !value || value.length === 10, {
            message: "Phone must be 10 digits"
          }).nullish(),
          inquiry: z.string("Inquiry is required").min(1, "Inquiry is required")
        })
      )
    });
    handleSubmit((values) => {
      return;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Field = Field;
      const _component_UiFormFloatingItem = __nuxt_component_1$2;
      const _component_UiInput = __nuxt_component_5$1;
      const _component_UiTextarea = __nuxt_component_3;
      const _component_UiButton = __nuxt_component_0$1;
      const _component_IconTelegram = __nuxt_component_5;
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Field, { name: "name" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormFloatingItem, {
              label: "NAME",
              class: "mb-6"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary",
                    placeholder: "NAME"
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiInput, mergeProps(componentField, {
                      class: "placeholder:text-app-secondary",
                      placeholder: "NAME"
                    }), null, 16)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormFloatingItem, {
                label: "NAME",
                class: "mb-6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiInput, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary",
                    placeholder: "NAME"
                  }), null, 16)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Field, { name: "email" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormFloatingItem, {
              label: "EMAIL",
              class: "mb-6"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary",
                    placeholder: "EMAIL"
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiInput, mergeProps(componentField, {
                      class: "placeholder:text-app-secondary",
                      placeholder: "EMAIL"
                    }), null, 16)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormFloatingItem, {
                label: "EMAIL",
                class: "mb-6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiInput, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary",
                    placeholder: "EMAIL"
                  }), null, 16)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Field, { name: "phone" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormFloatingItem, {
              label: "PHONE",
              class: "mb-6"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary",
                    placeholder: "PHONE (OPTIONAL)"
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiInput, mergeProps(componentField, {
                      class: "placeholder:text-app-secondary",
                      placeholder: "PHONE (OPTIONAL)"
                    }), null, 16)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormFloatingItem, {
                label: "PHONE",
                class: "mb-6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiInput, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary",
                    placeholder: "PHONE (OPTIONAL)"
                  }), null, 16)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Field, { name: "inquiry" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormFloatingItem, {
              label: "INQUIRY",
              class: "mb-6"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTextarea, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary",
                    placeholder: "INQUIRY"
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTextarea, mergeProps(componentField, {
                      class: "placeholder:text-app-secondary",
                      placeholder: "INQUIRY"
                    }), null, 16)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormFloatingItem, {
                label: "INQUIRY",
                class: "mb-6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiTextarea, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary",
                    placeholder: "INQUIRY"
                  }), null, 16)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-end">`);
      _push(ssrRenderComponent(_component_UiButton, {
        type: "submit",
        class: "link-with-icon relative space-x-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-0.5 after:bg-app-secondary after:hidden after:transition-all hover:after:block items-center bg-transparent text-app-secondary hover:bg-transparent hover:text-app-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-block text-2xl font-normal leading-[100%]"${_scopeId}>Send Inquiry!</span>`);
            _push2(ssrRenderComponent(_component_IconTelegram, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "inline-block text-2xl font-normal leading-[100%]" }, "Send Inquiry!"),
              createVNode(_component_IconTelegram)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/message-form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "ContactMessageForm" });
const _imports_0 = publicAssetsURL("/images/contact-image-001.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Aysia LinggarWati - Contact",
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
    const sharedData = inject("socialMedia");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconInstagram = __nuxt_component_1$1;
      const _component_IconTiktok = __nuxt_component_1;
      const _component_IconWhatsapp = __nuxt_component_3$1;
      const _component_ContactMessageForm = __nuxt_component_4;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))}><div class="app-container"><div class="flex flex-col lg:flex-row gap-6 justify-between"><div class="lg:w-5/12"><img${ssrRenderAttr("src", _imports_0)} alt="" width="530" height="707" class="w-full h-auto object-cover object-top"></div><div class="lg:w-6/12 flex flex-col justify-center"><h1 class="mb-6 text-[4rem] font-medium leading-[100%] tracking-[0%] text-app-secondary"> Lets Connect! </h1><div class="font-sans text-sm space-y-6 font-light mb-6"><p>Reach out through my contact form below and we can start creating your vision together!</p><p>Use the tabs below to read about what it&quot;s like to shoot with me, frequently asked questions, my pricing, and more so you know what you&quot;re getting yourself into. Please don&quot;t hesitate to ask any additional questions!</p></div><ul class="flex items-center space-x-6 flex-wrap mb-6">`);
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
      _push(`<li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(sharedData)?.whatsapp?.link,
        external: "",
        target: "_blank",
        class: "link-with-icon relative space-x-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-0.5 after:bg-app-secondary after:hidden after:transition-all hover:after:block items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconWhatsapp, { fill: "#533A1B" }, null, _parent2, _scopeId));
            _push2(`<span class="inline-block text-2xl font-normal leading-[100%]"${_scopeId}>or Send me Whatsapp!</span>`);
          } else {
            return [
              createVNode(_component_IconWhatsapp, { fill: "#533A1B" }),
              createVNode("span", { class: "inline-block text-2xl font-normal leading-[100%]" }, "or Send me Whatsapp!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul>`);
      _push(ssrRenderComponent(_component_ContactMessageForm, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-DUURT7wd.mjs.map
