<script>
    import '../app.css'
    import Nav from '../lib/Nav.svelte'
</script>

<Nav />

<div class="container">
    <slot />
</div>

<style>
    .container {
        max-width: 800px;
        margin: 50px auto;
    }
</style>