<template>
  <div data-aos="fade" class="col-12 pb-4 mb-4 white">
    <div
      :class="[
        checkIndex(index) ? 'justify-content-start' : 'justify-content-end',
      ]"
      class="row d-flex m-0 p-0"
    >
      <div class="col-12 col-md-12 col-lg-7 p-0 row">
        <div class="col-12">
          <div class="plyr__video-embed" id="player">
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
        <div class="col-12">
          <figcaption class="blockquote-footer mb-0 mt-2">
            {{ item.primary.credit }}
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default {
  name: "VideoTestimonial",
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    checkIndex(e) {
      if (e % 2 === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    youtubeId() {
      let regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      let match = this.item.primary.video_embed.embed_url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    },
  },
  mounted() {
    const player = new Plyr("#player", {
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
    });
    window.player = player;
  },
};
</script>

<style scoped>
iframe {
  min-height: inherit;
}
#player {
  border-radius: 8px;
}
</style>