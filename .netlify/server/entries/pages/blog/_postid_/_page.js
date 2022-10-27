async function load({ fetch, params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}?_expand=user`);
  const post = await res.json();
  const user = post.user;
  return {
    post,
    user
  };
}
export {
  load
};
