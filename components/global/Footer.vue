<template lang="pug">
v-footer(dark padless)
  v-card.flex(flat tile)
    v-card-text.teal.text-center.pb-0
      v-btn(
        v-for="text in navItems"
        :key="text"
        text
      ) {{ text }}
      v-btn(text)
        span.me-1 ブログ
        v-icon(dense) mdi-open-in-new
    v-card-text.teal.text-center
      v-btn(
        v-for="icon in navIcons"
        :key="icon"
        icon
        x-large
      )
        v-icon {{ icon }}
    v-card-text.text-center.white--text.py-2
      span &copy;
      span {{ new Date().getFullYear() }} - 
      strong かくれんぼ in ぐんま
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component({})
export default class GlobalFooter extends Vue {
  @Prop({ type: Array, required: true })
  readonly navItems!: string[]

  navIcons: string[] = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-youtube',
  ]
}
</script>