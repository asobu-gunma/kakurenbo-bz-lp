<template lang="pug">
section#hero
  video(playsinline muted autoplay loop)
    source(src="~/assets/videos/hero.mp4" type="video/mp4")
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class TopHero extends Vue {}
</script>

<style lang="sass" scoped>
#hero
  position: relative
  width: 100%
  background-color: #f4f4f4
  overflow: hidden
  @include display_pc
    height: calc(100vh - 64px)
  @include display_sp
    aspect-ratio: 1
  video
    min-width: 100%
    min-height: 100%
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
