<template lang="pug">
v-app-bar(app flat)
  img.logo(src="~/assets/images/logo-short.svg")
  v-spacer
  v-btn(text) スポかくとは？
  v-btn(text) ニュース
  v-btn(text) サービス
  v-btn(text) 運営者情報
  v-btn(text) お問い合わせ
  v-btn(text)
    span.me-1 ブログ
    v-icon(dense) mdi-open-in-new
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class GlobalHeader extends Vue {}
</script>

<style lang="sass" scoped>
.logo
  height: 45px
  width: auto
</style>