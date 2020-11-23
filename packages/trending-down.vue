<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M23 18l-9.5-9.5-5 5L1 6"/><path d="M17 18h6v-6"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "trending-down-icon", props, computed,
}
</script>