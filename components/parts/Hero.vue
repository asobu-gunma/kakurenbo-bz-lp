<template lang="pug">
section.hero-area
  .hero(:style="{'background-image': `url(${image})`}")
  .hero-text
    h1.hero-title {{ title }}
    h2.hero-subtitle {{ subtitle }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsHero extends Vue {
  @Prop({ type: String, required: true })
  readonly title!: string

  @Prop({ type: String, required: true })
  readonly subtitle!: string

  @Prop({ type: String, required: true })
  readonly image!: string
}
</script>

<style lang="sass" scoped>
.hero-area
  position: relative
  .hero
    position: relative
    width: 100%
    height: 300px
    background-position: center center
    background-size: cover
    &::after
      content: ''
      position: absolute
      width: 100%
      height: 100%
      top: 0
      right: 0
      background: linear-gradient(85.33deg, rgba(243, 110, 103, 0.5) 0%, rgba(255, 195, 42, 0.5) 100%)
      z-index: 1
  .hero-text
    display: block
    position: absolute
    color: white
    text-align: center
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 2
    .hero-title
      font-size: 48px
    .hero-subtitle
      font-size: 24px
</style>