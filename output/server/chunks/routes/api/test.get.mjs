import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

const test_get = defineEventHandler(async (event) => {
  return { message: "Test server route working" };
});

export { test_get as default };
//# sourceMappingURL=test.get.mjs.map
