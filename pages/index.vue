<template lang="pug">
div
  .hero.mb-16
  v-container
    top-about.mb-16
    top-news.mb-16(:newsList="newsList")
    top-service.mb-16
    top-event
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { News } from "~/types"

@Component
export default class TopPage extends Vue {
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
.hero
  width: 100%
  height: calc(100vh - 64px)
  background-color: #f4f4f4
.insert-image
  width: 100%
  padding-top: 60%
  background-color: #f4f4f4
.border-bold
  border-color: black !important
  border-width: 3px !important
</style>