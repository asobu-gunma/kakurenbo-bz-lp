<template lang="pug">
div
  parts-hero(
    title="What's SPOKAKU"
    subtitle="スポかくとは？"
    :image="heroImage"
  )
  v-container
    v-row.mb-16
      v-col(cols="6")
        h2.mb-2
          div 大人も子供も一緒に楽しめる
          div 全く新しいボーダレスなスポーツ
        .description
          p
            | 誰もが一度は遊んだことがあるであろう「かくれんぼ」に得点要素を加えてできたのが
            | スポーツかくれんぼ、通称「スポかく」です。缶蹴りのように鬼と子（隠れる側）に
            | 別れ、鬼は子を探し、子は鬼の拠点をタッチする、そんな攻防を繰り返して、得点を
            | 競い合うスポーツです。
          p
            | 運動能力が高ければ良いというわけではなく、鬼を出し抜く戦略性や隠れる上手さ、
            | チームワークなど様々な要素が絡み合います。そのため子供が大人を負かせる様な場面も
            | 日常茶飯事。そんなこともあり大人も子供も同じルール、同じフィールドで楽しめる
            | ことからボーダレス（境なく誰でも参加できる）なスポーツと呼んでいます。
      v-col(cols="6")
        parts-youtube(id="C6BzQU4_5AE")
    parts-section-title.mb-2(
      main="RULE"
      sub="公式ルール"
    )
    v-row.mb-16
      v-col(cols="7")
        .description
          p
            | 公式ルールブックにあるルールの中から基本的なルールを一部ご紹介します。正式なルールをご覧になりたい方は
            | 公式ルールブックのPDF版をぜひダウンロードしてみてください。
        h3.mb-3 基本ルール
        ol.rule.mb-5
          li 鬼は1人、子（かくれる人）は7〜9人。鬼はじゃんけんやくじ引き等で決める。 
          li かくれる時間は10秒。鬼は拠点の近くで目をつぶって10秒数える。
          li 10秒数え終わったら、鬼は子を探し始める。探索時間は5分間。
          li 鬼は拠点に触れた状態で「〇〇（名前、番号、色など）見つけ）」と宣言することで、子を確保することができる。
          li 確保された子は場外で待機する。
          li 子は鬼に見つかる前に拠点にタッチすることで、これまでに確保された子を開放することができる。開放後、鬼は改めて10秒数え、子はその間に隠れる。
          li 鬼は全員を確保することができた場合、子を開放してゲームを続行する。
          li 制限時間が0になったタイミングでゲームが終了する。
        h3.mb-3 得点ルール
        ol.rule.mb-5
          li 鬼は子を見つけると+1点する。
          li 子は拠点にタッチすると+3点する。
          li 鬼は制限時間内に全員を見つけることができた場合、ボーナスポイントとして残り時間の分数 + 1点獲得する。
          li ゲーム終了後に得点が一番多い人が勝利となる。
        parts-cta-btn 公式ルールブックのダウンロードはこちら！
      v-col(cols="5")
        img.rule-book(
          src="~/assets/images/rule_book.png"
          alt="公式ルールブック"
        )
        .caption.text-right.text--grey 公式ルールブック
  parts-contact-btn
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import heroImage from '~/assets/images/header_about.jpg'

@Component
export default class AboutPage extends Vue {
  heroImage = heroImage
}
</script>

<style lang="sass" scoped>
.rule
  font-size: 14px
  letter-spacing: 3px
  li
    margin-bottom: 0.75rem
.rule-book
  width: 100%
  height: auto
</style>
