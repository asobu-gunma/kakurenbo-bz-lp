<template lang="pug">
div
  parts-hero.mb-16(
    title="Our Information"
    subtitle="運営者情報"
    :image="heroImage"
  )
  v-container
    section.section-margin
      h2.text-center.mb-8 運営団体
      img.logo-org.mb-8(src="~/assets/images/logo-org.svg" alt="かくれんぼ in ぐんま")
      table.org-info.mx-auto
        tr
          td 団体名
          td かくれんぼ in ぐんま
        tr
          td 代表者
          td 豊川 雄太
        tr
          td 設立
          td 2020年8月
    section.section-margin
      h2.text-h5.text-center.font-weight-black.mb-5 MISSION
      h3.text-h4.text-center.font-weight-black.mb-5 かくれんぼを世界に持っていく
      .description.text-center
        div 群馬県にて、些細なキッカケから生まれた「スポーツかくれんぼ」
        div 生まれた理由が何であれ、やってみればめちゃくちゃ楽しい
        div こんなにも楽しいものを群馬だけに留めておくのはもったいない
        div せっかくならば人生を掛けて世界へ持っていく
        div 原動力はただそれだけです 
    section.section-margin
      h2.text-h5.text-center.font-weight-black.mb-5 VISION
      v-row
        v-col(cols="5")
          parts-policy(
            title="Challengingな世界"
            description="かくれんぼ「でも」世界的に有名にすることができるできるのか、そんな風に一見難しく見える「挑戦」のハードルを下げ、もっともっとみんなが挑戦しやすい世界を作りたい"
          )
        v-col(cols="5" offset="2")
          parts-policy(
            title="Universalな世界"
            description="子供、大人、女性、男性、外国人、日本人、障害者、健常者、これらの言葉が持つ概念をなくし、皆一人の人間としてフラットな繋がりを持てる世界を作りたい"
          )
    section.section-margin
      h2.text-h5.text-center.font-weight-black.mb-5 VALUE
      v-row.mb-5
        v-col(cols="5")
          parts-policy(
            title="Challenging"
            description="失敗を受け入れ、積極的に挑戦すること"
          )
        v-col(cols="5" offset="2")
          parts-policy(
            title="Sharing"
            description="成功も失敗もすべて、皆に共有するうこと"
          )
      v-row
        v-col(cols="5")
          parts-policy(
            title="Universal"
            description="誰もが参加できる場を作ること"
          )
        v-col(cols="5" offset="2")
          parts-policy(
            title="Exciting"
            description="楽しい、面白い、ワクワクする、が根源となること"
          )
    section.section-margin
      h2.text-center.mb-8 運営メンバー
      v-row
        v-col(
          v-for="member in memberList"
          :key="member.id"
          cols="3"
        )
          parts-member-card(
            :name="member.name"
            :title="member.title"
            :photoUrl="member.photo.fields.file.url"
          )
  parts-contact-btn
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { Member } from "~/types"
import heroImage from '~/assets/images/header_org.jpg'

@Component({
  async asyncData({ app }) {
    const memberRes = await app.$ctfClient.getEntries({
      content_type: 'member',
      order: 'fields.position',
    })
    const memberList: Member[] = memberRes.items.map((item: { fields: Member }) => item.fields)
    return { memberList }
  }
})
export default class OrganizationPage extends Vue {
  head() {
    return {
      title: `${process.env.projectName} | 運営者情報`
    }
  }
  heroImage = heroImage
}
</script>

<style lang="sass" scoped>
.logo-org
  width: 200px
  height: auto
  display: block
  margin: 0 auto
.org-info
  tr
    td
      padding-bottom: 0.25rem
      &:first-child
        font-weight: bold
        padding-right: 0.75rem
</style>

