<template lang="pug">
div
  top-hero.mb-16
  v-container
    top-about.mb-16
    top-news.mb-16(:newsList="newsList")
    top-service.mb-16
    top-event.mb-16(:event="event")
  parts-contact-btn
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { News } from "~/types"

@Component({
  async asyncData({ app }) {
    const newsRes = await app.$ctfClient.getEntries({
      content_type: 'news',
      order: '-sys.createdAt',
      limit: 5,
    })
    const newsList: News[] = newsRes.items.map((item: { fields: News }) => item.fields)

    const eventRes = await app.$ctfClient.getEntries({
      content_type: 'event',
      order: '-sys.createdAt',
      limit: 1,
    })
    const event = eventRes.items[0]
    return { event, newsList }
  }
})
export default class TopPage extends Vue {}
</script>