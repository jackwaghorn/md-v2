<template>
  <!-- Video -->
  <div class="col-md-6 col-12 py-0 mb-3 row d-flex justify-content-center">
    <div class="col-12 plyr__video-embed js-player">
      <iframe
        :src="
          'https://www.youtube.com/embed/' +
          youtubeId +
          '?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1'
        "
        allowfullscreen
        allowtransparency
        allow="autoplay"
      ></iframe>
    </div>
    <div class="col-8 p-0 mt-5">
      <img class="img-fluid" :src="item.primary.image.url" alt="" />
    </div>
  </div>
  <div class="col-md-6 col-12 row d-flex align-items-baseline gy-4 mt-0">
    <div class="col-12 m-0">
      <h2>{{ item.primary.item_title }}</h2>
    </div>
    <div class="col-12">
      <prismic-rich-text :field="item.primary.item_description" />
      <small class="product-type"
        >Digital product: You will receive a private video link via email</small
      >
    </div>
    <div class="col-12 my-3">
      <h4>£{{ item.primary.price }}</h4>
    </div>
    <div class="col-12 m-0">
      <button
        :data-item-name="item.primary.item_title"
        :data-item-id="item.id"
        :data-item-price="item.primary.price"
        :data-item-image="item.primary.video_embed.thumbnail_url"
        :data-item-file-guid="item.primary.snipcart_digital_good_guid"
        :data-item-shippable="false"
        data-item-url="https://www.mollydooner.com/shop"
        data-item-custom1-name="Url-1"
        data-item-custom1-type="hidden"
        :data-item-custom1-value="videoLinks[0]"
        data-item-custom2-name="Url-2"
        data-item-custom2-type="hidden"
        :data-item-custom2-value="videoLinks[1]"
        data-item-custom3-name="Url-3"
        data-item-custom3-type="hidden"
        :data-item-custom3-value="videoLinks[2]"
        data-item-custom4-name="Url-4"
        data-item-custom4-type="hidden"
        :data-item-custom4-value="videoLinks[3]"
        data-item-custom5-name="Url-5"
        data-item-custom5-type="hidden"
        :data-item-custom5-value="videoLinks[4]"
        type="button"
        class="btn contact-link btn-dark snipcart-add-item"
      >
        <small>Buy Now</small>
      </button>
    </div>
  </div>
</template>
<script setup>
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const props = defineProps(["item", "index"]);

const youtubeId = computed(() => {
  let regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  let match = props.item.primary.video_embed.embed_url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
});
const videoLinks = computed(() => {
  return Array.from(props.item.items).map((link) => {
    return link.full_video_links.url;
  });
});

onMounted(() => {
  const players = Array.from(document.querySelectorAll(".js-player")).map(
    (p) =>
      new Plyr(p, {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "fullscreen",
        ],
        fullscreen: {
          enabled: true,
        },
      })
  );

  window.player = players;
});
</script>
<style scoped>
.product-type {
  color: grey;
  font-style: italic;
}
h2 {
  color: #212529;
  text-decoration: underline #a77e50;
}

iframe {
  min-height: inherit;
}
.plyr {
  border-radius: 8px;
}
</style>