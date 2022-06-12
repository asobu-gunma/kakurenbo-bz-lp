<template lang="pug">
v-btn(
  fab
  x-large
  color="amber"
  fixed
  right
  bottom
  link
  nuxt
  to="/contact"
)
  v-icon mdi-email
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class PartsContactBtn extends Vue {}
</script>