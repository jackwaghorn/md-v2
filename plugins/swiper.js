import SwiperCore, { Pagination, Autoplay } from 'swiper'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(new SwiperCore)
})