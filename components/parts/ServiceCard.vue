<template lang="pug">
v-card.text-center.border-bold(
  tile
  outlined
)
  v-card-text.title.font-weight-bold.text--primary {{ title }}
  .insert-image
  v-card-text.caption.text--primary
    div {{ description1 }}
    div {{ description2 }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class ServiceCard extends Vue {
  @Prop({ type: String, required: true })
  readonly title!: string

  @Prop({ type: String, required: true })
  readonly description1!: string

  @Prop({ type: String, required: true })
  readonly description2!: string
}
</script>
