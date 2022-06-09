<template lang="pug">
div
  parts-hero(title="ニュース")
  v-container.mb-16
    v-row.mb-3(dense)
      v-col(cols="3")
        v-btn(
          block
          tile
          depressed
          x-large
        ) ALL
      v-col(cols="3")
        v-btn(
          block
          tile
          depressed
          x-large
        ) NEWS
      v-col(cols="3")
        v-btn(
          block
          tile
          depressed
          x-large
        ) MEDIA
      v-col(cols="3")
        v-btn(
          block
          tile
          depressed
          x-large
        ) EVENT
    parts-news-post.mb-3(
      v-for="news in newsList"
      :key="news.id"
      :news="news"
    )
    v-pagination(
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
  newsList: News[] = [
    {
      id: 3,
      postedAt: '2022.06.09',
      category: 'EVENT',
      title: '【7月のかくれんぼ選手権】お申し込み受付中です！',
      url: '',
      external: true
    },
    {
      id: 2,
      postedAt: '2022.06.08',
      category: 'MEDIA',
      title: 'NHKにてスポーツかくれんぼが特集されました！',
      url: '',
      external: true
    },
    {
      id: 1,
      postedAt: '2022.06.07',
      category: 'NEWS',
      title: 'ホームページをリニューアルしました！',
      url: '',
      external: false
    }
  ]
}
</script>

<style lang="sass">
.v-pagination__item, .v-pagination__navigation
  background-color: lightgrey !important
  border-radius: 0
  box-shadow: none
</style>