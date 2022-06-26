<template lang="pug">
div
  parts-hero.mb-16(
    title="NEWS"
    subtitle="お知らせ"
    :image="heroImage"
  )
  v-container.mb-16
    v-row.mb-3(dense)
      v-col(cols="3")
        parts-news-category(category="all" path="/news/")
      v-col(cols="3")
        parts-news-category(category="news" path="/news/news/")
      v-col(cols="3")
        parts-news-category(category="media" path="/news/media/")
      v-col(cols="3")
        parts-news-category(category="event" path="/news/event/")
    parts-news-post.mb-3(
      v-for="news in newsList"
      :key="news.id"
      :news="news"
    )
    v-pagination(
      v-if="false"
      :value="4"
      :length="6"
      :total-visible="5"
      color="teal"
    )
  parts-contact-btn
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"
import { News } from "~/types"
import heroImage from '~/assets/images/header_news.jpg'

@Component({})
export default class PartsNewsPage extends Vue {
  heroImage = heroImage

  @Prop({ type: Array, required: true })
  readonly newsList!: News[]
}
</script>

<style lang="sass">
.v-pagination__item, .v-pagination__navigation
  background-color: lightgrey !important
  border-radius: 0
  box-shadow: none
</style>