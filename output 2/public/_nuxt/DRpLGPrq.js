import { e as r } from "#entry";

import { A as e } from "./CqgSUnqe.js";

function a(t) { return { async getAll() { return t(e.SOCIAL_MEDIA, { method: "get" }); }, async update(o) { return t(e.SOCIAL_MEDIA, { method: "put", body: JSON.stringify(o) }); } }; } function s() { const { $api: t } = r(); return a(t); } export { s };
