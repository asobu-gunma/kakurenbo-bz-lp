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
    { text: 'お知らせ', url: '/news' },
    { text: 'サービス紹介', url: '/service' },
    { text: '運営者情報', url: '/organization' },
    { text: 'お問い合わせ', url: '/contact' },
    { text: 'ブログ', url: 'https://www.kakurenbo.club/blog', external: true },
  ]
}
</script>

<style lang="sass">
body
  font-family: "Noto Sans JP", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif 
.insert-image
  width: 100%
  padding-top: 60%
  background-color: #f4f4f4
  background-position: center center
  background-size: cover
.description
  font-size: 14px
  line-height: 2
  letter-spacing: 3px
.section-margin
  margin-bottom: 80px
</style>