<template>
  <div class="d-flex justify-content-center row p-0 p-sm-4 m-0">
    <div class="col-12 col-md-7 d-flex align-items-center p-3">
      <swiper
        data-aos="fade-right"
        :autoplay="autoplay"
        :loop="true"
        :pagination="true"
      >
        <swiper-slide
          v-for="(slide, index) in quotesOnly"
          :key="index"
          class="row d-flex justify-content-center align-items-center m-0"
        >
          <div
            class="
              col-md-12 col-lg-10
              align-self-center
              quote-content
              my-5 my-md-3 my-lg-5
            "
          >
            <figure>
              <span class="quotation-mark-open">“</span>
              <span class="quotation-mark-close">”</span>
              <p v-snip="{ lines: 10 }">
                <prismic-rich-text :field="slide.primary.quote" class="" />
              </p>
              <figcaption class="blockquote-footer mt-2">
                {{ slide.primary.credit }}
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
          :src="item.homepage_image.url"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "QuoteSlice",
  props: {
    item: Object,
  },
  data() {
    return {
      autoplay: {
        delay: 8000,
        disableOnInteraction: true,
      },
    };
  },
  computed: {
    quotesOnly() {
      const quotes = this.item.body.filter((item) => {
        return !item.primary.video_embed;
      });
      return quotes;
    },
  },
};
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