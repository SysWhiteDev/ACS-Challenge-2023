<template>
  <div class="widget">
    <div class="wtitle">
      <p>Trend annuale 📈</p>
      <div class="typeButtons">
        <div @click="changeType('line')" class="typeButton" :class="{active: chartType == 'line'}">
          <i class="fa-solid fa-chart-line"></i>
          Linee
        </div>
        <p style="margin-right: 5px; margin-left: 5px; color: rgba(0, 0, 0, 0.05);">|</p>
        <div @click="changeType('bar')" class="typeButton" :class="{active: chartType == 'bar'}">
          <i class="fa-solid fa-chart-simple"></i>
          Barre
        </div>
      </div>
    </div>
    <div class="wcontent">
      <Bar
        :data="chartData"
        :options="chartOptions"
        v-if="chartType == 'bar'"
      />
      <Line
        :data="chartData"
        :options="chartOptions"
        v-else-if="chartType == 'line'"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      chartType: "line",
    };
  },
  methods: {
    changeType(type: string) {
      this.chartType = type;
    },
  },
};
</script>

<script setup lang="ts">
import { Bar, Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const chartData = ref({
  labels: [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ],
  datasets: [
    {
      label: "Emissioni totali",
      backgroundColor: "#0066cc",
      data: [135.72, 212.48, 189.26, 127.91, 154.33, 231.14, 205.87, 141.69, 119.55, 172.97, 218.06, 183.83],
      pointRadius: 8,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y + "kg";
          }
          return label;
        },
      },
      titleFont: {
        family: "Poppins",
      },
      bodyFont: {
        family: "Poppins",
      },
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        skipNull: true,
        callback: function (value: any) {
          return value + "kg";
        },
        font: {
          family: "Poppins",
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        skipNull: true,
        font: {
          family: "Poppins",
        },
      },
    },
  },
});
</script>

<style scoped>
.wtitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.wcontent {
  padding-bottom: 10px;
}
/* type buttons */
.typeButtons {
  display: flex;
  align-items: center;
}

.typeButton {
  cursor: pointer;
  color: var(--color-4);
  transition: all 0.1s;
}
.typeButton > * {
  color: var(--color-4);
  transition: all 0.1s;
}

.typeButton.active {
  color: var(--color-1)
}

.typeButton.active > * {
  color: var(--color-1)
}
</style>
