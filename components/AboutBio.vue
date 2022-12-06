<template>
  <section class="white pt-5">
    <div class="row mx-md-4 mx-sm-3 mx-0 d-flex justify-content-center pb-0">
      <div class="col-12">
        <h2 v-if="isTitle" class="pb-5">
          {{ item.primary.title[0].text }}
          <img class="icon icon-up" src="/icons/star.svg" alt="" />
        </h2>
      </div>
      <div
        data-aos="fade"
        class="
          col-12 col-md-12 col-lg-10
          gx-5
          row
          d-flex
          justify-content-center justify-content-md-between
          bio
          pb-md-5 pb-0
          px-0
          poop
        "
      >
        <div class="col-sm-7 col-12 col-md-4 p-0 d-flex justify-content-center order-2 order-sm-1">
          <div class="col-12 col-md-10">
          <img class="img-fluid p-3 p-md-0" :src="item.primary.image.url" alt="" /></div>
        </div>
        <div class="col-12 col-md-8 mb-3 mb-md-0 px-1 px-md-3 d-flex justify-content-center row order-1 order-sm-2">
          <div class="col-12 col-md-11">
          <p>
            <prismic-rich-text
              :field="item.primary.text_box"
              class="px-2 px-sm-0"
            />
          </p>
          </div>
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

<style lang="scss" scoped>
h2 {
  // text-decoration: underline;
  // text-decoration: underline var(--gold);
  text-align: center;
}
section {
  color: inherit;
  background: rgb(248, 248, 248);
}

// .poop:first-child {
//   border-bottom: black 1px solid;
// }

.icon {
  width: 32px;
  filter: invert(90%);
}
.icon-up {
  transform: translateY(-7px);
}
</style>