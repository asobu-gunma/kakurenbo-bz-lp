<template lang="pug">
v-app-bar(app flat color="amber")
  n-link.logo.px-3(to="/")
    img(src="~/assets/images/logo-short.svg")
  v-spacer
  v-btn(
    v-for="item in navItems"
    :key="item.text"
    text
    link
    :nuxt="!item.external"
    :to="item.external ? '' : item.url"
    :href="item.external ? item.url : ''"
    :target="item.external ? '_blank' : ''"
    :rel="item.external ? 'noopener' : ''"
  )
    span {{ item.text }}
    v-icon.ms-1(
      v-if="item.external"
      dense
    ) mdi-open-in-new
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"
import { NavItem } from "~/types"

@Component
export default class GlobalHeader extends Vue {
  @Prop({ type: Array, required: true })
  readonly navItems!: NavItem[]
}
</script>

<style lang="sass" scoped>
.logo
  line-height: 1
  img
    height: 45px
    width: auto
</style>