<template lang="pug">
.hero.mb-16
  h1 {{ title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsHero extends Vue {
  @Prop({ type: String, required: true })
  readonly title!: string
}
</script>

<style lang="sass" scoped>
.hero
  width: 100%
  padding: 100px 0
  text-align: center
  background-color: #f4f4f4
</style>