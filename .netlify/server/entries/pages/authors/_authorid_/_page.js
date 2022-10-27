async function load({ fetch, params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.authorid}?_embed=posts`);
  const user = await res.json();
  const posts = user.posts;
  return {
    user,
    posts
  };
}
export {
  load
};
