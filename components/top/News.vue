<template lang="pug">
section#news
  parts-section-title.mb-2(
    main="NEWS"
    sub="お知らせ"
  )
  parts-news-post(
    v-for="news in newsList"
    :key="news.id"
    :news="news"
  )
  parts-cta-btn.mt-2(url="news") 過去のNEWSの一覧はこちらから！
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"
import { News } from "~/types"

@Component
export default class TopNews extends Vue {
  @Prop({ type: Array, required: true })
  readonly newsList!: News[]
}
</script>