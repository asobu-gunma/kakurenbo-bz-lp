<template lang="pug">
section#hero
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class TopHero extends Vue {}
</script>

<style lang="sass" scoped>
#hero
  width: 100%
  height: calc(100vh - 64px)
  background-color: #f4f4f4
</style>