<template>
  <div>
    <div class="container-fluid p-0">
      <section class="loop" v-for="(item, index) in data.data.body" :key="item">
        <component
          :is="componentMapper[item.slice_type]"
          v-bind="{ item: item, index: index }"
        ></component>
      </section>
    </div>
  </div>
</template>

<script setup >
import text_box from "~/components/AboutBio.vue";
import certificate_and_text from "~/components/CertificateAndText.vue";
import contact from "~/components/ContactSection.vue";

const { client } = usePrismic();
const { data: data } = await useAsyncData("data", () =>
  client.getSingle("about_page")
);
const componentMapper = {
  text_box,
  certificate_and_text,
  contact,
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
