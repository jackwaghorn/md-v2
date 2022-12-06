<template>
  <div class="row p-0 p-sm-4 m-0 d-flex justify-content-center">
    <div class="col-12">
      <h2 v-if="isTitle" class="text-center my-5 my-md-4">
        {{ item.primary.title[0].text }}
      </h2>
    </div>

    <div
      data-aos="fade-in"
      class="col-12 col-md-8 d-flex align-items-center order-md-2 my-0 mb-md-0 mb-4 my-md-3"
    >
      <div class="row justify-content-center m-0  mx-md-0 p-0">
        <div class="col-lg-10 col-md-12 col-12">
          <prismic-rich-text :field="item.primary.body_of_text" class="" />
        
        </div>
      </div>
    </div>
   <div class="col-12 text-center order-md-3 mb-5 mt-2 mb-md-5 mt-md-4">
           <nuxt-link to="/book">
          <button type="button" class="btn btn-dark">
            <small>Book Now</small>
          </button></nuxt-link
        ></div>

    <div
      class="
        col-12 col-sm-8 col-md-3
        order-md-1
        d-flex
        justify-content-center
        align-items-center
        m-0 p-0
      "
    >
      <div
        class="col-12 col-md-12 col-lg-8 d-flex m-0 p-0 justify-content-center align-items-center"
      >
        <img  data-aos="fade-in" class="img-fluid m-0 p-3 p-md-0" :src="item.primary.image.url" alt="" />
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "TextImage",
  props: {
    item: Object,
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
     sparkling() {
      let sparklingElement = document.getElementsByClassName("sparkling")[0];

      let stars = sparklingElement.getElementsByClassName("star");

      // remove the first star when more than 6 stars existing
      if (stars.length > 5) {
        Array.prototype.forEach.call(stars, function (el, index) {
          if (index === 0) {
            el.remove();
          }
        });
      }
      // add a new star
      sparklingElement.append(this.addStar());

      let rand = Math.round(Math.random() * 1500) + 100;

      setTimeout(this.sparkling, rand);
    },
    addStar() {
      let size = Math.floor(Math.random() * 20) + 10;
      let top = Math.floor(Math.random() * 100);
      let left = Math.floor(Math.random() * 100);
      var p = document.createElement("span");
      p.classList.add("star");
      p.style.top = top + "%";
      p.style.left = left + "%";

      p.innerHTML =
        '<svg width="' +
        size +
        '" height="' +
        size +
        '" viewBox="0 0 68 68" fill="none">' +
        '<path d="' +
        this.svgPath +
        '" fill="' +
        this.color +
        '" /></svg>';
      return p;
    },
  },
  created() {
    this.checkData();
  },
};
</script>

<style scoped>
/* .btn-dark {
  background: #2b2b2e;
  border: #2b2b2e;
} */
h2 {
  text-decoration: underline !important;
  text-decoration: underline #a77e50 !important;
}
</style>