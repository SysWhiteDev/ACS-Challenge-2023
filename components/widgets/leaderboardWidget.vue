<template>
  <div class="widget">
    <p class="wtitle">Classifica {{ type }} 🏆</p>
    <div class="wcontent">
      <div class="person">
        <div class="left">
          <p class="rank">#1</p>
          <p class="name">SysWhite</p>
          <p class="plate">AA000AA</p>
        </div>
        <div class="right">
          <p class="value">12kg di CO2</p>
        </div>
      </div>
      <div class="person">
        <div class="left">
          <p class="rank">#2</p>
          <p class="name">resonanceee</p>
          <p class="plate">AA001AA</p>
        </div>
        <div class="right">
          <p class="value">13kg di CO2</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "annuale",
    },
  },
};
</script>

<style scoped>
* {
  color: var(--color-1);
}
.wcontent {
  overflow-y: auto;
}

/* person formatting */
.person {
  width: 100%;
  border-top: rgba(0, 0, 0, 0.1) 1px solid;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.person:first-child {
  border-top: none;
}

.person:last-child {
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
}

/* person content */
.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
}
/* rank formatting */
.rank {
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  margin-right: 15px;
}

.name {
  width: auto;
  margin-right: 5px;
}
.plate {
  width: 90px;
  background: #c0ce54;
  background: radial-gradient(at left top, #c0ce54, #dc18fa);
  text-align: center;
  color: white;
  border-radius: 7px;
}
</style>
