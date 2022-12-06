<template>
  <div>
    <div class="container-fluid p-0">
      <section class="loop" v-for="(item, index) in data" :key="item">
        <component
          :is="componentMapper[item.slice_type]"
          v-bind="{ item: item, index: index }"
        ></component>
      </section>
    </div>
  </div>
</template>
<script>
import AboutBio from "~/components/AboutBio.vue";
import CertificateAndText from "~/components/CertificateAndText.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
  components: {
    AboutBio,
    CertificateAndText,
    ContactSection,
  },

  data() {
    return {
      data: "",
      contactData: [],
      componentMapper: {
        text_box: "AboutBio",
        certificate_and_text: "CertificateAndText",
        contact: "ContactSection",
      },
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle("about_page").then((response) => {
        this.data = response.data.body;
      });
    },
  },

  mounted() {
    this.getContent();
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  min-height: 100vh;
}

.loop section.pink {
  background: transparent !important;
}
.bio {
  border-bottom: black solid 1px;
}
</style>
