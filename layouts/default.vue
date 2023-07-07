<template>
  <div>
    <div class="navbar">
      <img :src="!isMobile ? '/icons/fullLogo.svg' : '/icons/coloredLogo.png'" alt="" class="logo" :class="{mobile: isMobile}" />
      <div class="links">
        <NuxtLink to="/" class="link emissions">
          <i class="fa-solid fa-car-side"></i>
          <p v-if="!isMobile">Emissioni</p>
        </NuxtLink>
        <NuxtLink to="/two" class="link">
          <i class="fa-solid fa-ghost"></i>
          <p v-if="!isMobile">Frontend by SysWhite</p>
        </NuxtLink>
        <NuxtLink to="/two" class="link">
          <i class="fa-solid fa-ghost"></i>
          <p v-if="!isMobile">Backend by Resonance</p>
        </NuxtLink>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
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
<style scoped>
@import url("~/assets/styles/layouts/navbar.css");
</style>
