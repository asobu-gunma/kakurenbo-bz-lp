<template lang="pug">
v-btn.border-bold.font-weight-bold(
  tile
  outlined
  large
)
  slot
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class PartsCtaBtn extends Vue {}
</script>

<style lang="sass" scoped>
.border-bold
  border-width: 3px !important
</style>