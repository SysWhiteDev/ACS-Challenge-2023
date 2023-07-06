<template>
    <div class="widget">
        <!-- <p class="wtitle">Totale ✈️</p> -->
        <div class="wcontent wcenter">
            <p style="text-align: center;">Avete emesso in totale <u>20kg di CO2</u>, per rimediare bisogna piantare circa</p>
            <p class="trees">20 <u style="color: rgb(31, 171, 57);">alberi</u></p>
        </div>
    </div>
</template>

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
</style>