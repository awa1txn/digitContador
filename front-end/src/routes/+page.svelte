<script>
    import "../app.css"
    import Auth from  "./auth/+page.svelte"
    import Dashboard from './dashboard/+page.svelte'
    import { invalidateAll } from '$app/navigation';
    import { initialize } from 'svelte-google-auth/client';
    import { authStage, email, authSuccess } from '$lib/store.js'
    import { pageProtection } from '$lib/auth.js'
    import { onMount } from "svelte";
    export let data;
    // @ts-ignore
    initialize(data, invalidateAll);
    email.set(data.auth.user.email)

    onMount(()=>pageProtection())
</script>

<div class="h-svh bg-gray-900 text-white dark:bg-purple-4 dark:text-gray-100">
    {#if $authStage}
    <Auth/>
    {/if}
    {#if $authSuccess}
    <Dashboard/>
    {/if}
</div>
