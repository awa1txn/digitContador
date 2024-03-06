<script>
// @ts-nocheck

    import { Line } from 'svelte-chartjs'
    import apiClient from '$lib/apiClient';
    import { networth } from '$lib/store';

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
  labels: [],
  datasets: [
    {
      label: 'Networth graph line',
      fill: true,
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
      data: [],
    }
  ],
};

function sumNumbers(array) {
  const sumOfNumbers = array.reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'number') {
      return accumulator + currentValue;
    }
    return accumulator;
  }, 0);

  return sumOfNumbers;
}

function getTwoLatestObjects(objectsArray) {
  // Make sure the array is not empty
  if (objectsArray.length === 0) {
    return [];
  }

  // Sort the array based on the date property in descending order
  const sortedArray = objectsArray.sort((a, b) => b.id - a.id);

  // Return the first two objects (latest ones)
  return sortedArray.slice(0, 2);
}

function calculateDifference(array) {
  const sumFirst = sumNumbers(Object.values(array[0]).slice(1,4)) ;
  const sumSecond = sumNumbers(Object.values(array[1]).slice(1,4));

  return sumFirst - sumSecond;
}

function collectAllNetworths(array){
    const sortedArray = array.sort((a,b)=> b.id - a.id);
    const slicedArray = sortedArray.slice(0,5);
    let newArray = []
    slicedArray.map(el => {
        newArray.push(sumNumbers(Object.values(el).slice(1,4)))
    })
    return newArray
}

function collectAllDates(array){
    const sortedArray = array.sort((a,b)=> b.id - a.id);
    const slicedArray = sortedArray.slice(0,5);
    let newArray = []
    slicedArray.map(el => {
        newArray.push(Object.values(el).slice(4,5)[0].slice(0,10))
    })
    return newArray
}
onMount(async ()=>{
    try{
        const res = await apiClient('api/networth');
        console.log(res.data)
        networth.set(res.data)
    } catch(err) {
        console.log(err)
    }
    currentNetworth = sumNumbers(Object.values($networth.slice(-1)[0]).slice(1,4)).toFixed(2)
    // console.log(currentNetworth)
    income = calculateDifference(getTwoLatestObjects($networth));
    // console.log(income)
    data.datasets[0].data = collectAllNetworths($networth).reverse()
    data.labels = collectAllDates($networth)
})

async function lol() {
    try{
        const res =  await apiClient.post('api/networth', {cash:210.20, card: 90.59, crypto: 222.09})
        console.log(res)
    } catch (err){
        console.log(err)
    }
}

</script>


<main class="container mx-auto p-4 flex flex-col gap-10">
    <header class="bg-gray-800 text-white p-4">
        <p class="text-center text-green-500">Authorized in digitContador</p>
        <div class="w-full flex justify-center">
            <button
            on:click={lol}
            type="submit" class="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                Submit networth
            </button>
        </div>

    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <!-- Block 1 -->
        <div class="bg-purple-3 p-4 rounded-lg h-56 flex flex-col items-center justify-center">
        <h2 class="text-white text-2xl">CURRENT MONTH'S INCOME</h2>
        <h2 class="text-white text-4xl">{income>0 ? '📈':'📉'}</h2>
        <!-- svelte-ignore missing-declaration -->
        <h2 class={`text-white text-xl ${income>0 ? 'text-green-300':'text-red-300'}`}>
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