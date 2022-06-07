<template lang="pug">
v-footer(dark padless)
  v-card.flex(flat tile)
    v-card-text.teal.text-center.pb-0
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
    v-card-text.teal.text-center
      v-btn(
        v-for="icon in navIcons"
        :key="icon.name"
        icon
        x-large
        link
        :href="icon.url"
        target="_blank"
        rel="noopener"
      )
        v-icon {{ icon.name }}
    v-card-text.text-center.white--text.py-2
      span &copy;
      span {{ new Date().getFullYear() }} - 
      a.white--text.text-decoration-none(
        href="https://www.kakurenbo.club"
        target="_blank"
        rel="noopener"
      )
        strong かくれんぼ in ぐんま
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"
import { NavIcon, NavItem } from "~/types"

@Component({})
export default class GlobalFooter extends Vue {
  @Prop({ type: Array, required: true })
  readonly navItems!: NavItem[]

  navIcons: NavIcon[] = [
    { name: 'mdi-facebook', url: 'https://www.facebook.com/groups/kakurenbo' },
    { name: 'mdi-twitter', url: 'https://twitter.com/toyokappa' },
    { name: 'mdi-youtube', url: 'https://www.youtube.com/channel/UCFecawOb06qA62iYfVQmteA'},
  ]
}
</script>