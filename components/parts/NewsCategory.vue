<template lang="pug">
v-btn(
  active-class="active-category"
  exact-path
  block
  x-large
  nuxt
  link
  :to="path"
) {{ category }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsNewsCategory extends Vue {
  @Prop({ type: String, required: true })
  readonly category!: string

  @Prop({ type: String, required: true })
  readonly path!: string
}
</script>

<style lang="sass">
.active-category
  background-color: #FFC107 !important
  &::before
    opacity: 0 !important
</style>