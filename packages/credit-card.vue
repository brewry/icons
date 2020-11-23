<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="22" height="16" x="1" y="4" rx="2" ry="2"/><path d="M1 10h22"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "credit-card-icon", props, computed,
}
</script>