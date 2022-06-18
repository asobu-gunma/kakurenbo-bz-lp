<template lang="pug">
v-card.mb-3(
  block
  :nuxt="!news.external"
  :to="news.external ? '' : news.url"
  :href="news.external ? news.url : ''"
  :target="news.external ? '_blank' : ''"
  :rel="news.external ? 'noopener' : ''"
)
  v-card-text.text--primary
    .news-content
      span.body-2.me-5.date {{ formattedPostedAt }}
      v-chip.me-5.category(label small) {{ news.category.toUpperCase() }}
      span.body-2.title {{ news.title }}
      v-icon.ms-auto.icon mdi-chevron-right
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"
import { News } from "~/types"

@Component
export default class PartsNewsPost extends Vue {
  @Prop({ type: Object, required: true })
  readonly news!: News

  get formattedPostedAt(): string {
    // @ts-ignore
    return this.$dateFns.format(this.news.postedAt, "yyyy.MM.dd")
  }
}
</script>

<style lang="sass" scoped>
.news-content
  position: relative
  width: 100%
  display: flex
  align-items: center
  flex-wrap: wrap
  @include display_sp
    padding-right: 30px
  .date
    flex: 0 0 auto
    @include display_sp
      order: 2
      margin-bottom: 0.5rem
  .category
    flex: 0 0 auto
    @include display_sp
      order: 1
      margin-bottom: 0.5rem
  .title
    flex: 1 1 auto
    @include display_sp
      order: 3
  .icon
    @include display_sp
      position: absolute
      top: 50%
      right: 0
      transform: translateY(-50%)
</style>