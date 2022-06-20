<template lang="pug">
v-card
  v-img.photo(:src="photoUrl" :alt="`${name}の写真`")
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

  @Prop({ type: String, required: true })
  readonly photoUrl!: string
}
</script>
