<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M17 10H3M21 6H3M21 14H3M17 18H3"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "align-left-icon", props, computed,
}
</script>