<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M17 8.517L12 3 7 8.517m0 6.963l5 5.517 5-5.517"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "chevron-up-down-icon", props, computed,
}
</script>