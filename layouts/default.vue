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
import { NavItem } from "~/types/nav"

@Component({
  components: {
    GlobalHeader,
    GlobalFooter,
  }
})
export default class DefaultLayout extends Vue {
  navItems: NavItem[] = [
    { text: 'スポかくとは？', url: '' },
    { text: 'ニュース', url: '' },
    { text: 'サービス', url: '' },
    { text: '運営者情報', url: '' },
    { text: 'お問い合わせ', url: '' },
    { text: 'ブログ', url: 'https://www.kakurenbo.club/blog', external: true },
  ]
}
</script>