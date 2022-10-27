import { c as create_ssr_component, f as escape, e as each, d as add_attribute } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".user.svelte-1aivoui{border:1px solid #ddd;padding:15px;box-shadow:0 0 15px #eee;margin-bottom:3rem}h3.svelte-1aivoui{margin:0;color:grey}.info.svelte-1aivoui{font-size:0.9rem;color:grey}h3.svelte-1aivoui{margin:0}li.svelte-1aivoui{padding:3px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"user svelte-1aivoui"}"><h3 class="${"svelte-1aivoui"}">${escape(data.user.name)}</h3>
    <ul class="${"info svelte-1aivoui"}"><li class="${"svelte-1aivoui"}">Contact email : ${escape(data.user.email)}</li>
        <li class="${"svelte-1aivoui"}">Phone: ${escape(data.user.phone)}</li></ul></div>

<h3 class="${"svelte-1aivoui"}">Posts by ${escape(data.user.name)}</h3>
<ul>${each(data.posts, (post) => {
    return `<li class="${"svelte-1aivoui"}"><a${add_attribute("href", `/blog/${post.id}`, 0)} data-sveltekit-prefetch>${escape(post.title)}</a></li>`;
  })}
</ul>`;
});
export {
  Page as default
};
