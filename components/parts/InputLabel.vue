<template lang="pug">
.d-flex.body-1.font-weight-bold.mb-2
  span {{ text }}
  parts-required-label.ms-2(v-if="required")
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsInputLabel extends Vue {
  @Prop({ type: String, required: true })
  readonly text!: string

  @Prop({ type: Boolean, default: false })
  readonly required!: boolean
}
</script>