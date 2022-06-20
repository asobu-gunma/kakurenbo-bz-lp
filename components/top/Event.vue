<template lang="pug">
section#event
  parts-section-title.mb-2(
    main="EVENT"
    sub="公式イベント"
  )
  v-row.mb-2
    v-col(cols="12" md="6")
      v-img(
        v-if="!!event"
        :src="event.fields.image.fields.file.url"
        width="100%"
        aspect-ratio="1.7778"
      )
      .insert-image(
        v-else
      )
    v-col(cols="12" md="6")
      template(v-if="!!event")
        h2.mb-3 {{ event.fields.title }}
        v-row.mb-3(dense)
          v-col(cols="12" md="3")
            .font-weight-bold 開催日時
          v-col(cols="12" md="9")
            .font-weight-bold
              span {{ datetimeArray[0] }}
              span.unit 年
              span {{ datetimeArray[1] }}
              span.unit 月
              span {{ datetimeArray[2] }}
              span.unit.me-1 日
              span {{ datetimeArray[3] }}
              span.unit.me-1 曜日
              span {{ datetimeArray[4] }}
              span.unit 開始
        v-row.mb-3(dense)
          v-col(cols="12" md="3")
            .font-weight-bold 開催場所
          v-col(cols="12" md="9") 
            .font-weight-bold
              span.me-3 {{ event.fields.location }}
              span.unit {{ event.fields.address }}
        v-row.mb-3(dense)
          v-col(cols="12" md="3")
            .font-weight-bold 参加費
          v-col(cols="12" md="9")
            .font-weight-bold {{ event.fields.fee === 0 ? '無料' : event.fields.fee + '円' }}
        v-row(dense)
          v-col(cols="12" md="3")
            .font-weight-bold スケジュール
          v-col(cols="12" md="9")
            .event-schedule
              ul.timeline.unit.font-weight-bold
                li.schedule(v-for="schedule in event.fields.eventSchedule")
                  .tl-item
                    span.me-3 {{ schedule.time }}
                    span {{ schedule.content }}
      template(v-else)
        h2.mb-3 直近開催予定のイベントはありません
        .description 開催予定が決まり次第随時更新いたします。
  parts-cta-btn(
    v-if="!!event"
    url="https://www.kakurenbo.club/event"
    external
  ) かくれんぼへの参加申込はこちらから！
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class TopEvent extends Vue {
  @Prop({ type: Object, required: true })
  readonly event!: object

  parseDatetimeArray(datetime: any): string[] {
    //@ts-ignore
    return this.$dateFns.format(datetime, "yyyy,M,d,E,H:mm", { locale: 'ja' }).split(',')
  }

  get datetimeArray(): string[] {
    //@ts-ignore
    return this.parseDatetimeArray(this.event.fields.eventDate)
  }
}
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