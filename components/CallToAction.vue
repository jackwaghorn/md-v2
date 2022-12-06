<template>
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
    <div
     
      class="col-12 align-self-center mb-4 p-0"
    >
      <h2 class="text-center">{{ item.primary.call_to_action[0].text }}</h2>
    </div>
    <div  class="col-md-9 col-12 text-center mb-3 p-0">
      <nuxt-link to="/book">
        <button type="button" class="mt-3 btn btn-dark">
          <small>DISCOVER MORE</small>
        </button></nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>
<style lang="scss" scoped>


.call-to-action {
  min-height: 300px;
  // background: #ebeadf;
}

</style>