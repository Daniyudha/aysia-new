import { J as c, k as f, aF as g, ah as m, F as p, h as s } from "#entry";

function l(n) { return n ? n.flatMap(t => t.type === p ? l(t.children) : [t]) : []; } const C = f({ name: "PrimitiveSlot", inheritAttrs: !1, setup(n, { attrs: t, slots: r }) {
  return () => {
    if (!r.default)
      return null; const e = l(r.default()); const i = e.findIndex(d => d.type !== m); if (i === -1)
      return e; const a = e[i]; delete a.props?.ref; const u = a.props ? c(t, a.props) : t; const o = g({ ...a, props: {} }, u); return e.length === 1 ? o : (e[i] = o, e);
  };
} }); const h = ["area", "img", "input"]; const P = f({ name: "Primitive", inheritAttrs: !1, props: { asChild: { type: Boolean, default: !1 }, as: { type: [String, Object], default: "div" } }, setup(n, { attrs: t, slots: r }) { const e = n.asChild ? "template" : n.as; return typeof e == "string" && h.includes(e) ? () => s(e, t) : e !== "template" ? () => s(n.as, t, { default: r.default }) : () => s(C, t, { default: r.default }); } }); export { P, l as r, C as S };
