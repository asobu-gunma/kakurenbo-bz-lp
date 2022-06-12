<template lang="pug">
v-btn(
  :value="category"
  tile
  depressed
  block
  x-large
) {{ category}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsNewsCategory extends Vue {
  @Prop({ type: String, required: true })
  readonly category!: string
}
</script>

<style lang="sass">
</style>