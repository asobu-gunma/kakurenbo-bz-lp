<template lang="pug">
parts-news-page(:newsList="newsList")
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { News } from "~/types"
import heroImage from '~/assets/images/header_news.jpg'

@Component({
  async asyncData({ app }) {
    const newsRes = await app.$ctfClient.getEntries({
      content_type: 'news',
      order: '-sys.createdAt',
      'fields.category': 'news',
    })
    const newsList: News[] = newsRes.items.map((item: { fields: News }) => item.fields)
    return { newsList }
  }
})
export default class NewsPage extends Vue {
  head() {
    return {
      title: `${process.env.projectName} | お知らせ`
    }
  }
  heroImage = heroImage
}
</script>

<style lang="sass">
.v-pagination__item, .v-pagination__navigation
  background-color: lightgrey !important
  border-radius: 0
  box-shadow: none
</style>