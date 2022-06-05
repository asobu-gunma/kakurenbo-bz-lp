<template lang="pug">
v-app-bar(app flat)
  img.logo(src="~/assets/images/logo-short.svg")
  v-spacer
  v-btn(text v-for="text in navItems" :key="text") {{ text }}
  v-btn(text)
    span.me-1 ブログ
    v-icon(dense) mdi-open-in-new
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class GlobalHeader extends Vue {
  @Prop({ type: Array, required: true })
  readonly navItems!: string[]
}
</script>

<style lang="sass" scoped>
.logo
  height: 45px
  width: auto
</style>