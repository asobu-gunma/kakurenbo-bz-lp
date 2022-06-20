<template lang="pug">
v-card.step-card
  v-card-text
    .d-flex.align-center
      v-chip.me-3(color="amber") {{ step }}
      span.body-1.font-weight-bold.me-3.text--primary {{ title }}
      span.caption {{ caption }}
  v-img(
    :src="image"
    :alt="title"
    width="100%"
    aspect-ratio="1.7778"
  )
  v-card-text.text--primary {{ description }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsStepCard extends Vue {
  @Prop({ type: String, required: true })
  readonly step!: string

  @Prop({ type: String, required: true })
  readonly title!: string

  @Prop({ type: String, required: true })
  readonly caption!: string

  @Prop({ type: String, required: true })
  readonly image!: string

  @Prop({ type: String, required: true })
  readonly description!: string
}
</script>

<style lang="sass" scoped>
.step-card
  width: 100%
  text-align: left
</style>