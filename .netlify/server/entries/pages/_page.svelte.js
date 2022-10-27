import { c as create_ssr_component, d as add_attribute, e as each, f as escape } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posts.svelte-1aa74hz.svelte-1aa74hz{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;margin:30px 0}.post.svelte-1aa74hz.svelte-1aa74hz{padding:20px;border:1px solid #ddd;box-shadow:0 0 15px #eee}h3.svelte-1aa74hz.svelte-1aa74hz{margin:0}.link.svelte-1aa74hz.svelte-1aa74hz{text-align:right;font-size:0.9rem;font-style:italic}.link.svelte-1aa74hz>a.svelte-1aa74hz{color:grey;font-weight:100;font-size:13px}@media screen and (max-width: 600px){.posts.svelte-1aa74hz.svelte-1aa74hz{display:grid;grid-template-columns:1fr;grid-gap:20px;margin:30px 0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchedPosts;
  let { data } = $$props;
  let searchTerm = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  searchedPosts = data.posts.filter((post) => {
    return post.title.includes(searchTerm) || post.body.includes(searchTerm);
  });
  return `<h1>Posts</h1>

<input type="${"text"}" placeholder="${"Search"}"${add_attribute("value", searchTerm, 0)}>

<div class="${"posts svelte-1aa74hz"}">${searchedPosts.length ? `${each(searchedPosts, (post) => {
    return `<div class="${"post svelte-1aa74hz"}"><h3 class="${"svelte-1aa74hz"}">${escape(post.title.substring(0, 40))}</h3>
                <p>${escape(post.body.substring(0, 80))}...</p>
                <p class="${"link svelte-1aa74hz"}"><a data-sveltekit-prefetch${add_attribute("href", `/blog/${post.id}`, 0)} class="${"svelte-1aa74hz"}">Read More</a></p>
            </div>`;
  })}` : `<p class="${"warning"}">No posts found with &quot;${escape(searchTerm)}&quot;</p>`}</div>
<br>

`;
});
export {
  Page as default
};
