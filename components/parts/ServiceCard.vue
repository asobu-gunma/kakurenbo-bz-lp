<template lang="pug">
v-card.text-center
  v-card-text.title.font-weight-bold.text--primary {{ title }}
  v-img(
    :src="image"
    :alt="title"
    width="100%"
    aspect-ratio="1.7778"
  )
  v-card-text.caption.text--primary
    div {{ description1 }}
    div {{ description2 }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsServiceCard extends Vue {
  @Prop({ type: String, required: true })
  readonly title!: string

  @Prop({ type: String, required: true })
  readonly description1!: string

  @Prop({ type: String, required: true })
  readonly description2!: string

  @Prop({ type: String, required: true })
  readonly image!: string
}
</script>
