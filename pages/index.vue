<template>
  <div v-if="!isMobile">
    <p class="title">Emissioni auto aziendali 🚗</p>
    <div class="row row2">
      <totalWidget></totalWidget> <tipsWidget></tipsWidget>
    </div>
    <div class="row"><annualTrendWidget></annualTrendWidget></div>
    <div class="row row2">
      <leaderboardWidget></leaderboardWidget>
      <leaderboardWidget type="mensile"></leaderboardWidget>
    </div>
  </div>
  <!-- mobile layout -->
  <div v-else>
    <p class="title">Emissioni auto aziendali 🚗</p>
    <totalWidget />
    <tipsWidget />
    <annualTrendWidget />
    <leaderboardWidget />
    <leaderboardWidget type="mensile" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      const mediaQuery = window.matchMedia("(max-aspect-ratio: 4/3)");
      this.isMobile = mediaQuery.matches;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  },
};
</script>
