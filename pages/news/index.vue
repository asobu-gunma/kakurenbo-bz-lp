<template lang="pug">
div
  parts-hero(title="ニュース")
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
      v-for="news in filteredNewsList"
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
import { Vue, Component } from "nuxt-property-decorator"
import { News } from "~/types"

@Component
export default class NewsPage extends Vue {
  currentCategory: string = 'all'
  newsList: News[] = [
    {
      id: 3,
      postedAt: '2022.06.09',
      category: 'event',
      title: '【7月のかくれんぼ選手権】お申し込み受付中です！',
      url: '',
      external: true
    },
    {
      id: 2,
      postedAt: '2022.06.08',
      category: 'media',
      title: 'NHKにてスポーツかくれんぼが特集されました！',
      url: '',
      external: true
    },
    {
      id: 1,
      postedAt: '2022.06.07',
      category: 'news',
      title: 'ホームページをリニューアルしました！',
      url: '',
      external: false
    }
  ]

  selectCategory(category: string): void {
    this.currentCategory = category
  }

  get filteredNewsList(): News[] {
    if (this.currentCategory === 'all') return this.newsList

    return this.newsList.filter((news: News) => news.category === this.currentCategory)
  }
}
</script>

<style lang="sass">
.v-pagination__item, .v-pagination__navigation
  background-color: lightgrey !important
  border-radius: 0
  box-shadow: none
</style>