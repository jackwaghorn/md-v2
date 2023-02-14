<template>
  <div class="container-fluid p-0 position-relative">
    <!-- <Particles
      id="tsparticles"
      :options="{
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: '#e6e6e6',
          },
          rotate: {
            value: 0,
            random: true,
            direction: 'clockwise',
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 8,
          },

          shape: {
            type: ['image'],

            options: {
              image: [
                {
                  src: star,
                  width: 20,
                  height: 20,
                  particles: {
                    size: {
                      value: 6,
                    },
                  },
                },
              ],
            },
          },

          size: {
            random: true,
            value: 6,
          },
        },
        detectRetina: true,
      }"
    /> -->

    <div
      class="
        row
        g-2
        mx-0
        my-0
        mx-md-4
        d-flex
        justify-content-center
        pb-sm-4 pb-0
        position-relative
      "
    >
      <div
        class="
          mt-4 mt-md-0
          col-12 col-sm-10 col-md-7
          ps-0 ps-md-5
          m-0
          d-flex
          align-items-center
        "
      >
        <div class="row p-0 m-0">
          <div data-aos="fade" data-aos-duration="1800" class="col-12 m-0 p-0">
            <span class="sparkling text-center">
              <h2 class="display-6 title">
                Molly Dooner is a certified life coach and Tarot reader who
                specialises in transformation, empowerment and awakening
                authenticity.
                <img class="icon icon-up" src="/icons/star.svg" alt="" />
              </h2>
              <nuxt-link to="/about">
                <button
                  type="button"
                  class="btn mt-4 mb-4 btn-outline-light text-center"
                >
                  <small>FIND OUT MORE</small>
                </button></nuxt-link
              >
            </span>
          </div>
        </div>
      </div>
      <div
        data-aos="fade"
        class="
          col-12 col-sm-8 col-md-5
          row
          d-flex
          justify-content-end
          align-items-center
          p-0
          m-0
        "
      >
        <div
          class="
            m-0
            col-12 col-md-10
            p-0
            d-flex
            justify-content-end
            align-items-center
          "
        >
          <img
            class="img-fluid m-0 p-3 p-md-0 portrait-image"
            src="/images/main-portrait.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <section
      class="loop lazy position-relative"
      v-for="(item, index) in homeData"
      :key="item"
    >
      <component
        v-if="item.slice_type === 'testimonials'"
        :is="componentMapper[item.slice_type]"
        v-bind="{ item: testData, index: index }"
      ></component>
      <component
        v-else
        :is="componentMapper[item.slice_type]"
        v-bind="{ item: item, index: index }"
      ></component>
    </section>
  </div>
</template>

<script>
import TextImage from "~/components/TextImage.vue";
import ListText from "~/components/ListText.vue";
import QuoteSlice from "~/components/QuoteSlice.vue";
import CardSlice from "~/components/CardSlice.vue";
import CallToAction from "~/components/CallToAction.vue";

export default {
components: {
    TextImage,
    ListText,
    QuoteSlice,
    CardSlice,
    CallToAction
  },

  data() {
    return {
      homeData: "",
      testData: [],

      star: "/icons/star-full.svg",
      componentMapper: {
        text_box: "TextImage",
        list: "ListText",
        testimonials: "QuoteSlice",
        cards: "CardSlice",
        large_centred_text: "CallToAction",
      },
      color: "#fff",
      svgPath:
        "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .get({
          predicates: [
            this.$prismic.predicate.any("document.type", [
              "home_page",
              "testimonials",
            ]),
          ],
        })
        .then((response) => {
          this.homeData = response.results.find(
            (x) => x.type === "home_page"
          ).data.body;

          this.testData = response.results.find(
            (x) => x.type === "testimonials"
          ).data;
        });
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

  mounted() {
    this.getContent();
    this.sparkling();
  },
};
</script>


<style lang="scss" scoped>
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.star-rotating {
  -webkit-animation: rotating 12s linear infinite;
  -moz-animation: rotating 12s linear infinite;
  -ms-animation: rotating 12s linear infinite;
  -o-animation: rotating 12s linear infinite;
  animation: rotating 12s linear infinite;
  position: absolute;
  font-size: 0.8em;
  text-align: center;
  color: white;
  text-transform: uppercase;
  bottom: 2em;
  left: 0;
  width: 65px;
  z-index: 2;
  background-image: url("~/assets/icons/star-outline.svg");
  height: 65px;
  line-height: 0.9em;
}

#tsparticles {
  position: absolute;
  height: 150vh;
  top: -76px;
  width: 100vw;
}
.loop {
  z-index: 2;
}

section {
  color: white;
}

// /* 3rd */
section:nth-of-type(3n - 1) {
  background: #ebeadf;
  color: inherit;
}
// /* 2nd */
section:nth-of-type(3n) {
  // background: none;
  background: #99af9e;
}
/* 1st */
section:nth-of-type(3n-2) {
  background: rgb(248, 248, 248);
  color: inherit;
}

section:last-of-type div {
  margin-bottom: 0 !important;
}

.icon {
  width: 32px;
}

.disc {
  width: 10px;
}

.el-inline {
  display: inline;
}
.title {
  text-align: center;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 1.2em;
  font-family: "Piazzolla", serif;
  font-style: normal;
}
.sub-title {
  margin-top: 10px;
  color: white;
  margin-bottom: 30px;
}
</style>
