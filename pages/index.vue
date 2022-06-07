<template lang="pug">
div
  .hero.mb-16
  v-container
    top-about
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
    #event.mb-16
      h2.mb-2 EVENT
      v-row.mb-2
        v-col(cols="6")
          .insert-image
        v-col(cols="6")
          h2.mb-3 梅雨でも大丈夫、体育館でかくれんぼ
          v-row.mb-3(dense)
            v-col(cols="3")
              .font-weight-bold 開催日時
            v-col(cols="9")
              .font-weight-bold
                span 2022
                span.unit 年
                span 6
                span.unit 月
                span 19
                span.unit.me-1 日
                span 日
                span.unit.me-1 曜日
                span 9:30
                span.unit 開始
          v-row.mb-3(dense)
            v-col(cols="3")
              .font-weight-bold 開催場所
            v-col(cols="9") 
              .font-weight-bold
                span.me-3 赤堀体育館
                span.unit 〒379-2204 群馬県伊勢崎市西久保町２丁目８１
          v-row.mb-3(dense)
            v-col(cols="3")
              .font-weight-bold 参加費
            v-col(cols="9")
              .font-weight-bold 無料
          v-row(dense)
            v-col(cols="3")
              .font-weight-bold スケジュール
            v-col(cols="9")
              .event-schedule
                ul.timeline.caption.font-weight-bold
                  li.schedule
                    .tl-item
                      span.me-3 9:30~10:00
                      span 会場 / 受付
                  li.schedule
                    .tl-item
                      span.me-3 10:00~10:30
                      span 挨拶、ルール説明、準備運動
                  li.schedule
                    .tl-item
                      span.me-3 10:30~12:00
                      span スポーツかくれんぼ実施
                  li.schedule
                    .tl-item
                      span.me-3 12:00~12:30
                      span 表彰、クロージング
      v-btn.border-bold.font-weight-bold(
        tile
        outlined
        large
      ) かくれんぼへの参加申込はこちらから！
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
.insert-image
  width: 100%
  padding-top: 60%
  background-color: #f4f4f4
.border-bold
  border-color: black !important
  border-width: 3px !important
.unit
  font-size: 10px
.event-schedule
  .timeline
    padding: 0
    margin: 0
    box-sizing: border-box
    list-style: none
    .schedule
      margin-left: 5px
      .tl-item
        padding: 10px 0 10px 20px
        border-color: black
        border-style: solid
        border-width: 0 0 0 2px
        margin: 0 0 0 -1px
        &:before
          content: ""
          width: 10px
          height: 10px
          background-color: white
          box-shadow: 0 0 0 4px white
          border-color: inherit
          border-width: 3px
          border-radius: 50%
          border-style: solid
          margin: 0 0 0 -26px
          position: relative
          top: 5px
          float: left
</style>