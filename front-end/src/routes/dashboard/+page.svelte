<script>
// @ts-nocheck

    import { Line } from 'svelte-chartjs'
    import apiClient from '$lib/apiClient';

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

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );

    const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
      data: [12124, 25412, 32141, 11124, 36422, 39222, 40124],
    }
  ],
};

onMount(async ()=>{
    try{
        const res = await apiClient('owner');
        console.log(res)
    }
    catch(e){
        console.log(e)
    }
})
</script>


<main class="container mx-auto p-4 flex flex-col gap-10">
    <header class="bg-gray-800 text-white p-4">
        <p class="text-center text-green-500">Authorized in digitContador</p>
        <div class="w-full flex justify-center">
            <button
             type="submit" class="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                Submit networth
            </button>
        </div>

    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <!-- Block 1 -->
        <div class="bg-purple-3 p-4 rounded-lg h-56 flex flex-col items-center justify-center">
        <h2 class="text-white text-2xl">CURRENT MONTH'S INCOME</h2>
        <h2 class="text-white text-xl">📈 📉</h2>
        <h2 class="text-white text-xl text-green-400">+293 UAH</h2>
        <h2 class="text-white text-xl">45000 UAH</h2>
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
        <h2 class="text-white text-xl">RAW TABLE</h2>
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
                <tr>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                </tr>
                <tr>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                </tr>
                <tr>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                </tr>
                <tr>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                    <td class="p-2 text-center">293 UAH</td>
                </tr>
            </tbody>
        </table>
        
        <!-- Your content for Block 3 goes here -->
    </div>
</main>