<template lang="pug">
.policy
  h3.text-h5.text-center.font-weight-black.mb-5 {{ title }}
  .description.text-center {{ description }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsPolicy extends Vue {
  @Prop({ type: String, required: true })
  readonly title!: string

  @Prop({ type: String, required: true })
  readonly description!: string
}
</script>

<style lang="sass" scoped>
</style>

