import { y as C, a4 as ce, h as de, v as E, Q as fe, w as G, k as I, aB as ie, g as j, M as K, N as le, aD as me, aa as N, m as O, aA as oe, x as P, o as q, a3 as re, a7 as T, aC as ue, l as ve, r as w, R as X, E as x, V as Y } from "#entry";

import { r as De, P as Z } from "./BZvuqtaq.js"; import { z as $, v as _, A as be, e as Ee, C as ge, g as he, a as J, D as Oe, i as pe, b as Q, B as we, y as ye } from "./DsbOJOyN.js";

function A() {
  let e = document.activeElement; if (e == null)
    return null; for (;e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null;)e = e.shadowRoot.activeElement; return e;
} function ee(e, t, n) { const s = n.originalEvent.target; const i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n }); t && s.addEventListener(e, t, { once: !0 }), s.dispatchEvent(i); } const [Se] = re("ConfigProvider"); const Ae = pe(() => {
  const e = E(new Map()); const t = E(); const n = w(() => {
    for (const d of e.value.values()) {
      if (d)
        return !0;
    } return !1;
  }); const s = Se({ scrollBody: E(!0) }); let i = null; const o = () => { document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", $ && i?.(), t.value = void 0; }; return C(n, (d, f) => {
    if (!_)
      return; if (!d) { f && o(); return; }t.value === void 0 && (t.value = document.body.style.overflow); const v = window.innerWidth - document.documentElement.clientWidth; const m = { padding: v, margin: 0 }; const a = s.scrollBody?.value ? typeof s.scrollBody.value == "object" ? oe({ padding: s.scrollBody.value.padding === !0 ? v : s.scrollBody.value.padding, margin: s.scrollBody.value.margin === !0 ? v : s.scrollBody.value.margin }, m) : m : { padding: 0, margin: 0 }; v > 0 && (document.body.style.paddingRight = typeof a.padding == "number" ? `${a.padding}px` : String(a.padding), document.body.style.marginRight = typeof a.margin == "number" ? `${a.margin}px` : String(a.margin), document.documentElement.style.setProperty("--scrollbar-width", `${v}px`), document.body.style.overflow = "hidden"), $ && (i = he(document, "touchmove", r => Pe(r), { passive: !1 })), P(() => { document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden"; });
  }, { immediate: !0, flush: "sync" }), e;
}); function Je(e) { const t = Math.random().toString(36).substring(2, 7); const n = Ae(); n.value.set(t, e ?? !1); const s = w({ get: () => n.value.get(t) ?? !1, set: i => n.value.set(t, i) }); return ye(() => { n.value.delete(t); }), s; } function te(e) {
  const t = window.getComputedStyle(e); if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0; { const n = e.parentNode; return !(n instanceof Element) || n.tagName === "BODY" ? !1 : te(n); }
} function Pe(e) { const t = e || window.event; const n = t.target; return n instanceof Element && te(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1); } function Te(e) { const t = j(); const n = t?.type.emits; const s = {}; return n?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), n?.forEach((i) => { s[ie(ue(i))] = (...o) => e(i, ...o); }), s; } function Ze(e, t) { const n = Ee(e); const s = t ? Te(t) : {}; return w(() => ({ ...n.value, ...s })); } let Ce = function (e) {
  if (typeof document > "u")
    return null; let t = Array.isArray(e) ? e[0] : e; return t.ownerDocument.body;
}; let S = new WeakMap(); let F = new WeakMap(); let L = {}; let W = 0; let ne = function (e) { return e && (e.host || ne(e.parentNode)); }; let Ne = function (e, t) {
  return t.map((n) => {
    if (e.contains(n))
      return n; let s = ne(n); return s && e.contains(s) ? s : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter((n) => { return !!n; });
}; let _e = function (e, t, n, s) {
  let i = Ne(t, Array.isArray(e) ? e : [e]); L[n] || (L[n] = new WeakMap()); let o = L[n]; let d = []; let f = new Set(); let v = new Set(i); let m = function (r) { !r || f.has(r) || (f.add(r), m(r.parentNode)); }; i.forEach(m); let a = function (r) {
    !r || v.has(r) || Array.prototype.forEach.call(r.children, (c) => {
      if (f.has(c)) {
        a(c);
      }
      else {
        try { let h = c.getAttribute(s); let u = h !== null && h !== "false"; let p = (S.get(c) || 0) + 1; let l = (o.get(c) || 0) + 1; S.set(c, p), o.set(c, l), d.push(c), p === 1 && u && F.set(c, !0), l === 1 && c.setAttribute(n, "true"), u || c.setAttribute(s, "true"); }
        catch (y) { console.error("aria-hidden: cannot operate on ", c, y); }
      }
    });
  }; return a(t), f.clear(), W++, function () { d.forEach((r) => { let c = S.get(r) - 1; let h = o.get(r) - 1; S.set(r, c), o.set(r, h), c || (F.has(r) || r.removeAttribute(s), F.delete(r)), h || r.removeAttribute(n); }), W--, W || (S = new WeakMap(), S = new WeakMap(), F = new WeakMap(), L = {}); };
}; let Fe = function (e, t, n) { n === void 0 && (n = "data-aria-hidden"); let s = Array.from(Array.isArray(e) ? e : [e]); let i = Ce(e); return i ? (s.push.apply(s, Array.from(i.querySelectorAll("[aria-live], script"))), _e(s, i, n, "aria-hidden")) : function () { return null; }; }; function et(e) { let t; C(() => Q(e), (n) => { n ? t = Fe(n) : t && t(); }), Y(() => { t && t(); }); } function tt(e, t = "reka") { return `${t}-${le?.()}`; } function Le(e, t) { const n = E(e); function s(o) { return t[n.value][o] ?? n.value; } return { state: n, dispatch: (o) => { n.value = s(o); } }; } function Me(e, t) { const n = E({}); const s = E("none"); const i = E(e); const o = e.value ? "mounted" : "unmounted"; let d; const f = t.value?.ownerDocument.defaultView ?? be; const { state: v, dispatch: m } = Le(o, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }); const a = (l) => { if (_) { const y = new CustomEvent(l, { bubbles: !1, cancelable: !1 }); t.value?.dispatchEvent(y); } }; C(e, async (l, y) => { const k = y !== l; if (await P(), k) { const B = s.value; const D = M(t.value); l ? (m("MOUNT"), a("enter"), D === "none" && a("after-enter")) : D === "none" || D === "undefined" || n.value?.display === "none" ? (m("UNMOUNT"), a("leave"), a("after-leave")) : y && B !== D ? (m("ANIMATION_OUT"), a("leave")) : (m("UNMOUNT"), a("after-leave")); } }, { immediate: !0 }); const r = (l) => { const y = M(t.value); const k = y.includes(CSS.escape(l.animationName)); const B = v.value === "mounted" ? "enter" : "leave"; if (l.target === t.value && k && (a(`after-${B}`), m("ANIMATION_END"), !i.value)) { const D = t.value.style.animationFillMode; t.value.style.animationFillMode = "forwards", d = f?.setTimeout(() => { t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = D); }); }l.target === t.value && y === "none" && m("ANIMATION_END"); }; const c = (l) => { l.target === t.value && (s.value = M(t.value)); }; const h = C(t, (l, y) => { l ? (n.value = getComputedStyle(l), l.addEventListener("animationstart", c), l.addEventListener("animationcancel", r), l.addEventListener("animationend", r)) : (m("ANIMATION_END"), d !== void 0 && f?.clearTimeout(d), y?.removeEventListener("animationstart", c), y?.removeEventListener("animationcancel", r), y?.removeEventListener("animationend", r)); }, { immediate: !0 }); const u = C(v, () => { const l = M(t.value); s.value = v.value === "mounted" ? l : "none"; }); return Y(() => { h(), u(); }), { isPresent: w(() => ["mounted", "unmountSuspended"].includes(v.value)) }; } function M(e) { return e && getComputedStyle(e).animationName || "none"; } let nt = I({ name: "Presence", props: { present: { type: Boolean, required: !0 }, forceMount: { type: Boolean } }, slots: {}, setup(e, { slots: t, expose: n }) {
  const { present: s, forceMount: i } = ce(e); const o = E(); const { isPresent: d } = Me(s, o); n({ present: d }); let f = t.default({ present: d.value }); f = De(f || []); const v = j(); if (f && f?.length > 1) {
    const m = v?.parent?.type.name ? `<${v.parent.type.name} />` : "component"; throw new Error([`Detected an invalid children for \`${m}\` for  \`Presence\` component.`, "", "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.", "You can apply a few solutions:", ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map(a => `  - ${a}`).join(`
`)].join(`
`));
  } return () => i.value || s.value || d.value ? de(t.default({ present: d.value })[0], { ref: (m) => { const a = Q(m); return typeof a?.hasAttribute > "u" || (a?.hasAttribute("data-reka-popper-content-wrapper") ? o.value = a.firstElementChild : o.value = a), a; } }) : null;
} }); const Ie = "dismissableLayer.pointerDownOutside"; const ke = "dismissableLayer.focusOutside"; function se(e, t) { const n = t.closest("[data-dismissable-layer]"); const s = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"); const i = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]")); return !!(n && (s === n || i.indexOf(s) < i.indexOf(n))); } function Be(e, t, n = !0) {
  const s = t?.value?.ownerDocument ?? globalThis?.document; const i = E(!1); const o = E(() => {}); return T((d) => {
    if (!_ || !N(n))
      return; const f = async (m) => {
      const a = m.target; if (!(!t?.value || !a)) {
        if (se(t.value, a)) { i.value = !1; return; } if (m.target && !i.value) { let c = function () { ee(Ie, e, r); }; const r = { originalEvent: m }; m.pointerType === "touch" ? (s.removeEventListener("click", o.value), o.value = c, s.addEventListener("click", o.value, { once: !0 })) : c(); }
        else {
          s.removeEventListener("click", o.value);
        }i.value = !1;
      }
    }; const v = window.setTimeout(() => { s.addEventListener("pointerdown", f); }, 0); d(() => { window.clearTimeout(v), s.removeEventListener("pointerdown", f), s.removeEventListener("click", o.value); });
  }), { onPointerDownCapture: () => { N(n) && (i.value = !0); } };
} function We(e, t, n = !0) {
  const s = t?.value?.ownerDocument ?? globalThis?.document; const i = E(!1); return T((o) => {
    if (!_ || !N(n))
      return; const d = async (f) => {
      if (!t?.value)
        return; await P(), await P(); const v = f.target; !t.value || !v || se(t.value, v) || f.target && !i.value && ee(ke, e, { originalEvent: f });
    }; s.addEventListener("focusin", d), o(() => s.removeEventListener("focusin", d));
  }), { onFocusCapture: () => { N(n) && (i.value = !0); }, onBlurCapture: () => { N(n) && (i.value = !1); } };
} const b = X({ layersRoot: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }); let Ue = I({ __name: "DismissableLayer", props: { disableOutsidePointerEvents: { type: Boolean, required: !1, default: !1 }, asChild: { type: Boolean, required: !1 }, as: { type: null, required: !1 } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"], setup(e, { emit: t }) { const n = e; const s = t; const { forwardRef: i, currentElement: o } = J(); const d = w(() => o.value?.ownerDocument ?? globalThis.document); const f = w(() => b.layersRoot); const v = w(() => o.value ? Array.from(f.value).indexOf(o.value) : -1); const m = w(() => b.layersWithOutsidePointerEventsDisabled.size > 0); const a = w(() => { const u = Array.from(f.value); const [p] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1); const l = u.indexOf(p); return v.value >= l; }); const r = Be(async (u) => { const p = [...b.branches].some(l => l?.contains(u.target)); !a.value || p || (s("pointerDownOutside", u), s("interactOutside", u), await P(), u.defaultPrevented || s("dismiss")); }, o); const c = We((u) => { [...b.branches].some(l => l?.contains(u.target)) || (s("focusOutside", u), s("interactOutside", u), u.defaultPrevented || s("dismiss")); }, o); we("Escape", (u) => { v.value === f.value.size - 1 && (s("escapeKeyDown", u), u.defaultPrevented || s("dismiss")); }); let h; return T((u) => { o.value && (n.disableOutsidePointerEvents && (b.layersWithOutsidePointerEventsDisabled.size === 0 && (h = d.value.body.style.pointerEvents, d.value.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(o.value)), f.value.add(o.value), u(() => { n.disableOutsidePointerEvents && b.layersWithOutsidePointerEventsDisabled.size === 1 && (d.value.body.style.pointerEvents = h); })); }), T((u) => { u(() => { o.value && (f.value.delete(o.value), b.layersWithOutsidePointerEventsDisabled.delete(o.value)); }); }), (u, p) => (q(), x(O(Z), { "ref": O(i), "as-child": u.asChild, "as": u.as, "data-dismissable-layer": "", "style": fe({ pointerEvents: m.value ? a.value ? "auto" : "none" : void 0 }), "onFocusCapture": O(c).onFocusCapture, "onBlurCapture": O(c).onBlurCapture, "onPointerdownCapture": O(r).onPointerDownCapture }, { default: G(() => [K(u.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"])); } }); let st = Ue; const Re = ge(() => E([])); function xe() { const e = Re(); return { add(t) { const n = e.value[0]; t !== n && n?.pause(), e.value = H(e.value, t), e.value.unshift(t); }, remove(t) { e.value = H(e.value, t), e.value[0]?.resume(); } }; } function H(e, t) { const n = [...e]; const s = n.indexOf(t); return s !== -1 && n.splice(s, 1), n; } function qe(e) { return e.filter(t => t.tagName !== "A"); } const U = "focusScope.autoFocusOnMount"; const R = "focusScope.autoFocusOnUnmount"; const z = { bubbles: !1, cancelable: !0 }; function Ke(e, { select: t = !1 } = {}) {
  const n = A(); for (const s of e) {
    if (g(s, { select: t }), A() !== n)
      return !0;
  }
} function $e(e) { const t = ae(e); const n = V(t, e); const s = V(t.reverse(), e); return [n, s]; } function ae(e) { const t = []; const n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (s) => { const i = s.tagName === "INPUT" && s.type === "hidden"; return s.disabled || s.hidden || i ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP; } }); for (;n.nextNode();)t.push(n.currentNode); return t; } function V(e, t) {
  for (const n of e) {
    if (!He(n, { upTo: t }))
      return n;
  }
} function He(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0; for (;e;) {
    if (t !== void 0 && e === t)
      return !1; if (getComputedStyle(e).display === "none")
      return !0; e = e.parentElement;
  } return !1;
} function ze(e) { return e instanceof HTMLInputElement && "select" in e; } function g(e, { select: t = !1 } = {}) { if (e && e.focus) { const n = A(); e.focus({ preventScroll: !0 }), e !== n && ze(e) && t && e.select(); } } let Ve = I({ __name: "FocusScope", props: { loop: { type: Boolean, required: !1, default: !1 }, trapped: { type: Boolean, required: !1, default: !1 }, asChild: { type: Boolean, required: !1 }, as: { type: null, required: !1 } }, emits: ["mountAutoFocus", "unmountAutoFocus"], setup(e, { emit: t }) {
  const n = e; const s = t; const { currentRef: i, currentElement: o } = J(); const d = E(null); const f = xe(); const v = X({ paused: !1, pause() { this.paused = !0; }, resume() { this.paused = !1; } }); T((a) => {
    if (!_)
      return; const r = o.value; if (!n.trapped)
      return; function c(l) {
      if (v.paused || !r)
        return; const y = l.target; r.contains(y) ? d.value = y : g(d.value, { select: !0 });
    } function h(l) {
      if (v.paused || !r)
        return; const y = l.relatedTarget; y !== null && (r.contains(y) || g(d.value, { select: !0 }));
    } function u(l) { r.contains(d.value) || g(r); }document.addEventListener("focusin", c), document.addEventListener("focusout", h); const p = new MutationObserver(u); r && p.observe(r, { childList: !0, subtree: !0 }), a(() => { document.removeEventListener("focusin", c), document.removeEventListener("focusout", h), p.disconnect(); });
  }), T(async (a) => {
    const r = o.value; if (await P(), !r)
      return; f.add(v); const c = A(); if (!r.contains(c)) { const u = new CustomEvent(U, z); r.addEventListener(U, p => s("mountAutoFocus", p)), r.dispatchEvent(u), u.defaultPrevented || (Ke(qe(ae(r)), { select: !0 }), A() === c && g(r)); }a(() => { r.removeEventListener(U, l => s("mountAutoFocus", l)); const u = new CustomEvent(R, z); const p = (l) => { s("unmountAutoFocus", l); }; r.addEventListener(R, p), r.dispatchEvent(u), setTimeout(() => { u.defaultPrevented || g(c ?? document.body, { select: !0 }), r.removeEventListener(R, p), f.remove(v); }, 0); });
  }); function m(a) {
    if (!n.loop && !n.trapped || v.paused)
      return; const r = a.key === "Tab" && !a.altKey && !a.ctrlKey && !a.metaKey; const c = A(); if (r && c) { const h = a.currentTarget; const [u, p] = $e(h); u && p ? !a.shiftKey && c === p ? (a.preventDefault(), n.loop && g(u, { select: !0 })) : a.shiftKey && c === u && (a.preventDefault(), n.loop && g(p, { select: !0 })) : c === h && a.preventDefault(); }
  } return (a, r) => (q(), x(O(Z), { "ref_key": "currentRef", "ref": i, "tabindex": "-1", "as-child": a.asChild, "as": a.as, "onKeydown": m }, { default: G(() => [K(a.$slots, "default")]), _: 3 }, 8, ["as-child", "as"]));
} }); let at = Ve; let je = I({ __name: "Teleport", props: { to: { type: null, required: !1, default: "body" }, disabled: { type: Boolean, required: !1 }, defer: { type: Boolean, required: !1 }, forceMount: { type: Boolean, required: !1 } }, setup(e) { const t = Oe(); return (n, s) => O(t) || n.forceMount ? (q(), x(me, { key: 0, to: n.to, disabled: n.disabled, defer: n.defer }, [K(n.$slots, "default")], 8, ["to", "disabled", "defer"])) : ve("v-if", !0); } }); let rt = je; export { Je as a, et as b, Ze as c, st as D, Te as d, at as F, A as g, ee as h, Se as i, nt as P, rt as T, tt as u };
