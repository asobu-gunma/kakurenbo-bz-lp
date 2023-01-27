<template lang="pug">
section#about
  v-row
    v-col(cols="12" md="6" order="1" order-md="2")
      parts-youtube(id="fC7VVOvB5Pw")
    v-col(cols="12" md="6" order="2" order-md="1")
      h1.mb-2 「スポーツかくれんぼ」とは？
      .description
        p
          | 「スポーツかくれんぼ（通称: スポかく）」は皆さんが一度は遊んだことがあるであろう
          | かくれんぼに得点要素を加えてできた、全く新しいスポーツです。缶蹴りのように鬼は
          | 拠点を守りながら探し、隠れる側は鬼に見つからないように拠点を攻める、子供の頃に
          | 遊んだかくれんぼよりもより白熱して楽しむことができます。
        p
          | 下は4歳から上は60代まで、老若男女別け隔てなく同じフィールド、同じルールで楽しめる
          | ボーダレスなスポーツとして、発祥の地、群馬県を中心に、世界への展開を見据え
          | 日夜活動をしています。
      parts-cta-btn(url="/about/") ルールを知りたい方はこちらから！
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class TopAbout extends Vue {}
</script>

<style lang="sass" scoped>
</style>