<template>
  <footer
    class="d-flex align-content-center justify-content-center flex-wrap row g-0"
  >
    <div
      class="
        col-12
        order-md-2
        col-md-4
        d-flex
        align-content-center
        justify-content-center
        text-center
        m-0
        p-0
      "
    >
      <nuxt-link
        to="/"
        tag="div"
        class="m-0 p-0 align-self-center logo-footer "
      >
        <h3 class="p-0 m-0 text-muted">Molly Dooner</h3>
        <small class="m-0 p-0 text-muted">&#xA9; {{ currentYear }}</small></nuxt-link
      >
    </div>
    <div
      class="
        col-12 col-sm-6 col-md-4
        order-md-1
        text-center
        my-3
        m-sm-0
        p-0
      "
    >
      <small>Instagram</small><br />
      <a target="_blank" href="https://www.instagram.com/mollyelizabethdooner/"
        ><small class="text-decoration-underline"
          >@mollyelizabethdooner</small
        ></a
      >
    </div>

    <div
      class="col-12 col-sm-6 order-md-3 col-md-4 text-center m-0 p-0"
    >
      <small>+447450344402</small><br />
      <small class="text-decoration-underline">mollydooner@gmail.com</small>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Piazzolla", serif;
  font-style: normal;
}

a {
  color: inherit;
}
a:hover {
  text-decoration: none !important;
}
@media only screen and (min-width: 575px) {
  footer {
    height: 140px !important;
  }
}
footer {
  margin-top: auto;
  
  background: rgb(248, 248, 248);
  // color: rgb(78, 78, 78);
  height: 300px;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(128, 128, 128, 0.09);

  box-shadow: 0px -1px 6px -1px rgba(89, 89, 89, 0.1);
  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: grey;
    }
  }
}
</style>