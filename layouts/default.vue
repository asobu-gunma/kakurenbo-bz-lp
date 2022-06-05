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

@Component({
  components: {
    GlobalHeader,
    GlobalFooter,
  }
})
export default class DefaultLayout extends Vue {
  navItems: string[] = [
    'スポかくとは？',
    'ニュース',
    'サービス',
    '運営者情報',
    'お問い合わせ',
  ]
}
</script>