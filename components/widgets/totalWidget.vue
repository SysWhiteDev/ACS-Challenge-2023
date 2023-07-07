<template>
  <div class="widget">
    <!-- <p class="wtitle">Totale ✈️</p> -->
    <div class="wcontent wcenter">
      <p style="text-align: center">
        Avete emesso in totale <u>{{ monthValue }}kg di CO2</u> questo mese, per
        rimediare bisogna piantare circa
      </p>
      <p class="trees">
        {{ trees.toFixed(2) }} <u style="color: rgb(31, 171, 57)">alberi</u>
      </p>
      <div class="treeIcons">
        <div v-for="index in Math.ceil(trees)" :key="index">
          <p>🌳</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monthValue: 20,
      trees: 0,
    };
  },
  mounted() {
    this.calculateTrees();
    this.loaded = true;
  },
  methods: {
    calculateTrees() {
      this.trees = this.monthValue / 1.8;
    },
  },
};
</script>

<style scoped>
.wcontent {
  flex-direction: column;
  border: none;
  height: 100%;
}
.trees {
  font-size: clamp(50px, 4vw, 60px);
  text-align: center;
}

.divider {
  color: rgba(0, 0, 0, 0.403);
}

/* tree icons */
.treeIcons {
    display: flex;
    margin-top: 25px;
}
.treeIcons > * {
    font-size: 1.5vw;
}
</style>
