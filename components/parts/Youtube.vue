<template lang="pug">
iframe(
  width="560"
  height="315"
  :src="youtubeEmbedLink"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
)
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsYoutube extends Vue {
  @Prop({ type: String, required: true })
  readonly id!: string

  get youtubeEmbedLink(): string {
    return `https://www.youtube.com/embed/${this.id}`
  }
}
</script>