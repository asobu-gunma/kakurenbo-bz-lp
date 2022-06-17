<template lang="pug">
v-btn.font-weight-bold(
  color="amber"
  large
  link
  :nuxt="!external"
  :to="external ? '' : url"
  :href="external ? url : ''"
  :target="external ? '_blank' : ''"
  :rel="external ? 'noopener' : ''"
)
  slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsCtaBtn extends Vue {
  @Prop({ type: String, required: true })
  readonly url!: string

  @Prop({ type: Boolean, default: false })
  readonly external!: boolean
}
</script>

<style lang="sass" scoped>
.border-bold
  border-width: 3px !important
</style>