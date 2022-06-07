<template lang="pug">
section#event
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
            ul.timeline.unit.font-weight-bold
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
  parts-cta-btn かくれんぼへの参加申込はこちらから！
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class TopEvent extends Vue {}
</script>

<style lang="sass" scoped>
.unit
  font-size: 12px
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