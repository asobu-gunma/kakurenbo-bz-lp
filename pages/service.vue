<template lang="pug">
div
  parts-hero(title="サービス")
  v-container
    section.text-center.mb-16
      h2.section-title.mb-5 かくれんぼ出張開催
      .description
        div ご要望・目的に応じて「スポーツかくれんぼ」を出張開催いたします。
        div 楽しさをベースに、様々な課題解決のお手伝いをいたします。
    section.mb-16
      h2.section-title.text-center.mb-5 特徴
      v-row.mb-3
        v-col(cols="6")
          .insert-image
        v-col(cols="6")
          h3.point.mb-2
            div やれば楽しい、気づけば夢中！
            div の体験を提供！
          .description
            p
              | 誰もが一度はやったことがある「かくれんぼ」をベースとしたスポーツです。
              | 楽しさはご想像の通り。思った以上に頭を使い、体を動かし、戦術なんかも奥が深い。
              | 勝ち負けもありますが、シンプルに楽しいという「体験の共有」を味わうことができます。
      v-row.mb-3
        v-col(cols="6")
          .insert-image
        v-col(cols="6")
          h3.point.mb-2
            div チームビルディングを体感！
          .description
            p
              | 基本はチーム戦となるため、チームワークが勝敗の鍵を握ります。
              | 誰が鬼をやるのか？隠れるのに徹するのか？攻めに徹するのか？など、チーム全員で話し合い、実際のゲームで試す。
              | その結果を振り返り、次のゲームに向けて新たに作戦を立てる。かくれんぼの中でPDCAを回すことができます。
      v-row.mb-3
        v-col(cols="6")
          .insert-image
        v-col(cols="6")
          h3.point.mb-2
            div 年齢・性別・国籍関係なし！
          .description
            p
              | 体力、知力、チームワークそれから隠れる上手さなど、単純な運動能力勝負ではないため、
              | 年齢・性別・国籍に関係なく誰もが楽しむことができます。世代が離れていても、
              | 同じフィールド、同じルールで楽しむことができるので、世代間のコミュニケーションに課題がある企業にはもってこいです。
    section.mb-16
      h2.section-title.text-center.mb-5 イベント当日の流れ
      .d-flex
        v-card.step-card
          v-card-text
            .step-title.mb-3
              v-chip.me-3(color="teal" dark) 1
              span.body-1.font-weight-bold.me-3 オープニング
              span.caption 所要時間: 15分
            .step-description
              | 運営スタッフ主導のもの開催の挨拶、ルール説明を行います。
              | 怪我防止のため、準備運動も行います。
        v-icon(large) mdi-chevron-right
        v-card.step-card
          v-card-text
            .step-title.mb-3
              v-chip.me-3(color="teal" dark) 2
              span.body-1.font-weight-bold.me-3 かくれんぼ実施
              span.caption 所要時間: 60~120分
            .step-description
              | チームに分かれてかくれんぼを実施します。
              | 1チームあたり2〜3セットのかくれんぼを体験する中で
              | チーム内の結束を高めていただきます。
        v-icon(large) mdi-chevron-right
        v-card.step-card
          v-card-text
            .step-title.mb-3
              v-chip.me-3(color="teal" dark) 3
              span.body-1.font-weight-bold.me-3 クロージング
              span.caption 所要時間: 15分
            .step-description
              | 優勝チームの発表、表彰を行います。
              | 閉会の挨拶を行い、イベントは終了となります。
              | 終了後の記念撮影なども承っています。
    section.mb-16
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
    section.mb-16
      h2.section-title.text-center.mb-5 お申込みから開催までの流れ
      .d-flex
        v-card.step-card
          v-card-text
            .step-title.mb-3
              v-chip.me-3(color="teal" dark) 1
              span.body-1.font-weight-bold.me-3 ヒアリング・提案
              span.caption 開催1〜2ヶ月前
            .step-description
              | 目的やご要望をヒアリングし、最適な開催形式を
              | ご提案いたします。ご提案については無理な営業は行わず
              | 双方が納得行く形の内容をご提示いたします。
        v-icon(large) mdi-chevron-right
        v-card.step-card
          v-card-text
            .step-title.mb-3
              v-chip.me-3(color="teal" dark) 2
              span.body-1.font-weight-bold.me-3 準備・打ち合わせ
              span.caption 開催1ヶ月〜1週間前
            .step-description
              | お申込み後、イベント開催のスケジュールから逆算し
              | 準備を開始いたします。必要に応じて適宜打ち合わせを
              | 行い、当日に向けた詰めを行います。
        v-icon(large) mdi-chevron-right
        v-card.step-card
          v-card-text
            .step-title.mb-3
              v-chip.me-3(color="teal" dark) 3
              span.body-1.font-weight-bold.me-3 イベント開催
              span.caption 当日
            .step-description
              | 幹事さま、運営スタッフにて、参加者の準備が
              | 整ったことを確認し、イベントを開催します。
              | 当日の進行は基本的には運営スタッフが行います。
    section.mb-16
      h2.section-title.text-center.mb-5 かくれんぼの活用シーン例
      v-row.mb-2
        v-col(cols="4")
          parts-service-card(
            title="企業研修"
            description1="内定者や親友社員のチーム形成"
            description2="既存社員同士のより強い結束力の醸成に！"
          )
        v-col(cols="4")
          parts-service-card(
            title="地域活性化"
            description1="地域の人々のつながり造り"
            description2="観光地への集客イベントに！"
          )
        v-col(cols="4")
          parts-service-card(
            title="商業施設イベント"
            description1="週末や季節ごとの集客"
            description2="来場者の購買促進イベントに！"
          )
        v-col(cols="4")
          parts-service-card(
            title="企業・学校イベント"
            description1="企業の懇親会や行事イベント"
            description2="学校の学園祭・体育祭に！"
          )
        v-col(cols="4")
          parts-service-card(
            title="労働組合レク"
            description1="組合員同士やご家族を招いた"
            description2="レクリエーションイベントに！"
          )
        v-col(cols="4")
          parts-service-card(
            title="企画・PR"
            description1="「かくれんぼ」というキーワードを活用し"
            description2="商品や動画などの企画・PRに！"
          )
  .cta-area
    h2.mb-5
      div 童心に返ってワクワクを体験したい方
      div まずはご相談ください。
    v-btn(tile depressed x-large color="grey")
      .font-weight-bold ご相談はこちらから！
  parts-contact-btn
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class ServicePage extends Vue {}
</script>

<style lang="sass" scoped>
.section-title
  font-size: 30px
  font-weight: bold
.point
  font-size: 30px
  font-weight: bold
  letter-spacing: 3px
.description
  font-size: 16px
  letter-spacing: 3px
  line-height: 1.8
.step-card
  width: 100%
.fee
  font-weight: bold
  .unit
    font-size: 40px
  .value
    font-size: 80px
.cta-area
  text-align: center
  background-color: #f4f4f4
  padding: 50px 0
</style>