<script>
    import { signOut } from 'svelte-google-auth/client';
    import {dressCodeDenials, getRandomElementFromArray} from '$lib/memeSentences.js'

    let guardIsSaying = getRandomElementFromArray(dressCodeDenials)
</script>

<div class="flex flex-col h-full items-center">
    <img class="w-1/6 mt-10 max-sm:w-4/12" src="/security.png" alt="">

    <div class="my-10">
        {guardIsSaying}
    </div>
    <div class="my-4 w-48 text-center">
        In short terms our security saying that you are not the <u>owner</u> of this app, that's why you are not supposed to be here. Be kind enough to leave this page.
    </div>

    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded dark:bg-red-800 dark:hover:bg-red-900" on:click={() => { signOut(); setTimeout(() => {window.location.reload()}, 100);}}>Sign Out</button>
</div>
