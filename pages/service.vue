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
      parts-service-feature(
        v-for="feature in featureList"
        :key="feature.alt"
        :image="feature.image"
        :alt="feature.alt"
        :titleList="feature.titleList"
        :description="feature.description"
      )
    section.section-margin
      h2.section-title.text-center.mb-8 イベント当日の流れ
      .step-flow
        parts-step-card(
          step="1"
          :title="gameFlow[0].title"
          :caption="gameFlow[0].caption"
          :image="gameFlow[0].image"
          :description="gameFlow[0].description"
        )
        v-icon.pc-icon(x-large) mdi-chevron-right
        v-icon.sp-icon(x-large) mdi-chevron-down
        parts-step-card(
          step="2"
          :title="gameFlow[1].title"
          :caption="gameFlow[1].caption"
          :image="gameFlow[1].image"
          :description="gameFlow[1].description"
        )
        v-icon.pc-icon(x-large) mdi-chevron-right
        v-icon.sp-icon(x-large) mdi-chevron-down
        parts-step-card(
          step="3"
          :title="gameFlow[2].title"
          :caption="gameFlow[2].caption"
          :image="gameFlow[2].image"
          :description="gameFlow[2].description"
        )
    section.section-margin
      h2.section-title.text-center 料金
      .fee.text-center.mb-5
        span.unit 基本料金
        span.value 5
        span.unit 万円〜
      .body-1.font-weight-bold.text-center.mb-5 料金内訳
      .d-flex.justify-center.mb-10
        ul.body-2
          li 開催までのディレクション費用
          li スポーツかくれんぼライセンス費用
          li 設備・備品レンタル費用
          li 設備設置費用
      .body-1.font-weight-bold.text-center.mb-5 料金に含まれないもの
      .d-flex.justify-center
        ul.body-2
          li 会場使用料
          li 設備運搬費用
          li イベント保険料
          li 当日の運営スタッフ費用
          li スタッフ交通費・宿泊費
    section.section-margin
      h2.section-title.text-center.mb-8 利用者の声
      parts-service-feature(
        v-for="feature in voiceList"
        :key="feature.alt"
        :image="feature.image"
        :alt="feature.alt"
        :titleList="feature.titleList"
        :description="feature.description"
      )
    section.section-margin
      h2.section-title.text-center.mb-8 お申込みから開催までの流れ
      .step-flow
        parts-step-card(
          step="1"
          :title="eventFlow[0].title"
          :caption="eventFlow[0].caption"
          :image="eventFlow[0].image"
          :description="eventFlow[0].description"
        )
        v-icon.pc-icon(x-large) mdi-chevron-right
        v-icon.sp-icon(x-large) mdi-chevron-down
        parts-step-card(
          step="2"
          :title="eventFlow[1].title"
          :caption="eventFlow[1].caption"
          :image="eventFlow[1].image"
          :description="eventFlow[1].description"
        )
        v-icon.pc-icon(x-large) mdi-chevron-right
        v-icon.sp-icon(x-large) mdi-chevron-down
        parts-step-card(
          step="3"
          :title="eventFlow[2].title"
          :caption="eventFlow[2].caption"
          :image="eventFlow[2].image"
          :description="eventFlow[2].description"
        )
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
      to="/contact/"
    )
      .font-weight-bold ご相談はこちらから！
  parts-contact-btn
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import heroImage from '~/assets/images/header_service.jpg'
import featureEnjoy from '~/assets/images/feature_enjoy.jpg'
import featureTeamBuilding from '~/assets/images/feature_team_building.jpg'
import featureNoborder from '~/assets/images/feature_noborder.jpg'
import gameFlowOpening from '~/assets/images/game_flow_opening.jpg'
import gameFlowPlaying from '~/assets/images/game_flow_playing.jpg'
import gameFlowClosing from '~/assets/images/game_flow_closing.jpg'
import voice01 from '~/assets/images/voice01.jpg'
import voice02 from '~/assets/images/voice02.jpg'
import eventFlowMeeting from '~/assets/images/event_flow_meeting.jpg'
import eventFlowPrepare from '~/assets/images/event_flow_prepare.jpg'
import eventFlowStart from '~/assets/images/event_flow_start.jpg'
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
  featureList = [
    {
      image: featureEnjoy,
      alt: 'ワクワクの体験',
      titleList: [
        'やれば楽しい、気づけば夢中！',
        'ワクワクの体験を提供！'
      ],
      description: '誰もが一度はやったことがある「かくれんぼ」をベースとしたスポーツです。楽しさはご想像の通り。思った以上に頭を使い、体を動かし、戦術なんかも奥が深い。勝ち負けもありますが、シンプルに楽しいという「体験の共有」を味わうことができます。' 
    },
    {
      image: featureTeamBuilding,
      alt: 'チームビルディング',
      titleList: [
        'チームビルディングを体感！',
      ],
      description: '基本はチーム戦となるため、チームワークが勝敗の鍵を握ります。誰が鬼をやるのか？隠れるのに徹するのか？攻めに徹するのか？など、チーム全員で話し合い、実際のゲームで試す。その結果を振り返り、次のゲームに向けて新たに作戦を立てる。かくれんぼの中でPDCAを回すことができます。'
    },
    {
      image: featureNoborder,
      alt: 'ノーボーダースポーツ',
      titleList: [
        '年齢・性別・国籍関係なし！',
        'かくれんぼを通して親睦深まる！'
      ],
      description: '体力、知力、チームワークそれから隠れる上手さなど、単純な運動能力勝負ではないため、年齢・性別・国籍に関係なく誰もが楽しむことができます。世代が離れていても、同じフィールド、同じルールで楽しむことができるので、世代間のコミュニケーションに課題がある企業にはもってこいです。'
    },
  ]
  gameFlow = [
    {
      title: 'オープニング',
      caption: '所要時間: 15分',
      image: gameFlowOpening,
      description: '運営スタッフ主導のもの開催の挨拶、ルール説明を行います。怪我防止のため、準備運動も行います。'
    },
    {
      title: 'かくれんぼ実施',
      caption: '所要時間: 60〜120分',
      image: gameFlowPlaying,
      description: 'チームに分かれてかくれんぼを実施します。1チームあたり2〜3セットのかくれんぼを体験する中でチーム内の結束を高めていただきます。'
    },
    {
      title: 'クロージング',
      caption: '所要時間: 15分',
      image: gameFlowClosing,
      description: '優勝チームの発表、表彰を行います。閉会の挨拶を行い、イベントは終了となります。終了後の記念撮影なども承っています。'
    },
  ]
  voiceList = [
    {
      image: voice01,
      alt: '伊勢崎清明高校 体育祭',
      titleList: [
        '伊勢崎清明高校 体育祭'
      ],
      description: '学年別対抗戦でスポーツかくれんぼを採用しました。小さい頃に楽しんだかくれんぼが、本格的なスポーツとして楽しめるとは思ってもみませんでした。参加した学生たちも本気になり、一つのスポーツとして楽しむことができました！またやりたいです！'
    },
    {
      image: voice02,
      alt: '共愛学園前橋国際大学 クリスマス会',
      titleList: [
        '共愛学園前橋国際大学 クリスマス会'
      ],
      description: '年末のクリスマス会のコンテンツの1つとしてかくれんぼをやりました。初めて参加する学生がほとんどでしたが、子供の頃にやりなれた遊びなだけあり、すぐに慣れていました。白熱する場面も多く現場は大盛りあがりでした！！'
    },
  ]
  eventFlow = [
    {
      title: 'ヒアリング・提案',
      caption: '開催1〜2ヶ月前',
      image: eventFlowMeeting,
      description: '目的やご要望をヒアリングし、最適な開催形式をご提案いたします。ご提案については無理な営業は行わず双方が納得行く形の内容をご提示いたします。'
    },
    {
      title: '準備・打ち合わせ',
      caption: '開催1ヶ月〜1週間前',
      image: eventFlowPrepare,
      description: 'お申込み後、イベント開催のスケジュールから逆算し準備を開始いたします。必要に応じて適宜打ち合わせを行い、当日に向けた詰めを行います。'
    },
    {
      title: 'イベント開催',
      caption: '当日',
      image: eventFlowStart,
      description: '幹事さま、運営スタッフにて、参加者の準備が整ったことを確認し、イベントを開催します。当日の進行は基本的には運営スタッフが行います。'
    },
  ]
}
</script>

<style lang="sass" scoped>
.section-title
  font-size: 30px
  font-weight: bold
  @include display_sp
    font-size: 24px !important
.step-flow
  display: flex
  @include display_sp
    display: block
    width: 100%
    text-align: center
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
