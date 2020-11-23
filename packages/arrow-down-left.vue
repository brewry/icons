<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M17 7L7 17M17 17H7V7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "arrow-down-left-icon", props, computed,
}
</script>