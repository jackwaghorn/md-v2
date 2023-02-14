<template>
  <nuxt-link to="/book">
    <div
      class="
        tarot-card
        text-center
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <div
        class="
          card-outline
          d-flex
          justify-content-center
          flex-wrap
          position-relative
        "
      >
        <div class="align-self-start col-12">
          <p class="real-num col-12 text-center mb-0 p-0">{{ num }}</p>
          <div
            class="
              card-book
              p-0
              d-flex
              align-items-center
              justify-content-center
            "
          >
            {{ title }}
          </div>
        </div>

        <img
          class="icon-card  align-self-center"
          :src="`/icons/${icon}`"
          alt=""
        />

        <div class="number text-center p-1  align-self-end d-flex align-items-center">
          <small class="">{{ description }}</small>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    num: String,
    icon: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped >

.icon-card {
  width: 45px;
  filter: invert(90%);
}
.number {
  margin: 0;
  width: 100%;
    font-size:0.85rem;
    min-height:165px;



}
.card-book {
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  min-height: 45px;
  font-family: "Piazzolla", serif;
  font-weight: 700;

}
.real-num {
  height: 22px;

}
a {
  color: #212529 !important;
  text-decoration: none;
}

.tarot-card {
  background: #ebeadf;
  border-radius: 10px;
  height: 350px;
  width: 230px;
 
      box-shadow: rgba(22, 45, 61, 0.6) 0px 5px 15px;
  transition: all 0.35s ease;
}
.tarot-card:hover {
  transform: translateY(-15px);
}

.card-outline {
  height: 330px;
  width: 210px;
  outline: 1px #212529 solid;

  background-image: url("~/assets/icons/grid.svg");
  background-repeat: no-repeat;
}
</style>