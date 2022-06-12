<template lang="pug">
v-btn.font-weight-bold(
  color="amber"
  large
  link
  nuxt
  :to="url"
)
  slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsCtaBtn extends Vue {
  @Prop({ type: String })
  readonly url!: string
}
</script>

<style lang="sass" scoped>
.border-bold
  border-width: 3px !important
</style>