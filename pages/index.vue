<template lang="pug">
div
  .hero.mb-16
  v-spacer
  v-container
    v-row.mb-16
      v-col(cols="6" order="2" lg)
        .insert-image
      v-col(cols="6" order="1" lg)
        h2.mb-2 スポかくとは？
        .description
          p
            | 「スポーツかくれんぼ（通称: スポかく）」は皆さんが一度は遊んだことがあるであろう
            | かくれんぼに得点要素を加えてできた、全く新しいスポーツです。缶蹴りのように鬼は
            | 拠点を守りながら探し、隠れる側は鬼に見つからないように拠点を攻める、子供の頃に
            | 遊んだかくれんぼよりもより白熱して楽しむことができます。
          p
            | 下は4歳から上は60代まで、老若男女別け隔てなく同じフィールド、同じルールで楽しめる
            | ボーダレスなスポーツとして、発祥の地、群馬県を中心に、世界への展開を見据え
            | 日夜活動をしています。
        v-btn.border-bold.font-weight-bold(
          tile
          outlined
          large
        ) ルールを知りたい方はこちらから！
    #news.mb-16
      h2.mb-2 NEWS
      v-btn.border-bold.mb-3(
        v-for="news in newsList"
        :key="news.id"
        block
        tile
        outlined
        height="60px"
        :nuxt="!news.external"
        :to="news.external ? '' : news.url"
        :href="news.external ? news.url : ''"
        :target="news.external ? '_blank' : ''"
        :rel="news.external ? 'noopener' : ''"
      )
        span.body-2.me-5 {{ news.postedAt }}
        v-chip.me-5(label small) {{ news.category }}
        span.body-2 {{ news.title }}
        v-spacer
        v-icon mdi-chevron-right
      v-btn.border-bold.font-weight-bold(
        tile
        outlined
        large
      ) 過去のNEWSの一覧はこちらから！
    #service.mb-16
      h2.mb-2 SERVICE
      h3.mb-2 かくれんぼ出張開催
      h4.mb-5
        div スポーツかくれんぼを活用して
        div 企業や地域の課題解決をお手伝いします！
      v-row.mb-2
        v-col(cols="4")
          v-card.text-center.border-bold(
            tile
            outlined
          )
            v-card-text.title.font-weight-bold.text--primary 企業研修
            .insert-image
            v-card-text.caption.text--primary
              div 内定者や親友社員のチーム形成
              div 既存社員同士のより強い結束力の醸成に！
        v-col(cols="4")
          v-card.text-center.border-bold(
            tile
            outlined
          )
            v-card-text.title.font-weight-bold.text--primary 地域活性化
            .insert-image
            v-card-text.caption.text--primary
              div 地域の人々のつながり造り
              div 観光地への集客イベントに！
        v-col(cols="4")
          v-card.text-center.border-bold(
            tile
            outlined
          )
            v-card-text.title.font-weight-bold.text--primary 商業施設イベント
            .insert-image
            v-card-text.caption.text--primary
              div 週末や季節ごとの集客
              div 来場者の購買促進イベントに！
      v-btn.border-bold.font-weight-bold(
        tile
        outlined
        large
      ) 出張開催についての詳細はこちらから！
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { News } from "~/types"

@Component
export default class TopPage extends Vue {
  newsList: News[] = [
    {
      id: 3,
      postedAt: '2022.06.09',
      category: 'EVENT',
      title: '【7月のかくれんぼ選手権】お申し込み受付中です！',
      url: '',
      external: true
    },
    {
      id: 2,
      postedAt: '2022.06.08',
      category: 'MEDIA',
      title: 'NHKにてスポーツかくれんぼが特集されました！',
      url: '',
      external: true
    },
    {
      id: 1,
      postedAt: '2022.06.07',
      category: 'NEWS',
      title: 'ホームページをリニューアルしました！',
      url: '',
      external: false
    }
  ]
}
</script>

<style lang="sass">
.hero
  width: 100%
  height: calc(100vh - 64px)
  background-color: #f4f4f4
.description
  font-size: 13px
  letter-spacing: 3px
.insert-image
  width: 100%
  padding-top: 60%
  background-color: #f4f4f4
.border-bold
  border-color: black !important
  border-width: 3px !important
</style>