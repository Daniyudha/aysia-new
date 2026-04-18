import { tv } from "tailwind-variants";
import { defineComponent, mergeProps, provide, renderSlot, unref, useId, useSSRContext, withCtx } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";

import { _ as _export_sfc } from "./server.mjs";
import { a as __nuxt_component_0, b as __nuxt_component_1$1, c as __nuxt_component_2, d as __nuxt_component_3, m as myInjectionKey } from "./vee-validate-zod-NJbS403e.mjs";

const FORM_ITEM_INJECTION_KEY = myInjectionKey;
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "floating-item",
  __ssrInlineRender: true,
  props: {
    class: {},
    label: {},
    description: {},
    hint: {},
    hideMessage: { type: Boolean },
  },
  setup(__props) {
    const props = __props;
    const id = useId();
    provide(FORM_ITEM_INJECTION_KEY, id);
    const styles = tv({ base: "space-y-1.5 ui-floating-item relative" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiFormControl = __nuxt_component_0;
      const _component_UiFormLabel = __nuxt_component_1$1;
      const _component_UiFormDescription = __nuxt_component_2;
      const _component_UiFormMessage = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(styles)({ class: props.class }),
      }, _ctx.$attrs, _attrs))} data-v-50b41da4>`);
      _push(ssrRenderComponent(_component_UiFormControl, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          }
          else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
            ];
          }
        }),
        _: 3,
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "label", {}, () => {
        if (__props.label || __props.hint) {
          _push(ssrRenderComponent(_component_UiFormLabel, {
            label: __props.label,
            hint: __props.hint,
            class: "opacity-0 invisible",
          }, null, _parent));
        }
        else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
        if (__props.description) {
          _push(ssrRenderComponent(_component_UiFormDescription, { description: __props.description }, null, _parent));
        }
        else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "errorMessage", {}, () => {
        if (!__props.hideMessage) {
          _push(ssrRenderComponent(_component_UiFormMessage, null, null, _parent));
        }
        else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  },
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/floating-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-50b41da4"]]), { __name: "UiFormFloatingItem" });

export { __nuxt_component_1 as _ };
// # sourceMappingURL=floating-item-BVKECQ_n.mjs.map
