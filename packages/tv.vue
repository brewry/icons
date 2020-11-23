<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><path d="M17 2l-5 5-5-5"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "tv-icon", props, computed,
}
</script>