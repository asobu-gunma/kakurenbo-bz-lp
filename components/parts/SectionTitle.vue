<template lang="pug">
h2
  span.font-weight-black.me-3 {{ main }}
  span.body-2.font-weight-bold {{ sub }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsSectionTitle extends Vue {
  @Prop({ type: String, required: true })
  readonly main!: string

  @Prop({ type: String, required: true })
  readonly sub!: string
}
</script>