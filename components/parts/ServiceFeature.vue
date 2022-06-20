<template lang="pug">
v-row.mb-3
  v-col(cols="12" md="6")
    v-img(
      :src="image"
      width="100%"
      aspect-ratio="1.7778"
      :alt="alt"
    )
  v-col(cols="12" md="6")
    h3.point.mb-2
      div(v-for="title in titleList" :key="title") {{ title }}
    .description
      p {{ description }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PartsServiceFeature extends Vue {
  @Prop({ type: String, required: true })
  readonly image!: string

  @Prop({ type: String, required: true })
  readonly alt!: string

  @Prop({ type: Array, required: true })
  readonly titleList!: string[]

  @Prop({ type: String, required: true })
  readonly description!: string
}
</script>

<style lang="sass" scoped>
.point
  font-size: 30px
  font-weight: bold
  letter-spacing: 3px
  @include display_sp
    font-size: 20px !important
.description
  font-size: 16px
  letter-spacing: 3px
  line-height: 2
  @include display_sp
    font-size: 14px !important
</style>