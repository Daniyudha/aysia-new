import { f as defineNuxtRouteMiddleware, c as useAuthCookie, n as navigateTo } from './server.mjs';
import 'vue';
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
import 'reka-ui';
import 'tailwind-variants';
import 'vue/server-renderer';

const dashboard = defineNuxtRouteMiddleware(async () => {
  const { accessToken } = useAuthCookie();
  if (!accessToken.value)
    return navigateTo({ name: "login" });
});

export { dashboard as default };
//# sourceMappingURL=dashboard-D4hVnsRr.mjs.map
