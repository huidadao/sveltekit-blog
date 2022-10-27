<script>
	/** @type {import('./$types').PageData} */ 
    
    export let data;
</script>

<div class="user">
    <h3>{data.user.name}</h3>
    <ul class="info">
        <li>Contact email : {data.user.email}</li>
        <li>Phone: {data.user.phone}</li>
    </ul>
</div>

<h3>Posts by {data.user.name}</h3>
<ul>
    {#each data.posts as post}
        <li><a href={`/blog/${post.id}`} data-sveltekit-prefetch>{post.title}</a></li>
    {/each}
</ul>


<style>
    .user {
        border: 1px solid #ddd;
        padding: 15px;
        box-shadow: 0 0 15px #eee;
        margin-bottom: 3rem;
    }
    h3 {
        margin: 0;
        color: grey;
    }
    .info {
        font-size: 0.9rem;
        color: grey;
    }

    h3 {
        margin: 0;
    }
    li {
        padding: 3px;
    }
</style>