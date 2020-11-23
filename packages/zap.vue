<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "zap-icon", props, computed,
}
</script>