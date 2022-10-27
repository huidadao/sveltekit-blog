import { c as create_ssr_component, f as escape, d as add_attribute } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post.svelte-xd9wpt{border:1px solid #ddd;padding:15px;box-shadow:0 0 15px #eee}h3.svelte-xd9wpt{margin:0}.written.svelte-xd9wpt{text-align:right;font-size:0.9rem;color:grey;font-style:italic}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1>Post</h1>

<div class="${"post svelte-xd9wpt"}"><h3 class="${"svelte-xd9wpt"}">${escape(data.post.title)}</h3>
    <p>${escape(data.post.body)}</p>
    <p class="${"written svelte-xd9wpt"}">- Written by <a${add_attribute("href", `/authors/${data.user.id}`, 0)} data-sveltekit-prefetch>${escape(data.user.name)}</a></p>
</div>`;
});
export {
  Page as default
};
