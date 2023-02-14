<template>
  <section class="white py-4 py-md-5">
    <div class="row mx-md-4 mx-3 d-flex justify-content-center  pb-0">
      <div
        data-aos="fade"
        class="
              col-12 col-md-12 col-lg-9
          
          row
          d-flex
          justify-content-center justify-content-md-between
          bio
        
          pb-0
          pb-md-5
          px-0
  

        "
      >
      <div v-if="isTitle" class="col-12 text-center  mb-md-5 mb-0 pt-3 pt-md-0">
        <h2><prismic-rich-text :field="item.primary.title" class="" /></h2>
      </div>
        <div class="col-12 col-md-8 py-5 py-md-0 p-2 p-md-0">
          <prismic-rich-text :field="item.primary.text" class="" />
        </div>
       
          <div class="col-9 col-sm-7 col-md-4 p-0 ">
            <img
              class="img-fluid certificate ps-0 ps-md-3"
              :src="item.primary.image.url"
              alt=""
            />
       
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
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
  },
  created() {
    this.checkData();
  },
};
</script>

<style scoped>
h2 {
  text-decoration: underline;
  text-decoration: underline #a77e50;
  text-align:center;
}
/* .certificate {

  padding-left:2em;

} */
section {
  color: inherit;
  background: #ebeadf;
}
</style>