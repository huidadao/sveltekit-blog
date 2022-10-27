<script>
	/** @type {import('./$types').PageData} */  
    export let data;
</script>

<h1>Post</h1>

<div class="post">
    <h3>{data.post.title}</h3>
    <p>{data.post.body}</p>
    <p class="written">
        - Written by <a href={`/authors/${data.user.id}`} data-sveltekit-prefetch>{data.user.name}</a>
    </p>
</div>


<style>
    .post {
        border: 1px solid #ddd;
        padding: 15px;
        box-shadow: 0 0 15px #eee;
    }
    h3 {
        margin: 0;
    }
    .written {
        text-align: right;
        font-size: 0.9rem;
        color: grey;
        font-style: italic;
    }
    
</style>