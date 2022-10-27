<script>
    import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>

<p>{$page.error.message}</p>


<style>
    h1 {
        font-size: 4rem;
        font-weight: bold;
        color: orangered;
    }
    p {
        font-size: 1rem;
        font-weight: bold;
    }
</style>