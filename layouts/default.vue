<template lang="pug">
v-app
  global-header
  v-main
    nuxt
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import GlobalHeader from "~/components/global/Header.vue"

@Component({
  components: {
    GlobalHeader,
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="sass" scoped>
.logo
  height: 45px
  width: auto
</style>