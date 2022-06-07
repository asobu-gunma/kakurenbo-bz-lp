<template lang="pug">
div
  top-hero.mb-16
  v-container
    top-about.mb-16
    top-news.mb-16(:newsList="newsList")
    top-service.mb-16
    top-event.mb-16
  parts-contact-btn
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