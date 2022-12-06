<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row d-flex justify-content-center m-0">
        <section
          class="col-12 d-flex justify-content-center quote-block row m-0 p-0"
        >
          <div
            class="
              col-12
              py-5
              test-title
              px-2
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <h2 class="text-center">
              <prismic-rich-text :field="testimonialsTitle" />
            </h2>
          </div>
          <div class="col-12 col-md-9 px-4">
            <section
              class="loop lazy p-0 quote"
              v-for="(item, index) in quoteData"
              :key="item"
            >
              <component
                :is="componentMapper[item.slice_type]"
                v-bind="{ item: item, index: index }"
              ></component>
            </section>
          </div>
        </section>

        <section class="loop lazy p-0">
          <div
            class="
              row
              d-flex
              justify-content-center
              align-items-center
              flex-column
              py-4
              px-3
              m-0
              call-to-action
            "
          >
            <div data-aos="fade" class="col-12 align-self-center mb-4 p-0">
              <h2 class="text-center call-to-action-title">
                Ready for empowered action and change? Book a free discovery
                call now
              </h2>
            </div>
            <div data-aos="fade" class="col-md-9 col-12 text-center mb-3 p-0">
              <nuxt-link to="/book">
                <button type="button" class="mt-3 btn btn-dark">
                  <small>DISCOVER MORE</small>
                </button></nuxt-link
              >
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import TestimonialQuotes from "~/components/TestimonialQuotes.vue";
import VideoTestimonial from "~/components/VideoTestimonial.vue";

export default {
  components: {
    TestimonialQuotes,
    VideoTestimonial,
  },
  

  data() {
    return {
      quoteData: "",
      callToActionData: [],
      testimonialsTitle: [],
      title: "",
      componentMapper: {
        text_testimonial: "TestimonialQuotes",
        video_testimonial: "VideoTestimonial"
      },
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle("testimonials").then((response) => {
        this.quoteData = response.data.body;
    
        this.testimonialsTitle = response.data.homepage_title;
      });
    },
    checkIndex(e) {
      if (e % 2 === 0) {
        return true;
      } else {
        return false;
      }
    },
  },

  mounted() {
    this.getContent();
  },
};
</script>

<style scoped>
.call-to-action-title {
  text-decoration: none;
}
h2 {
  color: #212529;
  text-decoration: underline #a77e50;
}
.quote:not(:last-child) {
  border-bottom: #ebeadf 1px solid;
}
figure {
  position: relative;
}

.container-fluid {
  min-height: 100vh;
  background: rgb(248, 248, 248);
}

.sand {
  background: #ebeadf;
}
.call-to-action {
  min-height: 300px;
}
</style>