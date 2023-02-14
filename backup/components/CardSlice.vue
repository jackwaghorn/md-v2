<template>
  <div class="pb-4">
    <div class="row m-0 p-0 justify-content-evenly py-5">
      <div data-aos="fade" class="col-12 mb-3 text-center">
        <div class="col-12 mb-5">
          <h2 v-if="isTitle">{{ item.primary.title[0].text }}</h2>
        </div>
        <div class="col-12 row d-flex justify-content-center">
          <p class="col-12 col-md-8">
            <prismic-rich-text :field="item.primary.body_of_text" class="" />
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        class="col-12 col-md-3 d-flex justify-content-center"
      >
        <ProductCard
          num="I"
          :title="item.items[0].service_title[0].text"
          :icon="item.items[0].symbol + '.svg'"
          :description="item.items[0].description[0].text"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        class="col-12 col-md-3 d-flex justify-content-center my-5 my-md-0"
      >
        <ProductCard
          num="II"
          :title="item.items[1].service_title[0].text"
          :icon="item.items[1].symbol + '.svg'"
          :description="item.items[1].description[0].text"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        class="col-12 col-md-3 d-flex justify-content-center"
      >
        <ProductCard
          num="III"
          :title="item.items[2].service_title[0].text"
          :icon="item.items[2].symbol + '.svg'"
          :description="item.items[2].description[0].text"
        />
      </div>
      <div class="col-12 mt-5 text-center">
        <nuxt-link to="/book">
          <button type="button" class="mt-4 btn btn-dark">
            <small>Book Now</small>
          </button></nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>


export default {

  props: {
    item: Object,
    index: Number,
  },

  data() {
    return {
      isTitle: false,
    };
  },
  methods: {
    checkData() {
      if (
        this.item.primary.title[0].text ||
        this.item.primary.title[0].text === ""
      ) {
        this.isTitle = true;
      } else {
        this.isTitle = false;
      }
    },
  },
  created() {
    this.checkData();
  },
};
</script>

<style scoped>
.btn-dark {
  background: #2b2b2e;
  border: #2b2b2e;
}

h2 {
  color: #212529;
  text-decoration: underline;
  text-decoration: underline #a77e50;
}
</style>