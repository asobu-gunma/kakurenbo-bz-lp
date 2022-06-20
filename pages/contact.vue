<template lang="pug">
div
  parts-hero.mb-16(
    title="Contact"
    subtitle="お問い合わせ"
    :image="heroImage"
  )
  v-container
    section.mb-16
      v-row(no-gutters)
        v-col(cols="12" md="6" offset-md="3")
          v-form(
            v-if="formInput.state === 'input'"
            v-model="valid"
          )
            .desctiption.text-center.font-weight-bold.mb-10
              div メールでのお問い合わせは下記のフォームより
              div 必要項目をご入力の上お問い合わせください
            .mb-5
              parts-input-label(
                text="お問い合わせの種別をお選びください"
                :required="true"
              )
              v-select(
                v-model="formInput.category"
                outlined
                dense
                required
                hide-details="auto"
                :items="categoryList"
                :rules="[validates.required]"
              )
            .mb-5
              parts-input-label(
                text="お名前"
                :required="true"
              )
              v-text-field(
                v-model="formInput.name"
                outlined
                dense
                required
                hide-details="auto"
                :rules="[validates.required]"
              )
            .mb-5
              parts-input-label(
                text="メールアドレス"
                :required="true"
              )
              v-text-field(
                v-model="formInput.email"
                outlined
                dense
                type="email"
                required
                hide-details="auto"
                :rules="[validates.required, validates.email]"
              )
            .mb-5
              parts-input-label(
                text="電話番号"
              )
              v-text-field(
                v-model="formInput.tel"
                outlined
                dense
                type="tel"
                hide-details="auto"
              )
            template(v-if="formInput.category !== 'other'")
              .mb-5
                parts-input-label(
                  text="企業 / 団体名"
                  :required="true"
                )
                v-text-field(
                  v-model="formInput.organization"
                  outlined
                  dense
                  required
                  hide-details="auto"
                  :rules="[validates.required]"
                )
            template(v-if="formInput.category === 'client'")
              .mb-5
                parts-input-label(
                  text="ご依頼内容をお選びください（複数選択可）"
                  :required="true"
                )
                v-checkbox(
                  v-for="(request, index) in requestList"
                  :key="index"
                  v-model="formInput.requests"
                  :hide-details="index < (requestList.length - 1)"
                  :value="request"
                  :label="request"
                  :rules="[validates.checked]"
                )
            .mb-5
              parts-input-label(
                text="ご質問 / ご要望 / メッセージがあればご入力ください"
                :required="formInput.category !== 'client'"
              )
              v-textarea(
                v-model="formInput.message"
                outlined
                rows="5"
                :required="formInput.category !== 'client'"
                hide-details="auto"
                :rules="[formInput.category !== 'client' ? validates.required : true]"
              )
            .caption.mb-8
              div ＜お問い合わせへのご回答について＞
              ul
                li 営業担当よりメールまたはお電話にてご回答させていただきます。
                li 内容を確認しまして、当日以降にご回答させていただきますので今しばらくお待ち下さい。
            .text-center
              v-btn(
                large
                color="amber"
                @click="formInput.state = 'confirm'"
                :disabled="!valid"
              ) 送信内容を確認する
          template(v-if="formInput.state === 'confirm'")
            .desctiption.text-center.font-weight-bold.mb-10
              div 下記の内容で問題がないか
              div ご確認ください
            parts-input-label(text="お問い合わせ種別")
            .mb-5 {{ selectedCategoryText }}
            parts-input-label(text="お名前")
            .mb-5 {{ formInput.name }}
            parts-input-label(text="メールアドレス")
            .mb-5 {{ formInput.email }}
            parts-input-label(text="電話番号")
            .mb-5 {{ formInput.tel || '-' }}
            template(v-if="formInput.category !== 'other'")
              parts-input-label(text="企業 / 団体名")
              .mb-5 {{ formInput.organization }}
            template(v-if="formInput.category === 'client'")
              parts-input-label(text="ご依頼内容")
              .mb-5 {{ formInput.requests.join("、") }}
            parts-input-label(text="ご質問 / ご要望 / メッセージ")
            .mb-10
              pre {{ formInput.message }}
            .text-center
              v-btn.me-3(
                large
                @click="formInput.state = 'input'"
              ) 入力画面に戻る
              v-btn(
                large
                color="amber"
                @click="sendMail"
              ) こちらの内容で送信する
          template(v-if="formInput.state === 'complete'")
            .desctiption.text-center.font-weight-bold.mb-10
              div お問い合わせを受け付けました
              div 数日以内にご連絡いたしますので少々お待ち下さい
            .text-center
              v-btn(
                large
                color="amber"
                nuxt
                link
                to="/"
              ) トップページへ戻る
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { Contact } from "~/types";
import heroImage from '~/assets/images/header_contact.jpg'

@Component
export default class ContactPage extends Vue {
  head() {
    return {
      title: `お問い合わせ - ${process.env.projectName}`
    }
  }
  heroImage = heroImage
  categoryList: any = [
    {
      text: 'かくれんぼ出張開催のご利用をご検討されている方',
      value: 'client',
    },
    {
      text: 'プレス・メディアの方',
      value: 'media',
    },
    {
      text: 'その他のお問い合わせの方',
      value: 'other',
    }
  ]
  requestList: string[] = [
    '資料請求',
    '打ち合わせ',
    '見積もり',
    'その他',
  ]

  formInput: Contact = {
    state: 'input',
    category: 'client',
    name: '',
    email: '',
    tel: '',
    organization: '',
    requests: [],
    message: ''
  }
  valid = true
  validates = {
    required: (value: string): boolean | string => !!value || "入力してください",
    checked: (value: string[]): boolean | string => value.length > 0 || "選択してください",
    email: (value: string): boolean | string => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || "正しく入力してください"
    }
  }

  async sendMail() {
    const {
      category,
      name,
      email,
      tel,
      organization,
      requests,
      message,
    } = this.formInput
    const bodyFirst: string = `
以下の内容でホームページよりお問い合わせを受け付けました。
必要に応じて担当から折り返しますので今しばらくお待ち下さい。

---
# お問い合わせ種別
${this.selectedCategoryText}

# お名前
${name} 様

# 連絡先
${email}

# 電話番号
${tel || '-'}

`
    const bodyOrg: string = `
# 企業 / 団体名
${organization}

`
    const bodyReq: string = `
# ご依頼内容
${requests.join('、')}

`
    const bodyLast: string = `
# ご質問 / ご要望 / メッセージ
${message}
---

引き続き${process.env.projectName}をよろしくおねがいします！

※ コチラのメールへの返信は受け付けておりません。

====================================

# スポーツかくれんぼ 公式サイト
https://www.spokaku.com

# かくれんぼ in ぐんま 公式サイト
https://www.kakurenbo.club

# Facebookグループ「かくれんぼの裏側」
https://www.facebook.com/groups/kakurenbo

====================================
`
    let body: string
    switch(category) {
      case 'client':
        body = bodyFirst + bodyOrg + bodyReq + bodyLast
        break
      case 'media':
        body = bodyFirst + bodyOrg + bodyLast
        break
      case 'other':
        body = bodyFirst + bodyLast
        break
      default:
        body = ''
    }
    const mailOption: any = {
      from: `${process.env.projectName} お問合せフォーム <info@${process.env.mailHost}>`,
      to: [email],
      bcc: ['toyokawa@kakurenbo.club'],
      subject: `【${process.env.projectName}】お問い合わせを受け付けました`,
      text: body
    }
    // @ts-ignore
    await this.$mgClient.messages.create(
      `mg.${process.env.mailHost}`,
      mailOption
    ).catch((err: any) => {
      console.log(err)
      throw err
    })
    this.completeForm()
  }

  completeForm() {
    this.formInput = {
      state: "complete",
      category: "client",
      name: "",
      email: "",
      tel: "",
      organization: "",
      requests: [],
      message: "",
    }
  }

  get selectedCategoryText(): string {
    return this.categoryList.find((category: any) => category.value === this.formInput.category).text
  }
}
</script>

<style lang="sass" scoped>
</style>

