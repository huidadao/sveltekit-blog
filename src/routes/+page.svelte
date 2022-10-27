<script>
    /** @type {import('./$types').PageData} */  
    export let data;
    let searchTerm = ''
    
    // import { paginate, LightPaginationNav } from 'svelte-paginate'
    // let items = data.posts
    // let currentPage = 1
    // let pageSize = 10
    // $: paginatedItems = paginate({ items, pageSize, currentPage })

    $: searchedPosts = data.posts.filter(post => {
        return post.title.includes(searchTerm) || post.body.includes(searchTerm)
    })

</script>

<h1>Posts</h1>

<input type="text" placeholder="Search" bind:value={searchTerm} />

<div class="posts">
    {#if searchedPosts.length}
        {#each searchedPosts as post}
            <div class="post">
                <h3>{post.title.substring(0, 40)}</h3>
                <p>{post.body.substring(0, 80)}...</p>
                <p class="link"><a data-sveltekit-prefetch href={`/blog/${post.id}`}>Read More</a></p>
            </div>
        {/each}
    {:else}
        <p class="warning">No posts found with "{searchTerm}"</p>
    {/if}
</div>
<br>

<!-- <LightPaginationNav
    totalItems="{items.length}"
    pageSize="{pageSize}"
    currentPage="{currentPage}"
    limit="{1}"
    showStepOptions="{true}"
    on:setPage="{(e) => currentPage = e.detail.page}"
/> -->

<style>
    .posts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin: 30px 0;
    }
    .post {
        padding: 20px;
        border: 1px solid #ddd;
        box-shadow: 0 0 15px #eee;
    }
    h3 {
        margin: 0;
    }
    .link {
        text-align: right;
        font-size: 0.9rem;
        font-style: italic;
    }
    .link > a {
        color: grey;
        font-weight: 100;
        font-size: 13px;
    }

    @media screen and (max-width: 600px) {
        .posts {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 20px;
            margin: 30px 0;
        }
    }
</style>
