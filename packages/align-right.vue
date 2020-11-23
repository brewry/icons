<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M21 10H7M21 6H3M21 14H3M21 18H7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "align-right-icon", props, computed,
}
</script>