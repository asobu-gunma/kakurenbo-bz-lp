<template lang="pug">
v-btn.mb-3(
  block
  height="60px"
  :nuxt="!news.external"
  :to="news.external ? '' : news.url"
  :href="news.external ? news.url : ''"
  :target="news.external ? '_blank' : ''"
  :rel="news.external ? 'noopener' : ''"
)
  span.body-2.me-5 {{ news.postedAt }}
  v-chip.me-5(label small) {{ news.category }}
  span.body-2 {{ news.title }}
  v-spacer
  v-icon mdi-chevron-right
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"
import { News } from "~/types"

@Component
export default class PartsNewsPost extends Vue {
  @Prop({ type: Object, required: true })
  readonly news!: News
}
</script>