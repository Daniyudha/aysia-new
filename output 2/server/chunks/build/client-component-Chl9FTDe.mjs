import { a as __nuxt_component_16 } from './server.mjs';
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

// @__NO_SIDE_EFFECTS__
async function createClientPage(loader) {
  const m = await loader();
  m.default || m;
  return pageToClientOnly();
}
function pageToClientOnly(component) {
  {
    return __nuxt_component_16;
  }
}

export { createClientPage };
//# sourceMappingURL=client-component-Chl9FTDe.mjs.map
