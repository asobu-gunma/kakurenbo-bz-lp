<template lang="pug">
div
  parts-hero(title="運営者情報")
  v-container
    section.mb-16
      h2.section-title.text-center.mb-5 運営団体
      img.logo-org.mb-8(src="~/assets/images/logo-org.svg")
      table.org-info.mx-auto
        tr
          td 団体名
          td かくれんぼ in ぐんま
        tr
          td 代表者
          td 豊川 雄太
        tr
          td 設立
          td 2020年8月
    section.mb-16
      h2.section-title.text-center.mb-5 運営理念
      h3.text-center.mb-3 MISSION
      h1.text-center.mb-3 かくれんぼを世界に持っていく
      .description.text-center
        div 群馬県にて、些細なキッカケから生まれた「スポーツかくれんぼ」
        div 生まれた理由が何であれ、やってみればめちゃくちゃ楽しい
        div こんなにも楽しいものを群馬だけに留めておくのはもったいない
        div せっかくならば人生を掛けて世界へ持っていく
        div 原動力はただそれだけです 
      h3.text-center.mb-3 VISION
      v-row
        v-col(cols="6")
          h3.text-center.mb-3 Challengingな世界
          .description.text-center
            | かくれんぼ「でも」世界的に有名にすることができるできるのか
            | そんな風に一見難しく見える「挑戦」のハードルを下げ
            | もっともっとみんなが挑戦しやすい世界を作りたい
        v-col(cols="6")
          h3.text-center.mb-3 Universalな世界
          .description.text-center
            | 子供、大人、女性、男性、日本人、外国人、障害者、健常者
            | これらの言葉が持つ固定観念をかくれんぼを通じてなくし
            | 皆一人の人間としてフラットな繋がりを持てる世界を作りたい
      h3.text-center.mb-3 VALUE
      v-row
        v-col(cols="6")
          h3.text-center.mb-3 Challenging
          .description.text-center 失敗を受け入れ、積極的に挑戦すること
        v-col(cols="6")
          h3.text-center.mb-3 Sharing
          .description.text-center 成功も失敗もすべて皆に共有すること
        v-col(cols="6")
          h3.text-center.mb-3 Universal
          .description.text-center 誰もが参加できるようにすること
        v-col(cols="6")
          h3.text-center.mb-3 Exciting
          .description.text-center 楽しい、面白い、ワクワクするが根源となること
    section.mb-16
      h2.section-title.text-center.mb-5 運営メンバー
      v-row
        v-col(cols="3")
          v-card
            .photo
            v-card-text
              .body-1 豊川 雄太
              .caption 運営代表
        v-col(cols="3")
          v-card
            .photo
            v-card-text
              .body-1 高野 紀幸
              .caption フィールド開発責任者
        v-col(cols="3")
          v-card
            .photo
            v-card-text
              .body-1 請地 直之
              .caption フィールド開発主任
        v-col(cols="3")
          v-card
            .photo
            v-card-text
              .body-1 原田 朋樹
              .caption イベント運営
        v-col(cols="3")
          v-card
            .photo
            v-card-text
              .body-1 高橋 楓
              .caption PRディレクター
        v-col(cols="3")
          v-card
            .photo
            v-card-text
              .body-1 増渕 拓海
              .caption PRメンバー / イベント運営
        v-col(cols="3")
          v-card
            .photo
            v-card-text
              .body-1 大竹 倫平
              .caption PRメンバー / イベント運営
  parts-contact-btn
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class OrganizationPage extends Vue {}
</script>

<style lang="sass" scoped>
.section-title
  font-size: 30px
  font-weight: bold
.logo-org
  width: 160px
  height: auto
  display: block
  margin: 0 auto
.org-info
  tr
    td
      padding-bottom: 0.25rem
      &:first-child
        font-weight: bold
        padding-right: 0.75rem
.photo
  width: 100%
  padding-bottom: 100%
  background-color: #f4f4f4
.description
  font-size: 16px
  letter-spacing: 3px
  line-height: 1.8
</style>

