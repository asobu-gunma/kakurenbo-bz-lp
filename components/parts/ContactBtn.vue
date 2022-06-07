<template lang="pug">
v-btn(
  fab
  x-large
  fixed
  right
  bottom
)
  v-icon mdi-email
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class PartsContactBtn extends Vue {}
</script>