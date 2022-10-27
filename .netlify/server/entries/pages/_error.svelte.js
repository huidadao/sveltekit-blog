import { c as create_ssr_component, b as subscribe, f as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-vml2nu{font-size:4rem;font-weight:bold;color:orangered}p.svelte-vml2nu{font-size:1rem;font-weight:bold}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<h1 class="${"svelte-vml2nu"}">${escape($page.status)}</h1>

<p class="${"svelte-vml2nu"}">${escape($page.error.message)}</p>`;
});
export {
  Error as default
};
