<script>
// @ts-nocheck

  import apiClient from '$lib/apiClient';
  import { email } from '$lib/store'
  import { onMount } from 'svelte';

  let data = {
    cash: undefined,
    card: undefined,
    crypto: undefined,
    date: '',
    email: undefined
  }
  let specifiedDate = false;
  let numValidation = false;
  const numberRegex = /^-?\d+(\.\d+)?$/;

  function toggleSpecifyDate() {
    specifiedDate = !specifiedDate;
  }

  async function submitNetworth() {
    if( numberRegex.test(data.cash) && numberRegex.test(data.crypto) && numberRegex.test(data.card)){
      if(data.date === ''){
        data.date = new Date().toISOString().slice(0,10)
      }
      const res = await apiClient.post('api/networth', {
        data
      })
      setTimeout(() => {
      window.location.reload()
      }, 300);
    }
    else{
      numValidation = true;
    }

  }

  onMount(()=>{
    data.email = $email;
  })
</script>

<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
  <!-- Popup Content -->
  <div class="bg-white p-4 shadow-md rounded-md text-black flex flex-col items-center">
    <!-- Your Popup Content Goes Here -->
    <button
    on:click={()=>{
      window.location.reload()
    }}
    >↻</button>
    <p>NETWORTH</p>
    <div class="my-4">Want specify date?</div>
    <input 
    on:change={toggleSpecifyDate}
    type="checkbox" class="mb-7 rounded-md p-2 border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">
    {#if specifiedDate}
    <div class="my-2">Specified date</div>
    <input 
    on:change={(event)=>{
      data.date = event.target.value;
      numValidation = false;
    }}
    type="date" class="rounded-md p-2 border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">
    {/if}
    <div class="my-2">Cash</div>
    <input
    on:change={(event)=>{
      data.cash = event.target.value;
      numValidation = false;
    }}
    type="text" class="rounded-md p-2 border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">
    <div class="my2">Card</div>
    <input 
    on:change={(event)=>{
      data.card = event.target.value;
      numValidation = false;
    }}
    type="text" class="rounded-md p-2 border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">
    <div class="my2">Crypto</div>
    <input
    on:change={(event)=>{
      data.crypto = event.target.value;
      numValidation = false;
    }}
    type="text" class="rounded-md p-2 border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">
    
    {#if numValidation}
    <div class="text-red-400">
      something wrong with your inputs
    </div>
    {/if}    


    <button 
    on:click={submitNetworth}
    class=" mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md border border-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300">
      SUBMIT
    </button>    
  </div>
</div>
