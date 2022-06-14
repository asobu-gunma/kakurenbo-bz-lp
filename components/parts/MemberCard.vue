<template lang="pug">
v-card
  .photo
  v-card-text.text--primary
    .body-1.font-weight-black {{ name }}
    .caption {{ title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsMemberCard extends Vue {
  @Prop({ type: String, required: true })
  readonly name!: string

  @Prop({ type: String, required: true })
  readonly title!: string
}
</script>

<style lang="sass" scoped>
.photo
  width: 100%
  padding-bottom: 100%
  background-color: #f4f4f4
</style>