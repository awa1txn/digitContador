<script>
    import "../app.css"
    import Auth from  "./auth/+page.svelte"

    let authStage = false;

    import { invalidateAll } from '$app/navigation';
    import { initialize } from 'svelte-google-auth/client';
    import { email } from '$lib/index.js'

    export let data;
    initialize(data, invalidateAll);

    email.set(data.auth.user.email)

    let responseData = '';

    const fetchData = async () => {
    try {

        const response = await fetch('http://localhost:4000/owner');
        const data = await response.json();
        responseData = data;

        email.subscribe((value)=>{
        // @ts-ignore
            if(responseData.owner !== value){
            authStage = !authStage
            } 
        })

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };

    fetchData()
</script>

<div class="h-svh bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-100">
    {#if authStage}
    <Auth/>
    {/if}

</div>
