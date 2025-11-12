import { _ as __nuxt_component_1 } from './client-only-B_PoH0ma.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { j as journeyFetcher } from './journey-9vIRkXmx.mjs';
import { u as useHead } from './composables-D0i6IdhD.mjs';
import { u as useAsyncData } from './asyncData-DuMyQiaR.mjs';
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
import './constant-D5BqL6of.mjs';
import './server.mjs';
import 'vue-router';
import 'reka-ui';
import 'tailwind-variants';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const _imports_0 = publicAssetsURL("/images/horse.jpg");
const _imports_1 = publicAssetsURL("/images/mentawai.jpg");
const _imports_2 = publicAssetsURL("/images/ethiopia.jpg");
const _imports_3 = publicAssetsURL("/images/cappadocia.jpg");
const _imports_4 = publicAssetsURL("/images/lathmar-holi.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Aysia LinggarWati - Home",
      meta: [
        {
          name: "description",
          content: "Welcome to the official website of Aysia LinggarWati, where creativity meets elegance. Explore journeys through remote lands and stories told through photography."
        },
        {
          name: "keywords",
          content: "Aysia LinggarWati, travel photography, culture, exploration, remote places, portrait, documentary"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]
    });
    const { data } = useAsyncData(
      "journey-list",
      () => journeyFetcher().getAll({ limit: 10 }),
      { lazy: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-full flex-1 flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<section class="bg-[#F5F2E9] py-16"><div class="max-w-7xl mx-auto px-6 text-center"><h2 class="text-2xl md:text-3xl font-serif tracking-wide text-[#4B3B2A] mb-4"> “Through my lens, I capture the unseen rhythms of culture and connection.” </h2><p class="max-w-3xl mx-auto text-[#6B5B4B] text-base md:text-lg leading-relaxed"> A journey of timeless beauty — exploring humanity, nature, and emotion through the quiet power of imagery. </p><div class="mt-10 flex justify-center"><hr class="w-24 border-t border-[#C6B299]"></div><p class="mt-6 text-[#7A6B5A] italic text-sm"> — Aysia LinggarWati </p></div></section><section class="bg-[#EAE4D4] py-20"><div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"><img${ssrRenderAttr("src", _imports_0)} alt="Aysia LinggarWati Journey" class="w-full md:w-1/2 aspect-4/3 object-cover rounded-2xl shadow-md"><div class="md:w-1/2 text-center md:text-left"><h3 class="text-2xl md:text-3xl font-serif text-[#4B3B2A] mb-4"> About My Journey </h3><p class="text-[#6B5B4B] leading-relaxed text-base md:text-lg"> My passion for photography began with a love for remote places — the silent landscapes, the people untouched by modern rhythm, and cultures that survive against time. I travel to places most have never heard of, capturing the soul of simplicity and the stories that rarely reach the world. </p><p class="mt-6 text-[#7A6B5A] italic"> “Every journey teaches me to see, not just to look.” </p></div></div></section><section class="bg-[#F5F2E9] py-20"><div class="max-w-7xl mx-auto px-6"><h3 class="text-2xl md:text-3xl font-serif text-center text-[#4B3B2A] mb-12"> Some Places I’ve Explored </h3><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"><div class="rounded-2xl overflow-hidden shadow-md"><img${ssrRenderAttr("src", _imports_1)} alt="Mentawai, Siberut" class="w-full h-56 object-cover"><div class="p-4 text-center bg-[#EAE4D4]"><h4 class="font-serif text-[#4B3B2A]">Mentawai, Siberut</h4><p class="text-sm text-[#6B5B4B] mt-2"> Among ancestral tattoos and jungle whispers, life flows with faith and tradition. </p></div></div><div class="rounded-2xl overflow-hidden shadow-md"><img${ssrRenderAttr("src", _imports_2)} alt="Omo, Ethiopia" class="w-full h-56 object-cover"><div class="p-4 text-center bg-[#EAE4D4]"><h4 class="font-serif text-[#4B3B2A]">Omo, Ethiopia</h4><p class="text-sm text-[#6B5B4B] mt-2"> In the valley of tribes, color, spirit, and ritual merge under the African sun. </p></div></div><div class="rounded-2xl overflow-hidden shadow-md"><img${ssrRenderAttr("src", _imports_3)} alt="Cappadocia, Turki" class="w-full h-56 object-cover"><div class="p-4 text-center bg-[#EAE4D4]"><h4 class="font-serif text-[#4B3B2A]">Cappadocia, Turki</h4><p class="text-sm text-[#6B5B4B] mt-2"> Ancient stones and drifting balloons — a dream carved by wind and time. </p></div></div><div class="rounded-2xl overflow-hidden shadow-md"><img${ssrRenderAttr("src", _imports_4)} alt="Lathmar Holi, India" class="w-full h-56 object-cover"><div class="p-4 text-center bg-[#EAE4D4]"><h4 class="font-serif text-[#4B3B2A]">Lathmar Holi, India</h4><p class="text-sm text-[#6B5B4B] mt-2"> Chaos and color collide — devotion painted in the hues of joy and defiance. </p></div></div></div></div></section><section class="bg-[#EAE4D4] py-16"><div class="max-w-7xl mx-auto px-6 text-center"><p class="text-[#4B3B2A] text-lg md:text-xl italic max-w-3xl mx-auto"> “I travel not to escape life, but for life not to escape me.” </p><p class="mt-3 text-[#6B5B4B] text-sm">— Aysia LinggarWati</p></div></section></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BD57IEXr.mjs.map
