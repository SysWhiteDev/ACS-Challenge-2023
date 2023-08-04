<template>
  <div class="widget">
    <p class="ttitle">Tips to reduce environmental impact 💡</p>
    <div>
      <p class="cycling-text" >{{ cyclingText }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    tips: [],
    cyclingText: 'Guida a una velocità costante ed evita frenate brusche.'
  }),
  async mounted() {
    this.tips = await this.loadJSON('/tips.json');
    setInterval(() => {this.cycleText(); }, 600)
  },
  methods: {
    cycleText() {
      const currentIndex = this.tips.indexOf(this.cyclingText);
      this.cyclingText = this.tips[(currentIndex + 1) % this.tips.length];
    },
    async loadJSON(url) {
      const res = await fetch(url);
      return await res.json()
    }
  }
}


</script>

<style scoped>

.cycling-text {
  text-align: center;
  font-size: larger;
  margin-top: 30%;
  margin-bottom: 40%;
}

</style>
