<template>
  <section class="px-0 py-4 pink">
    <div
      data-aos="fade"
      ref="contact"
      id="contact"
      class="row d-flex justify-content-center m-0"
    >
      <div class="col-12 pb-3">
        <h2 class="text-center">{{ item.primary.title[0].text }}</h2>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 row contact-info text-center">
          <div class="col-12">
            <img
              class="contact-icon"
              src="/icons/envelope.svg"
              alt=""
            />

            <span class="mx-2">Email:</span> {{ item.primary.email[0].text }}
          </div>
          <div class="col-12 my-4">
            <img class="contact-icon" src="/icons/phone.svg" alt="" />

            <span class="mx-2">Phone:</span> {{ item.primary.phone[0].text }}
          </div>

          <div class="col-12"></div>

          <p class="">
            <prismic-rich-text :field="item.primary.contact_infomation" />
          </p>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
        <iframe
          name="dummyframe"
          id="dummyframe"
          style="display: none"
        ></iframe>
        <form
          id="contactForm"
          action="https://formsubmit.co/mollydooner@gmail.com"
          method="POST"
          target="dummyframe"
        >
          <input
            type="hidden"
            name="_subject"
            value="New message on mollyelizabeth.com"
          />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your name*"
            class="form-control mb-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            class="form-control mb-3"
            aria-describedby="emailHelp"
            required
          />

          <textarea
            type="text"
            name="message"
            class="form-control mb-3"
            placeholder="Write your message here*"
            required
            rows="3"
          />

          <div class="col-12 text-end">
            <button
              @click="resetForm"
              type="submit"
              class="float-right btn btn-dark"
            >
              <small>Send</small>
            </button>
          </div>
        </form>
        <div v-if="messageSent" class="col-12 confirm text-center m-0 p-0">
          Message Sent!
        </div>
        <div
          v-if="!messageSent"
          class="col-12 confirm text-center m-0 p-0"
        ></div>
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
      messageSent: false,
    };
  },
  mounted() {
    this.watchRoute();
  },
  methods: {
    resetForm() {
      this.messageSent = true;
      setTimeout(() => {
        this.messageSent = false;
        document.getElementById("contactForm").reset();
      }, 3000);
    },
    watchRoute() {
      if (this.$route.hash) {
        window.scrollTo(0, 2000);
      }
    },
  },

  watch: {
    $route() {
      this.watchRoute();
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-dark {
  background: #2b2b2e;
  border: #2b2b2e;
}

h2 {
  text-decoration: underline white;
}
.contact-info span {
  text-decoration: underline;
}
.contact-icon {
  width: 25px;
}
#contact {
  color: white;
  background: transparent !important;
}
.confirm {
  height: 30px;
}
// .btn {
//   background: #6285ff;
//   border: #6285ff;
//   border-radius: 6px !important;
//   text-transform: none;
// }
textarea,
input {
  padding: 13px 16px 12px;
  border-radius: 12px;
  background: #99af9e !important;
}

.form-control:focus {
  color: white;
  border: 1px solid #f1f1f1;
  box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0), 0 0 0px rgba(255, 0, 0, 0);
}
.form-control:valid {
  background: #99af9e !important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #99af9e inset !important;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #f1f1f1;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #f1f1f1;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #f1f1f1;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #f1f1f1;
}

input:-webkit-autofill {
  background: #99af9e !important;
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px #99af9e inset;
}
input:-moz-autofill {
  background: #99af9e !important;
  -moz-text-fill-color: white;
  -moz-box-shadow: 0 0 0px 1000px #99af9e inset;
}
input:-o-autofill {
  background: #99af9e !important;
  -o-text-fill-color: white;
  -o-box-shadow: 0 0 0px 1000px #99af9e inset;
}
input:-khtml-autofill {
  background: #99af9e !important;
  -khtml-text-fill-color: white;
  -khtml-box-shadow: 0 0 0px 1000px #99af9e inset;
}

input:focus:-webkit-autofill {
  background: #99af9e !important;
  -webkit-box-shadow: 0 0 0px 1000px #99af9e inset;
}
input:focus:-moz-autofill {
  background: #99af9e !important;
  -moz-text-fill-color: white;
  -moz-box-shadow: 0 0 0px 1000px #99af9e inset;
}
input:focus:-o-autofill {
  background: #99af9e !important;
  -o-text-fill-color: white;
  -o-box-shadow: 0 0 0px 1000px #99af9e inset;
}
input:focus:-khtml-autofill {
  background: #99af9e !important;
  -khtml-text-fill-color: white;
  -khtml-box-shadow: 0 0 0px 1000px #99af9e inset;
}
.form-control:hover {
  border: 1px solid white;
}

.form-control {
  color: white;
}
</style>