import { I as f, r as m, S as y } from "#entry";

function p() { const u = y(); const s = f(); function n(r) { const t = u.query; const o = {}; for (const e of r)t[e] && (o[e] = t[e]); return o; } function a(r) { s.replace({ query: r }); } const c = m(() => u.query); return { getCurrentQuery: n, updateQueryParams: a, currentQueryParams: c }; } export { p as u };
