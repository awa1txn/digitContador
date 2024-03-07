<script>
// @ts-nocheck

    import { Line } from 'svelte-chartjs'
    import apiClient from '$lib/apiClient';
    import { networth } from '$lib/store';
    import {sumNumbers, calculateDifference, getTwoLatestObjects, collectAllNetworths, collectAllDates} from '$lib/services.js'
    import Submit from '../_submit/+page.svelte'


    import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';
  import { onMount } from 'svelte';

  let currentNetworth;
  let income;
  let submitPopup = false;

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );

    let data = {
    labels: [], //labels for the bottom of graph line chart
    datasets: [
        {
        label: 'Networth graph line', //name of graph
        fill: false,
        lineTension: 0.3,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'black',
        pointBackgroundColor: 'yellow',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'orange',
        pointHoverBorderColor: '',
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [], // payload from the db that we show here after this FUNC: collectAllNetworths($networth).reverse()
        }
    ],
    };



    onMount(async ()=>{
        try{
            const res = await apiClient('api/networth');
            networth.set(res.data)
        } catch(err) {
            console.log(err)
        }
        currentNetworth = sumNumbers(Object.values($networth.slice(-1)[0]).slice(1,4)).toFixed(2)
        income = calculateDifference(getTwoLatestObjects($networth));
        data.datasets[0].data = collectAllNetworths($networth).reverse()
        data.labels = collectAllDates($networth)
    })

    async function submitNetworthPopup() {
        submitPopup = !submitPopup;
    }

</script>

{#if submitPopup}
<Submit/>
{/if}
<main class="container mx-auto p-4 flex flex-col gap-10">
    <header class="bg-gray-800 text-white p-4">
        <p class="text-center text-green-500">Authorized in digitContador</p>
        <div class="w-full flex justify-center">
                <button
                on:click={submitNetworthPopup}
                type="submit" class="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                    Submit networth
                </button>
        </div>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <!-- Block 1 -->
        <div class="bg-purple-3 p-4 rounded-lg h-56 flex flex-col items-center justify-center">
        <h2 class="text-white text-2xl text-center">CURRENT MONTH'S INCOME</h2>
        <h2 class="text-white text-4xl">{income>0 ? '📈':'📉'}</h2>
        <!-- svelte-ignore missing-declaration -->
        <h2 class={`text-xl ${income>0 ? 'text-green-300':'text-red-300'}`}>
            {income>0 ? '+':''}{income} UAH
        </h2>
        <h3>NETWORTH</h3>
        <h2 class="text-white text-xl"> {currentNetworth} UAH</h2>
        <!-- Your content for Block 1 goes here -->
        </div>
        <!-- Block 2 -->
        <div class="bg-white p-4 rounded-lg h-56 flex flex-col items-center">
        <h2 class="text-black text-xl">PROGRESS</h2>
            <Line
            class="mb-5"
            data={data}
            width={100}
            height={50}
            options={{ maintainAspectRatio: false }}
            />
        <!-- Your content for Block 2 goes here -->
        </div>
    </div>

    <!-- Block 3 at the bottom -->
    <div class="bg-purple-3 p-4 rounded-lg h-fit overflow-x-auto">
        <h2 class="text-white text-xl text-center">RAW TABLE</h2>
        <table class="w-full table-auto">
            <thead>
                <tr>
                    <th class="p-2">Cash</th>
                    <th class="p-2">Card</th>
                    <th class="p-2">Crypto</th>
                    <th class="p-2">Netowrth</th>
                </tr>
            </thead>
            <tbody>
                {#each $networth as {cash, card, crypto}}
                <tr>
                    <td class="p-2 text-center">{cash.toFixed(2)} UAH</td>
                    <td class="p-2 text-center">{card.toFixed(2)} UAH</td>
                    <td class="p-2 text-center">{crypto.toFixed(2)} UAH</td>
                    <td class="p-2 text-center">{(cash+card+crypto).toFixed(2)} UAH</td>
                </tr>
                {/each}
            </tbody>
        </table>
        
        <!-- Your content for Block 3 goes here -->
    </div>
</main>