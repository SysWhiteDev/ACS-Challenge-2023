<template>
  <div>
    <div class="navbar">
      <img src="~/assets/icons/fullLogo.svg" alt="" class="logo" />
      <div class="links">
        <NuxtLink to="/" class="link emissions">
          <i class="fa-solid fa-car-side"></i>
          <p>Emissioni</p>
        </NuxtLink>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/styles/layouts/navbar.css");
</style>
