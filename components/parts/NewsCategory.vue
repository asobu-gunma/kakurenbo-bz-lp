<template lang="pug">
v-btn(
  :value="category"
  active-class="active-category"
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
.active-category
  background-color: #FFC107 !important
  &::before
    opacity: 0 !important
</style>