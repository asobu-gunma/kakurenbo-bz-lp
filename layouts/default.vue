<template lang="pug">
v-app
  global-header(:navItems="navItems")
  v-main
    nuxt
  global-footer(:navItems="navItems")
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import GlobalHeader from "~/components/global/Header.vue"
import GlobalFooter from "~/components/global/Footer.vue"
import { NavItem } from "~/types"

@Component({
  components: {
    GlobalHeader,
    GlobalFooter,
  }
})
export default class DefaultLayout extends Vue {
  navItems: NavItem[] = [
    { text: 'スポかくとは？', url: '/about' },
    { text: 'ニュース', url: '/news' },
    { text: 'サービス', url: '/service' },
    { text: '運営者情報', url: '/organization' },
    { text: 'お問い合わせ', url: '' },
    { text: 'ブログ', url: 'https://www.kakurenbo.club/blog', external: true },
  ]
}
</script>

<style lang="sass">
.insert-image
  width: 100%
  padding-top: 60%
  background-color: #f4f4f4
.border-bold
  border-color: black !important
  border-width: 3px !important
</style>