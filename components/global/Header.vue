<template lang="pug">
header
  v-app-bar(
    app
    flat
    color="amber"
  )
    n-link.logo.px-3(to="/")
      img(src="~/assets/images/logo-short.svg" alt="スポかく")
    v-tabs(
      right
      color="dark"
    )
      v-tab(
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
    v-spacer
    v-app-bar-nav-icon(@click="drawer = true")
  v-navigation-drawer(
    v-model="drawer"
    color="amber"
    fixed
    temporary
    right
  )
    v-list(nav)
      v-list-item(
        v-for="item in navItems"
        :key="item.text"
        link
        :nuxt="!item.external"
        :to="item.external ? '' : item.url"
        :href="item.external ? item.url : ''"
        :target="item.external ? '_blank' : ''"
        :rel="item.external ? 'noopener' : ''"
      )
        v-list-item-content
          v-list-item-title.px-3
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

  drawer: boolean = false
}
</script>

<style lang="sass" scoped>
.logo
  line-height: 1
  img
    height: 45px
    width: auto
.v-app-bar__nav-icon
  @include display_pc
    display: none !important
.v-tabs
  display: none
  @include display_pc
    display: block !important
</style>