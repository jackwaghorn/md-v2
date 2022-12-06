<template>
  <!-- Video -->
  <div class="col-md-6 col-12 py-0 mb-3">
    <div class="plyr__video-embed js-player">
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
  </div>
  <div class="col-md-6 col-12 row d-flex align-items-baseline gy-4 mt-0">
    <div class="col-12 m-0">
      <h2>{{ item.data.product_name[0].text }}</h2>
    </div>
    <div class="col-12">
      <prismic-rich-text :field="item.data.product_description" />
      <small class="product-type"
        >Digital product: You will receive a private video link via email</small
      >
    </div>
    <div class="col-12 my-3">
      <h4>£{{ item.data.product_price }}</h4>
    </div>
    <div class="col-12 m-0">
      <button
        :data-item-name="item.data.product_name[0].text"
        :data-item-id="item.id"
        :data-item-price="item.data.product_price"
        :data-item-image="item.data.sample_video_embed.thumbnail_url"
        :data-item-file-guid="item.data.snipcart_digital_good_guid"
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
<script>
import Plyr from "plyr";
import "plyr/dist/plyr.css";
export default {
  props: {
    item: Object,
    index: Number,
  },
  data() {
    return {};
  },

  computed: {
    youtubeId() {
      let regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      let match = this.item.data.sample_video_embed.embed_url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    },
    videoLinks() {
      return Array.from(this.item.data.video_links).map((link) => {
        return link.full_video_link.url;
      });
    },
  },
  mounted() {
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
  },
};
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