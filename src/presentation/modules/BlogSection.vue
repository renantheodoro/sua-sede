<template>
  <section :class="`blog-section section-default ${sectionClass}`">
    <div class="container">
      <div class="content__row flex-v-center">
        <div class="content__column column--4 column-desktop--8">
          <h2>O futuro do mercado de trabalho flexivel</h2>
        </div>
        <div class="content__column column--4 column-desktop--4 flex-right">
          <a href="https://www.coworkingsaopaulo.net/blog/" target="_blank" class="blog-section__link">
            Acesse outros conteúdos
            <img
              src="@/assets/images/svg/icons/icon_arrow_right.svg"
              alt="arrow right"
            />
          </a>
        </div>
      </div>
      <div class="content__row">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="content__column column--4 column-desktop--4"
        >
          <div class="blog-section__post">
            <a :href="post.link" target="_blank">
              <img
                v-lazy="$getWebpUrl(post.image)"
                class="blog-section__post__image"
                :alt="post.image"
              />
              <span class="post-flag post-flag--orange">
                {{ post.category }}
              </span>
              <h3>{{ post.title }}</h3>
              <p>
                {{ post.resume }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import content from "@/content/blog_posts.json";

export default {
  name: "app-blog-section",

  props: {
    sectionClass: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      posts: content,
    };
  },
};
</script>
<style lang=""></style>
