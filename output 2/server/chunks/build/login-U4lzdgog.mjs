import { _ as __nuxt_component_0, a as __nuxt_component_1$1, b as __nuxt_component_2, c as __nuxt_component_0$1 } from './card-BC35WKp2.mjs';
import { u as useForm, t as toTypedSchema, F as Field, _ as __nuxt_component_5 } from './vee-validate-zod-NJbS403e.mjs';
import { _ as __nuxt_component_1 } from './floating-item-BVKECQ_n.mjs';
import __nuxt_component_0$2 from './index-C2n46nfI.mjs';
import { _ as __nuxt_component_0$3 } from './button-BrROYuAJ.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, ref, computed, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { z } from 'zod';
import { d as useRouter, b as useNuxtApp, c as useAuthCookie } from './server.mjs';
import { A as API_URL_LIST } from './constant-D5BqL6of.mjs';
import { u as useAuthUser } from './useAuthUser-DPFWfSbR.mjs';
import { t as toast } from './index-DJGQOf1Z.mjs';
import { u as useHead } from './composables-D0i6IdhD.mjs';
import 'reka-ui';
import 'tailwind-variants';
import './client-only-B_PoH0ma.mjs';
import './asyncData-DuMyQiaR.mjs';
import 'perfect-debounce';
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
import './index-BAtNd0PJ.mjs';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

function authRepository(fetch) {
  return {
    async login(payload) {
      return fetch(API_URL_LIST.LOGIN, {
        method: "POST",
        body: JSON.stringify(payload)
      });
    }
  };
}
function useAuth() {
  const { $api } = useNuxtApp();
  const authUser = useAuthUser();
  const { setToken, userAuthName } = useAuthCookie();
  const authRepo = authRepository($api);
  async function login(loginPayload) {
    authUser.value = {
      loading: true,
      error: false,
      auth: null
    };
    try {
      const response = await authRepo.login(loginPayload);
      if (response?.token && response?.user) {
        setToken(response.token);
        authUser.value.auth = response;
        userAuthName.value = { name: response?.user?.name ?? "", role: response?.user?.role ?? "" };
      }
      return response;
    } catch (error) {
      authUser.value.error = true;
      toast.error(error?.response?._data?.message || "Error.");
      throw error;
    } finally {
      authUser.value.loading = false;
    }
  }
  return { login, authUser };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "login-form",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { login, authUser } = useAuth();
    const { handleSubmit, isFieldValid, resetForm } = useForm({
      validationSchema: toTypedSchema(
        z.object({
          email: z.string("Email is required").min(1, "Email is required"),
          password: z.string("Password is required").min(1, "Password is required")
        })
      )
    });
    const showPassword = ref(false);
    const isValidForm = computed(() => {
      return isFieldValid("email") && isFieldValid("password");
    });
    handleSubmit((values) => {
      login(values).then(() => {
        resetForm();
        router.push("/dashboard");
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Field = Field;
      const _component_UiFormFloatingItem = __nuxt_component_1;
      const _component_UiInput = __nuxt_component_5;
      const _component_Icon = __nuxt_component_0$2;
      const _component_UiButton = __nuxt_component_0$3;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "px-6" }, _attrs))}>`);
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
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_component_Field, { name: "password" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormFloatingItem, {
              label: "PASSWORD",
              class: "mb-6"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiInput, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary pr-10",
                    placeholder: "PASSWORD",
                    type: unref(showPassword) ? "text" : "password"
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiInput, mergeProps(componentField, {
                      class: "placeholder:text-app-secondary pr-10",
                      placeholder: "PASSWORD",
                      type: unref(showPassword) ? "text" : "password"
                    }), null, 16, ["type"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<button type="button" class="absolute right-3 top-2.5 z-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: unref(showPassword) ? "lucide:eye-off" : "lucide:eye"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode(_component_UiFormFloatingItem, {
                label: "PASSWORD",
                class: "mb-6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiInput, mergeProps(componentField, {
                    class: "placeholder:text-app-secondary pr-10",
                    placeholder: "PASSWORD",
                    type: unref(showPassword) ? "text" : "password"
                  }), null, 16, ["type"])
                ]),
                _: 2
              }, 1024),
              createVNode("button", {
                type: "button",
                class: "absolute right-3 top-2.5 z-10",
                onClick: ($event) => showPassword.value = !unref(showPassword)
              }, [
                createVNode(_component_Icon, {
                  name: unref(showPassword) ? "lucide:eye-off" : "lucide:eye"
                }, null, 8, ["name"])
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        type: "submit",
        class: "w-full bg-app-secondary hover:bg-app-secondary/90 cursor-pointer disabled:opacity-60",
        disabled: !unref(isValidForm) || unref(authUser)?.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SIGN IN `);
          } else {
            return [
              createTextVNode(" SIGN IN ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/login-form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "AuthLoginForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Aysia LinggarWati - Login",
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = __nuxt_component_0;
      const _component_UiCardHeader = __nuxt_component_1$1;
      const _component_UiCardDescription = __nuxt_component_2;
      const _component_UiCardContent = __nuxt_component_0$1;
      const _component_AuthLoginForm = __nuxt_component_4;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "text-app-secondary py-8 border-app-secondary border" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "text-center pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-3xl font-medium"${_scopeId2}> Welcome Back! </h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-3xl font-medium" }, " Welcome Back! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardDescription, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-lg"${_scopeId2}> Log in to access your dashboard and take control. </p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-lg" }, " Log in to access your dashboard and take control. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AuthLoginForm, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AuthLoginForm)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "text-center pb-2" }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-3xl font-medium" }, " Welcome Back! ")
                ]),
                _: 1
              }),
              createVNode(_component_UiCardDescription, { class: "text-center" }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-lg" }, " Log in to access your dashboard and take control. ")
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_AuthLoginForm)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-U4lzdgog.mjs.map
