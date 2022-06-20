<template lang="pug">
div
  parts-hero.mb-16(
    title="SERVICE"
    subtitle="サービス紹介"
    :image="heroImage"
  )
  v-container
    section.text-center.section-margin
      h2.section-title.mb-8 かくれんぼ出張開催
      .description
        div ご要望・目的に応じて「スポーツかくれんぼ」を出張開催いたします。
        div 楽しさをベースに、様々な課題解決のお手伝いをいたします。
    section.section-margin
      h2.section-title.text-center.mb-8 特徴
      v-row.mb-3
        v-col(cols="12" md="6")
          .insert-image(:style="{'background-image': `url(${require('~/assets/images/feature_enjoy.jpg')})`}")
        v-col(cols="12" md="6")
          h3.point.mb-2
            div やれば楽しい、気づけば夢中！
            div ワクワクの体験を提供！
          .description
            p
              | 誰もが一度はやったことがある「かくれんぼ」をベースとしたスポーツです。
              | 楽しさはご想像の通り。思った以上に頭を使い、体を動かし、戦術なんかも奥が深い。
              | 勝ち負けもありますが、シンプルに楽しいという「体験の共有」を味わうことができます。
      v-row.mb-3
        v-col(cols="12" md="6")
          .insert-image(:style="{'background-image': `url(${require('~/assets/images/feature_team_building.jpg')})`}")
        v-col(cols="12" md="6")
          h3.point.mb-2
            div チームビルディングを体感！
          .description
            p
              | 基本はチーム戦となるため、チームワークが勝敗の鍵を握ります。
              | 誰が鬼をやるのか？隠れるのに徹するのか？攻めに徹するのか？など、チーム全員で話し合い、実際のゲームで試す。
              | その結果を振り返り、次のゲームに向けて新たに作戦を立てる。かくれんぼの中でPDCAを回すことができます。
      v-row.mb-3
        v-col(cols="12" md="6")
          .insert-image(:style="{'background-image': `url(${require('~/assets/images/feature_noborder.jpg')})`}")
        v-col(cols="12" md="6")
          h3.point.mb-2
            div 年齢・性別・国籍関係なし！
          .description
            p
              | 体力、知力、チームワークそれから隠れる上手さなど、単純な運動能力勝負ではないため、
              | 年齢・性別・国籍に関係なく誰もが楽しむことができます。世代が離れていても、
              | 同じフィールド、同じルールで楽しむことができるので、世代間のコミュニケーションに課題がある企業にはもってこいです。
    section.section-margin
      h2.section-title.text-center.mb-8 イベント当日の流れ
      .step-flow
        v-card.step-card
          v-card-text
            .d-flex.align-center
              v-chip.me-3(color="amber") 1
              span.body-1.font-weight-bold.me-3.text--primary オープニング
              span.caption 所要時間: 15分
          .insert-image(:style="{'background-image': `url(${require('~/assets/images/game_flow_opening.jpg')})`}")
          v-card-text.text--primary
            | 運営スタッフ主導のもの開催の挨拶、ルール説明を行います。
            | 怪我防止のため、準備運動も行います。
        v-icon.pc-icon(x-large) mdi-chevron-right
        v-icon.sp-icon(x-large) mdi-chevron-down
        v-card.step-card
          v-card-text
            .d-flex.align-center
              v-chip.me-3(color="amber") 2
              span.body-1.font-weight-bold.me-3.text--primary かくれんぼ実施
              span.caption 所要時間: 60~120分
          .insert-image(:style="{'background-image': `url(${require('~/assets/images/game_flow_playing.jpg')})`}")
          v-card-text.text--primary
            | チームに分かれてかくれんぼを実施します。
            | 1チームあたり2〜3セットのかくれんぼを体験する中で
            | チーム内の結束を高めていただきます。
        v-icon.pc-icon(x-large) mdi-chevron-right
        v-icon.sp-icon(x-large) mdi-chevron-down
        v-card.step-card
          v-card-text
            .d-flex.align-center
              v-chip.me-3(color="amber") 3
              span.body-1.font-weight-bold.me-3.text--primary クロージング
              span.caption 所要時間: 15分
          .insert-image(:style="{'background-image': `url(${require('~/assets/images/game_flow_closing.jpg')})`}")
          v-card-text.text--primary
            | 優勝チームの発表、表彰を行います。
            | 閉会の挨拶を行い、イベントは終了となります。
            | 終了後の記念撮影なども承っています。
    section.section-margin
      h2.section-title.text-center 料金
      .fee.text-center.mb-5
        span.unit 基本料金
        span.value 30
        span.unit 万円〜
      .body-1.font-weight-bold.text-center.mb-5 料金内訳
      .d-flex.justify-center.mb-10
        ul.body-2
          li 開催までのディレクション費用
          li スポーツかくれんぼライセンス費用
          li 設備・備品レンタル費用
          li 設備設置費用
          li 当日の運営スタッフ費用
      .body-1.font-weight-bold.text-center.mb-5 料金に含まれないもの
      .d-flex.justify-center
        ul.body-2
          li 会場使用料
          li 設備運搬費用
          li イベント保険料
          li スタッフ交通費・宿泊費
    section.section-margin
      h2.section-title.text-center.mb-8 お申込みから開催までの流れ
      .step-flow
        v-card.step-card
          v-card-text
            .d-flex.align-center
              v-chip.me-3(color="amber") 1
              span.body-1.font-weight-bold.me-3.text--primary ヒアリング・提案
              span.caption 開催1〜2ヶ月前
          .insert-image(:style="{'background-image': `url(${require('~/assets/images/event_flow_meeting.jpg')})`}")
          v-card-text.text--primary
            | 目的やご要望をヒアリングし、最適な開催形式を
            | ご提案いたします。ご提案については無理な営業は行わず
            | 双方が納得行く形の内容をご提示いたします。
        v-icon.pc-icon(x-large) mdi-chevron-right
        v-icon.sp-icon(x-large) mdi-chevron-down
        v-card.step-card
          v-card-text
            .d-flex.align-center
              v-chip.me-3(color="amber") 2
              span.body-1.font-weight-bold.me-3.text--primary 準備・打ち合わせ
              span.caption 開催1ヶ月〜1週間前
          .insert-image(:style="{'background-image': `url(${require('~/assets/images/event_flow_prepare.jpg')})`}")
          v-card-text.text--primary
            | お申込み後、イベント開催のスケジュールから逆算し
            | 準備を開始いたします。必要に応じて適宜打ち合わせを
            | 行い、当日に向けた詰めを行います。
        v-icon.pc-icon(x-large) mdi-chevron-right
        v-icon.sp-icon(x-large) mdi-chevron-down
        v-card.step-card
          v-card-text
            .d-flex.align-center
              v-chip.me-3(color="amber") 3
              span.body-1.font-weight-bold.me-3.text--primary イベント開催
              span.caption 当日
          .insert-image(:style="{'background-image': `url(${require('~/assets/images/event_flow_start.jpg')})`}")
          v-card-text.text--primary
            | 幹事さま、運営スタッフにて、参加者の準備が
            | 整ったことを確認し、イベントを開催します。
            | 当日の進行は基本的には運営スタッフが行います。
    section.section-margin
      h2.section-title.text-center.mb-8 かくれんぼの活用シーン例
      v-row.mb-2
        v-col(cols="12" md="4")
          parts-service-card(
            title="企業研修"
            description1="内定者や親友社員のチーム形成"
            description2="既存社員同士のより強い結束力の醸成に！"
            :image="sampleTraining"
          )
        v-col(cols="12" md="4")
          parts-service-card(
            title="地域活性化"
            description1="地域の人々のつながり造り"
            description2="観光地への集客イベントに！"
            :image="sampleLocal"
          )
        v-col(cols="12" md="4")
          parts-service-card(
            title="商業施設イベント"
            description1="週末や季節ごとの集客"
            description2="来場者の購買促進イベントに！"
            :image="sampleShop"
          )
        // v-col(cols="4")
          parts-service-card(
            title="企業・学校イベント"
            description1="企業の懇親会や行事イベント"
            description2="学校の学園祭・体育祭に！"
          )
        // v-col(cols="4")
          parts-service-card(
            title="労働組合レク"
            description1="組合員同士やご家族を招いた"
            description2="レクリエーションイベントに！"
          )
        // v-col(cols="4")
          parts-service-card(
            title="企画・PR"
            description1="「かくれんぼ」というキーワードを活用し"
            description2="商品や動画などの企画・PRに！"
          )
  section.cta-area
    h2.mb-5
      div 童心に返ってワクワクを体験したい方
      div まずはご相談ください。
    v-btn(
      x-large
      color="amber"
      link
      nuxt
      to="/contact"
    )
      .font-weight-bold ご相談はこちらから！
  parts-contact-btn
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import heroImage from '~/assets/images/header_service.jpg'
import sampleTraining from '~/assets/images/sample_training.jpg'
import sampleLocal from '~/assets/images/sample_local.jpg'
import sampleShop from '~/assets/images/sample_shop.jpg'

@Component
export default class ServicePage extends Vue {
  head() {
    return {
      title: `サービス紹介 - ${process.env.projectName}`
    }
  }
  heroImage = heroImage
  sampleTraining = sampleTraining
  sampleLocal = sampleLocal
  sampleShop = sampleShop
}
</script>

<style lang="sass" scoped>
.section-title
  font-size: 30px
  font-weight: bold
  @include display_sp
    font-size: 24px !important
.point
  font-size: 30px
  font-weight: bold
  letter-spacing: 3px
  @include display_sp
    font-size: 20px !important
.description
  font-size: 16px
  letter-spacing: 3px
  line-height: 2
  @include display_sp
    font-size: 14px !important
.step-flow
  display: flex
  @include display_sp
    display: block
    width: 100%
    text-align: center
  .step-card
    width: 100%
    text-align: left
  .pc-icon
    @include display_sp
      display: none
  .sp-icon
    @include display_pc
      display: none
    @include display_tab
      display: none
.fee
  font-weight: bold
  .unit
    font-size: 40px
    @include display_sp
      font-size: 30px !important
  .value
    font-size: 80px
    @include display_sp
      font-size: 60px !important
.cta-area
  text-align: center
  background-color: #f4f4f4
  padding: 50px 0
  h2
    font-size: 18px
</style>
