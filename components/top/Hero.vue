<template lang="pug">
section#hero
  video(playsinline muted autoplay loop)
    source(src="~/assets/videos/hero.mp4" type="video/mp4")
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class TopHero extends Vue {}
</script>

<style lang="sass" scoped>
#hero
  position: relative
  width: 100%
  height: calc(100vh - 64px)
  background-color: #f4f4f4
  overflow: hidden
  video
    min-width: 100%
    min-height: 100%
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>