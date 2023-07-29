<template>
  <div class="widget">
    <p class="ttitle">Here are some tips to reduce environmental impact 💡</p>
    <div class="wcontent" :class="{ wcenter: loading }">
      <div v-if="loading">
        <i class="fa-solid fa-circle-notch loading"></i>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
};
</script>
<style scoped>
@import url("~/assets/styles/utils/loading.css");
.trees {
  font-size: 60px;
}

.divider {
  color: rgba(0, 0, 0, 0.403);
}
</style>
