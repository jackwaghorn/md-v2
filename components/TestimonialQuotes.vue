<template>
  <div data-aos="fade" class="col-12 pt-5 pb-5 mt-5 white">
    <div
      :class="[
        checkIndex(index) ? 'justify-content-start' : 'justify-content-end',
      ]"
      class="row d-flex m-0 p-0"
    >
      <div class="col-12 col-md-12 col-lg-7 p-0">
        <figure class="mb-0">
          <p>
            <span class="quotation-mark-open">“</span>
            <span class="quotation-mark-close">”</span>
            <prismic-rich-text :field="item.primary.quote" class="" />
          </p>

          <figcaption class="blockquote-footer mb-0 mt-1">
            {{ item.primary.credit }}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 
  props: {
    item: Object,
    index: Number
  },
  methods: {
    checkIndex(e) {
      if (e % 2 === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
/* .test-title {
  background: #ebeadf;
} */

.quotation-mark-open {
  color: var(--gold);
  position: absolute;
  font-size: 6em;
  top: -5rem;
  left: -5px;
  z-index: -1;
}
.quotation-mark-close {
  color: var(--gold);
  position: absolute;
  font-size: 6em;
  bottom: -5rem;
  right: 0px;
  z-index: -1;
}

figure {
  position: relative;
}


section {
  color: #302721;
  background: transparent;
}
</style>