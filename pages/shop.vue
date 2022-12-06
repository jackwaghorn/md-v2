<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row d-flex justify-content-center m-0">
        <div
          class="col-12 d-flex justify-content-center quote-block row m-0 p-0"
        >
          <!-- Items -->
          <div
            class="
              mt-5
              pt-3
              col-12 col-md-9
              pb-5
              p-0
              row
              item
              d-flex
              justify-content-between
              align-items-start
            "
            v-for="(item, index) in shopItems"
            :key="index"
          >
            <ShopVideoItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopItems: [],
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.predicate.at("document.type", "shop_item"))
        .then((response) => {
          this.shopItems = response.results;

          this.initSnipcart();
        });
    },

    initSnipcart() {
      document.addEventListener("snipcart.ready", () => {
        window.Snipcart.events.on("cart.confirmed", () => {
          console.log("confirmed");
        });
      });
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
.item:not(:last-child) {
  border-bottom: #ebeadf 1px solid;
}

.container-fluid {
  min-height: 100vh;
  background: rgb(248, 248, 248);
}

.sand {
  background: #ebeadf;
}
</style>