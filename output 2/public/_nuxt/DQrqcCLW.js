import { ac as f, P as p, e as r } from "#entry";

const c = "$s"; function l(...t) {
  const a = typeof t[t.length - 1] == "string" ? t.pop() : void 0; typeof t[0] != "string" && t.unshift(a); const [n, e] = t; if (!n || typeof n != "string")
    throw new TypeError(`[nuxt] [useState] key must be a string: ${n}`); if (e !== void 0 && typeof e != "function")
    throw new Error(`[nuxt] [useState] init must be a function: ${e}`); const i = c + n; const s = r(); const u = f(s.payload.state, i); if (u.value === void 0 && e) {
    const o = e(); if (p(o))
      return s.payload.state[i] = o, o; u.value = o;
  } return u;
} function h() { return l("auth", () => ({ loading: !1, error: !1, auth: null })); } export { h as u };
