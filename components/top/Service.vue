<template lang="pug">
section#service
  parts-section-title.mb-2(
    main="SERVICE"
    sub="サービス"
  )
  h3.mb-2 かくれんぼ出張開催
  h4.mb-5
    div スポーツかくれんぼを活用して
    div 企業や地域の課題解決をお手伝いします！
  v-row.mb-2
    v-col(cols="12" sm="4")
      parts-service-card(
        title="企業研修"
        description1="内定者や親友社員のチーム形成"
        description2="既存社員同士のより強い結束力の醸成に！"
        :image="sampleTraining"
      )
    v-col(cols="12" sm="4")
      parts-service-card(
        title="地域活性化"
        description1="地域の人々のつながり造り"
        description2="観光地への集客イベントに！"
        :image="sampleLocal"
      )
    v-col(cols="12" sm="4")
      parts-service-card(
        title="商業施設イベント"
        description1="週末や季節ごとの集客"
        description2="来場者の購買促進イベントに！"
        :image="sampleShop"
      )
  parts-cta-btn(url="/service/") 出張開催についての詳細はこちらから！
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import sampleTraining from '~/assets/images/sample_training.jpg'
import sampleLocal from '~/assets/images/sample_local.jpg'
import sampleShop from '~/assets/images/sample_shop.jpg'

@Component
export default class TopService extends Vue {
  sampleTraining = sampleTraining
  sampleLocal = sampleLocal
  sampleShop = sampleShop
}
</script>