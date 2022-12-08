
export default defineNuxtConfig({
    css: ['~/assets/style/bootstrap.min.css'],
    modules: ['@nuxtjs/prismic', '@nuxt/image-edge'],
    prismic: { endpoint: 'mollyelizabeth' },
    plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" },
    { src: "@/plugins/snipcart", ssr: false, mode: "client" }],

   
})
