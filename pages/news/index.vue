<template lang="pug">
div
  parts-hero.mb-16(
    title="NEWS"
    subtitle="ニュース"
    :image="heroImage"
  )
  v-container.mb-16
    v-btn-toggle.mb-5.d-block(
      v-model="currentCategory"
      mandatory
    )
      v-row(dense)
        v-col(cols="3")
          parts-news-category(category="all")
        v-col(cols="3")
          parts-news-category(category="news")
        v-col(cols="3")
          parts-news-category(category="media")
        v-col(cols="3")
          parts-news-category(category="event")
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
import { Vue, Component, Watch } from "nuxt-property-decorator"
import { News } from "~/types"
import heroImage from '~/assets/images/header_news.jpg'

@Component({
  async asyncData({ app }) {
    const newsRes = await app.$ctfClient.getEntries({
      content_type: 'news',
      order: '-sys.createdAt',
    })
    const newsList: News[] = newsRes.items.map((item: { fields: News }) => item.fields)
    return { newsList }
  }
})
export default class NewsPage extends Vue {
  newsList?: News[]
  heroImage = heroImage
  currentCategory: string = 'all'

  @Watch('currentCategory')
  async selectCategory() {
    let ctfOption: any = {
      content_type: 'news',
      order: '-sys.createdAt',
    }
    if (this.currentCategory !== 'all') {
      ctfOption['fields.category'] = this.currentCategory
    } 
    // @ts-ignore
    const newsRes = await this.$ctfClient.getEntries(ctfOption)
    this.newsList = newsRes.items.map((item: { fields: News }) => item.fields)
  }
}
</script>

<style lang="sass">
.v-pagination__item, .v-pagination__navigation
  background-color: lightgrey !important
  border-radius: 0
  box-shadow: none
</style>