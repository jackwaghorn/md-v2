<template>
  <div class="list px-0 pt-5 pb-0 pb-md-5 m-0">
    <div class="row d-flex justify-content-center p-0 m-0">
      <div
        data-aos="fade"
        class="
          list-title
          col-12
          d-flex
          justify-content-center
          mb-0 mb-md-2
          pb-5
        "
      >
        <h2 v-if="isTitle" class="text-center">
          {{ item.primary.title[0].text }}
        </h2>
      </div>
      <div data-aos="fade-up" class="col-md-9 col-12 m-0 p-0 text-center">
        <prismic-rich-text
          :field="item.primary.list"
          class="mx-2 p-0 big-list"
        />
      </div>
      <div
        v-if="isButton"
        class="col-12 text-center mb-5 pb-4 pb-md-0 mt-5 mb-md-4 mt-md-5"
      >
        <nuxt-link :to="{ path: '/about', hash: '#contact' }">
          <button type="button" class="btn btn-dark">
            <small>Contact Now</small>
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
  },
  data() {
    return {
      isTitle: false,
      isButton: false,
    };
  },
  methods: {
    checkForTitle() {
      if (
        this.item.primary.title[0].text ||
        this.item.primary.title[0].text === ""
      ) {
        this.isTitle = true;
      } else {
        this.isTitle = false;
      }
    },
    checkForButton() {
      if (this.item.primary.contact_button) {
        this.isButton = true;
      } else {
        this.isButton = false;
      }
    },
  },
  created() {
    this.checkForTitle();
    this.checkForButton();
  },
};
</script>

<style >
.list h4 {
  font-family: "Piazzolla", serif;
}

.list-title {
  text-decoration: underline;
  text-decoration: underline #a77e50 !important;
}
.list li:after {
  content: ""; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  margin: 0 auto; /* This will center the border. */
  width: 100%; /* Change this to whatever width you want. */
  margin-bottom: 2em;
  padding-bottom: 2em; /* This creates the border. Replace black with whatever color you want. */
}

.list li:after {
  border-bottom: 1px solid white;
}

.list li:last-child:after {
  border-bottom: none;
}

.list ul {
  font-size: 1.25rem;
  line-height: 1.2;
  list-style: none;
}

.list ul li::before {
  content: "\2022";

  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  left: 2rem;
  position: absolute;
}
</style>
