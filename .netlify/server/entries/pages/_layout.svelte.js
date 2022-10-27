import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1ntspu3.svelte-1ntspu3{background:rgb(208, 244, 252)}nav.svelte-1ntspu3 div.svelte-1ntspu3{max-width:800px;padding:0 10px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;align-items:center}h1.svelte-1ntspu3.svelte-1ntspu3{padding-top:5px;font-size:1.3rem;font-weight:bold;text-transform:uppercase;color:rgb(176, 176, 176)}ul.svelte-1ntspu3.svelte-1ntspu3{padding:0;margin:0;text-align:right}li.svelte-1ntspu3.svelte-1ntspu3{display:inline-block;padding-top:5px}a.svelte-1ntspu3.svelte-1ntspu3{text-decoration:none;padding:1em 0.5em;display:block}.active.svelte-1ntspu3.svelte-1ntspu3{border-bottom:3px solid #ff3e00}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const nav = [{ title: "Home", path: "/" }];
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="${"svelte-1ntspu3"}"><div class="${"svelte-1ntspu3"}"><h1 class="${"svelte-1ntspu3"}">My Blog</h1>
        <ul class="${"svelte-1ntspu3"}">${each(nav, (item) => {
    return `<li class="${"svelte-1ntspu3"}"><a${add_attribute("href", item.path, 0)} class="${["svelte-1ntspu3", $page.url.pathname === item.path ? "active" : ""].join(" ").trim()}">${escape(item.title)}</a></li>`;
  })}</ul></div>
</nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-h2652j{max-width:800px;margin:50px auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

<div class="${"container svelte-h2652j"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
