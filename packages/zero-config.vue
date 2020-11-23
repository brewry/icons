<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M2.625 21.3L21.299 2.624M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "zero-config-icon", props, computed,
}
</script>