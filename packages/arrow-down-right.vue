<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M7 7l10 10M17 7v10H7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "arrow-down-right-icon", props, computed,
}
</script>