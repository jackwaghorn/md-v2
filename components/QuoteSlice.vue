<template>
  <div class="d-flex justify-content-center row p-0 p-sm-4 m-0">
    <div class="col-12 col-md-7 d-flex align-items-center p-3">
      <swiper
        data-aos="fade-right"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :loop="true"
        :pagination="true"
      >
        <swiper-slide
          v-for="(slide, index) in item.items"
          :key="index"
          class="row d-flex justify-content-center align-items-center m-0"
        >
          <div
            class="
              col-md-12 col-lg-10
              align-self-center
              quote-content
              my-5 my-md-5 my-lg-5
            "
          >
            <figure>
              <span class="quotation-mark-open">“</span>
              <span class="quotation-mark-close">”</span>

              <prismic-rich-text v-snip="{ lines: 9 }" :field="slide.quote" />

              <figcaption class="blockquote-footer mt-2">
                {{ slide.credited_to[0].text }}
              </figcaption>
            </figure>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div
      class="
        col-12 col-sm-8 col-md-4
        d-flex
        justify-content-center
        align-items-center
        m-0
        p-0
      "
    >
      <div
        class="
          col-12 col-md-12 col-lg-8
          d-flex
          justify-content-center
          align-items-center
          m-0
          p-0
        "
      >
        <img
          class="img-fluid m-0 p-3 p-md-0"
          :src="item.primary.image.url"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" >
.video-embed {
  display: none !important;
}
.swiper-wrapper {
  overflow: visible;
}
.swiper-container {
  top: 0;
  bottom: 0;
  height: 100%;
}
.swiper-container {
  z-index: 0;
}
.swiper-pagination-bullet {
  background-color: #000000;
}
.swiper-pagination-bullet-active {
  background-color: var(--gold);
}
.quote-content {
  position: relative;
}
.quotation-mark-open {
  color: var(--gold);
  position: absolute;
  font-size: 6em;
  top: -4rem;
  left: 5px;
  z-index: -1;
}
.quotation-mark-close {
  color: var(--gold);
  position: absolute;
  font-size: 6em;
  bottom: -4rem;
  right: 5px;
  z-index: -1;
}
</style>