<template>
  <div class="widget">
    <p class="ttitle">Tips to reduce environmental impact 💡</p>
    <div>
      <p class="cycling-text">{{ cyclingText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cyclingText: 'Guida a una velocità costante ed evita frenate brusche.'
    };
  },
  mounted() {
    setInterval(() => {
      this.cycleText();
    }, 6900);
  },
  methods: {
    cycleText() {
      const texts = ['Guida a una velocità costante ed evita frenate brusche.', 'Fahre mit konstanter Geschwindigkeit und vermeide abruptes Bremsen.', 'Spegni il motore quando rimani fermo per più di un minuto.', 'Schalte den Motor aus, wenn du länger als eine Minute im Leerlauf stehst.', 'Controlla regolarmente la pressione degli pneumatici.', 'Überprüfe regelmäßig den Reifendruck.', 'Pianifica gli spostamenti in modo efficiente per ridurre il chilometraggio.', 'Plane deine Fahrten effizient, um die Kilometerleistung zu minimieren.', 'Evita gli ingorghi nelle ore di punta, se possibile.', 'Vermeide den Berufsverkehr, wenn möglich.', 'Considera il carpooling o il ridesharing.', 'Erwäge Fahrgemeinschaften oder Mitfahrgelegenheiten.'];
      const currentIndex = texts.indexOf(this.cyclingText);
      this.cyclingText = texts[(currentIndex + 1) % texts.length];
    }
  }
};
</script>

<style scoped>

.cycling-text {
  text-align: center;
  font-size: larger;
  margin-top: 30%;
  margin-bottom: 40%;
}

</style>
