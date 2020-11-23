<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M17 17L7 7M7 17V7h10"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "arrow-up-left-icon", props, computed,
}
</script>