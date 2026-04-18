import { g as E } from "./JbuyFoEc.js";

const _ = "menu.itemSelect"; const a = ["Enter", " "]; const l = ["ArrowDown", "PageUp", "Home"]; const T = ["ArrowUp", "PageDown", "End"]; const m = [...l, ...T]; [...a], [...a]; function x(n) { return n ? "open" : "closed"; } function P(n) {
  const t = E(); for (const e of n) {
    if (e === t || (e.focus(), E() !== t))
      return;
  }
} function A(n, t) { const { x: e, y: r } = n; let o = !1; for (let s = 0, c = t.length - 1; s < t.length; c = s++) { const f = t[s].x; const i = t[s].y; const S = t[c].x; const u = t[c].y; i > r != u > r && e < (S - f) * (r - i) / (u - i) + f && (o = !o); } return o; } function w(n, t) {
  if (!t)
    return !1; const e = { x: n.clientX, y: n.clientY }; return A(e, t);
} function Y(n) { return n.pointerType === "mouse"; } export { Y as a, m as F, P as f, x as g, _ as I, w as i, T as L, a as S };
