<template lang="pug">
div
  parts-hero(title="お問い合わせ")
  v-container
    section.mb-16
      .desctiption.text-center.font-weight-bold.mb-10
        div メールでのお問い合わせは下記のフォームより
        div 必要項目をご入力の上お問い合わせください
      v-row(no-gutters)
        v-col(offset="3" cols="6")
          v-form
            .d-flex.body-1.font-weight-bold.mb-2
              .me-2 お問い合わせの種別をお選びください
              v-chip(small label) 必須
            v-select(
              outlined
              dense
              required
            )
            .d-flex.body-1.font-weight-bold.mb-2
              .me-2 お名前
              v-chip(small label) 必須
            v-text-field(
              outlined
              dense
              required
            )
            .d-flex.body-1.font-weight-bold.mb-2
              .me-2 メールアドレス
              v-chip(small label) 必須
            v-text-field(
              outlined
              dense
              type="email"
              required
            )
            .d-flex.body-1.font-weight-bold.mb-2 電話番号
            v-text-field(
              outlined
              dense
              type="tel"
            )
            .d-flex.body-1.font-weight-bold.mb-2
              .me-2 団体名
              v-chip(small label) 必須
            v-text-field(
              outlined
              dense
              required
            )
            .d-flex.body-1.font-weight-bold.mb-2
              .me-2 ご依頼内容をお選びください（複数選択可）
              v-chip(small label) 必須
            v-row.mb-5
              v-col(cols="3")
                v-checkbox(
                  hide-details
                  value="資料請求"
                  label="資料請求"
                )
              v-col(cols="3")
                v-checkbox(
                  hide-details
                  value="打ち合わせ"
                  label="打ち合わせ"
                )
              v-col(cols="3")
                v-checkbox(
                  hide-details
                  value="見積もり"
                  label="見積もり"
                )
              v-col(cols="3")
                v-checkbox(
                  hide-details
                  value="その他"
                  label="その他"
                )
            .d-flex.body-1.font-weight-bold.mb-2 質問 / 要望 / メッセージがあればご入力ください
            v-textarea(
              outlined
              rows="5"
            )
            .caption.mb-8
              div ＜お問い合わせへのご回答について＞
              ul
                li 営業担当よりメールまたはお電話にてご回答させていただきます。
                li 内容を確認しまして、当日以降にご回答させていただきますので今しばらくお待ち下さい。
            .text-center
              v-btn(
                depressed
                large
              ) 上記の内容で送信する
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class ContactPage extends Vue {}
</script>

<style lang="sass" scoped>
.description
  font-size: 14px
  letter-spacing: 3px
.rule
  font-size: 14px
  letter-spacing: 3px
  li
    margin-bottom: 0.5rem
.rule-book
  width: 100%
  height: 100%
  background-color: #f4f4f4
</style>

