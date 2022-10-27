<script>
    import { page } from '$app/stores'

    const nav = [
        { title: 'Home', path:'/' }
    ]
</script>

<nav>
    <div>
        <h1>My Blog</h1>
        <ul>
            {#each nav as item}
                <li><a href={item.path} class:active={$page.url.pathname === item.path}>{item.title}</a></li>
            {/each}
        </ul>
    </div>
</nav>

<style>
    nav {
        background: rgb(208, 244, 252);
    }
    nav div {
        max-width: 800px;
        padding: 0 10px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    h1 {
        padding-top: 5px;
        font-size: 1.3rem;
        font-weight: bold;
        text-transform: uppercase;
        color: rgb(176, 176, 176);
    }
    ul {
        padding: 0;
        margin: 0;
        text-align: right;
    }
    li {
        display: inline-block;
        padding-top: 5px;
    }
    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }
    .active {
        border-bottom: 3px solid #ff3e00;
    }
</style>