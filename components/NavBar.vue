<template>
  <div>
    <!-- DESKTOP -->

    <nav id="navbar" class="navbar-desktop">
      <!-- Pop up download banner  -->
      <div
        v-if="showBanner"
        class="
          pop-up-banner
          d-flex
          justify-content-center
          align-items-center
          p-2
        "
      >
        <span class="pop-up-download"
          ><a target="_blank" :href="bannerItem">{{ bannerText }}</a></span
        >
        <span class="close-button" @click="showBanner = false">X</span>
      </div>

      <!-- Navbar -->
      <div
        class="
          nav-container
          px-2 px-md-4
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <div style="width: 40px" class="d-block d-md-none p-2"></div>
        <div class="logo m-0 d-flex align-items-center">
          <nuxt-link to="/"
            ><h3 id="logo" class="m-0">Molly Dooner</h3></nuxt-link
          >
        </div>

        <MenuButton
          @click="expand = !expand"
          :expandMenu="expand"
          class="d-block d-md-none mob-button"
        />

        <div class="d-none d-md-block d-flex align-items-center">
          <div class="row d-flex align-items-center">
            <nuxt-link tag="div" class="col" to="/about"
              ><small class="link">About</small></nuxt-link
            >
            <nuxt-link tag="div" class="col" to="/shop"
              ><small class="link">Shop</small></nuxt-link
            >

            <nuxt-link tag="div" class="col d-lg-block d-none" to="/book"
              ><small class="link">Work With Me</small></nuxt-link
            >
            <nuxt-link tag="div" class="col d-block d-lg-none" to="/book"
              ><small class="link">Book</small></nuxt-link
            >

            <nuxt-link tag="div" class="col" to="/testimonials"
              ><small class="link">Testimonials</small></nuxt-link
            >

            <div class="col-auto">
              <a
                target="_blank"
                href="https://www.instagram.com/mollyelizabethdooner/"
              >
                <img
                  class="insta-logo"
                  src="/images/instagram.svg"
                  alt=""
              /></a>
            </div>
            <div class="col-auto">
              <img
                class="shopping-cart snipcart-checkout"
                src="/images/cart.svg"
                alt=""
              />
            </div>
            <nuxt-link
              tag="div"
              class="contact-link col"
              :to="{ path: '/about', hash: '#contact' }"
            >
              <button type="button" class="btn contact-link btn-dark">
                <small>Contact</small>
              </button></nuxt-link
            >
          </div>
        </div>
      </div>
    </nav>

    <!-- MOBILE -->

    <transition name="slide">
      <div
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
        v-if="expand"
        class="navbar-mobile d-flex flex-column justify-content-center"
      >
        <nuxt-link tag="div" class="my-2" to="/about"><h2>About</h2></nuxt-link>
        <nuxt-link tag="div" class="my-2" to="/shop"><h2>Shop</h2></nuxt-link>
        <nuxt-link tag="div" class="my-2" to="/book"
          ><h2>Work With Me</h2></nuxt-link
        >

        <nuxt-link tag="div" class="my-2" to="/testimonials"
          ><h2>Testimonials</h2></nuxt-link
        >
        <div class="my-2">
          <img
            style="width: 28px"
            class="snipcart-checkout"
            src="/images/cart.svg"
            alt=""
          />
        </div>
        <div class="mt-4">
          <a
            target="_blank"
            href="https://www.instagram.com/mollyelizabethdooner/"
          >
            <img style="width: 30px" src="/images/instagram.svg" alt=""
          /></a>
        </div>

        <nuxt-link
          tag="div"
          class="contact-link contact-mobile my-4"
          :to="{ path: '/about', hash: '#contact' }"
        >
          <button type="button" class="btn contact-link btn-dark">
            <small>Contact</small>
          </button></nuxt-link
        >
      </div>
    </transition>
    <transition name="fade">
      <div v-if="expand" class="mobile-background"></div
    ></transition>
    <div :class="[showBanner ? 'fake-nav-big' : 'fake-nav-small']"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerText: [],
      showBanner: false,
      expand: false,
      profileMenu: false,
      onHome: true,
    };
  },

  methods: {
    getBanner() {
      this.$prismic.client.getSingle("pop_up_banner").then((response) => {
        this.bannerText = response.data.text[0].text;
        this.bannerItem = response.data.item.url;
        this.showBanner = response.data.show_banner;
      });
    },
    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },
    moveNav() {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos || window.scrollY == 0) {
          document.getElementById("navbar").style.top = "0";

          document.getElementById("navbar").style.background =
            "rgba(248, 248, 248, 1)";
          document.getElementById("navbar").style.boxShadow =
            "0px 1px 6px -1px rgba(89,89,89,0.16)";
        } else {
          document.getElementById("navbar").style.top = "-126px";
          document.getElementById("navbar").style.boxShadow =
            "0px 1px 6px -1px rgba(89,89,89,0.0)";
        }
        prevScrollpos = currentScrollPos;

        if (currentScrollPos <= 0 || window.scrollY == 0) {
          document.getElementById("navbar").style.background =
            "rgba(248, 248, 248, 0)";
          document.getElementById("navbar").style.boxShadow =
            "0px 1px 6px -1px rgba(89,89,89,0.0)";
        }
      };
    },
  },

  mounted() {
    this.moveNav();
  },
  created() {
    this.getBanner();
  },
  watch: {
    $route() {
      this.expand = false;
      this.profileMenu = false;
      if (this.$route.name === "Home") {
        this.onHome = true;
      } else {
        this.onHome = false;
      }
    },
    expand() {
      if (this.expand) {
        document.getElementById("navbar").style.boxShadow =
          "0px 1px 6px -1px rgba(89,89,89,0.0)";
      } else {
        document.getElementById("navbar").style.boxShadow =
          "0px 1px 6px -1px rgba(89,89,89,0.16)";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.fake-nav-big {
  width: 100vw;
  height: 126px;
}
.fake-nav-small {
  width: 100vw;
  height: 76px;
}
.close-button {
  position: absolute;
  right: 1em;
}
.nav-container {
  height: 76px;
}
.pop-up-banner {
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  left: 0;
  right: 0;
  top: 0;
  background: #ebeadf;
}

.pop-up-banner:hover {
  cursor: pointer;
}
.pop-up-download {
  text-decoration: none;
}
.pop-up-download:hover {
  text-decoration: underline;
}
.mob-button {
  z-index: 3;
}
.contact-mobile {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
h2 {
  font-family: "Work Sans", sans-serif;
  font-style: inherit;
}

.mobile-background {
  position: fixed;
  background: rgb(248, 248, 248);

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
}
.insta-logo {
  width: 18px;
  transform: translateY(-1px);
}
.shopping-cart {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
}
.shopping-cart:hover {
  cursor: pointer;
}

.logo {
  left: 0;
  font-family: "Piazzolla", serif;
}

.link {
  white-space: nowrap;
  text-transform: uppercase !important;
}
.link:hover {
  border-bottom: black 1px solid;
  color: rgb(22, 22, 22);
}

.router-link-active .link {
  border-bottom: black 1px solid;
  color: rgb(22, 22, 22);
}

.contact-link {
  text-transform: uppercase !important;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s ease-in;
}

.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(25px);
}

.slide-enter-active {
  transition: all 0.3s ease-in;
}

.slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

#navbar {
  width: 100%;
  z-index: 5;
  position: fixed;
  transition: all 0.3s;
  font-weight: 500;
}

.navbar-mobile {
  text-align: center;
  z-index: 4;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }
}

#navbar a {
  text-decoration: none;
  color: black;
}
.page-buttons a:hover {
  cursor: pointer;
  text-decoration: underline;
}
.page-buttons .router-link-active {
  color: rgba(109, 109, 109, 0.432);
}
</style>