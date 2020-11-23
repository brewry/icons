<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="18" height="12" x="1" y="6" rx="2" ry="2"/><path d="M23 13v-2"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "battery-icon", props, computed,
}
</script>