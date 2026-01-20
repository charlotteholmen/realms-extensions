<script>
  import { Chart } from 'flowbite-svelte';
  import { _ } from 'svelte-i18n';
  
  export let data = [];
  
  // Group data by type for better visualization
  $: groupedData = [
    {
      name: $_('extensions.metrics.citizens'),
      data: data.filter(item => item.type === 'citizen').map(item => ({
        x: item.name,
        y: item.contribution
      }))
    },
    {
      name: $_('extensions.metrics.organizations'), 
      data: data.filter(item => item.type === 'organization').map(item => ({
        x: item.name,
        y: item.contribution
      }))
    }
  ];
</script>

<div class="bg-white rounded-lg p-6 border border-gray-200">
  <h4 class="font-semibold text-gray-700 mb-4 flex items-center">
    🌳 <span class="ml-2">{$_('extensions.metrics.tax_contribution_analysis')}</span>
  </h4>
  <Chart options={{
    chart: {
      type: 'treemap',
      height: 400,
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: false }
    },
    series: groupedData,
    colors: ['#1E40AF', '#3B82F6'],
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            { from: 0, to: 10000, color: '#DBEAFE' },
            { from: 10001, to: 20000, color: '#93C5FD' },
            { from: 20001, to: 30000, color: '#3B82F6' },
            { from: 30001, to: 50000, color: '#1E40AF' }
          ]
        }
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '12px',
      labels: {
        colors: '#4B5563'
      }
    },
    tooltip: {
      y: {
        formatter: (value) => `${value.toLocaleString()} ckBTC`
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        colors: ['#FFFFFF']
      },
      formatter: (text, op) => {
        return [text, `${op.value.toLocaleString()} ckBTC`];
      }
    },
    responsive: [{
      breakpoint: 640,
      options: {
        chart: {
          height: 300
        }
      }
    }]
  }} />
</div>
