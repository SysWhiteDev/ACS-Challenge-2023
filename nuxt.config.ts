// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  components: [
    { path: "~/components/widgets", extensions: ["vue"] },
  ],
  app: {
    head: {
      title: "ACS Dashboard",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
    },
  },
});
