<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="22" height="14" x="1" y="5" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "toggle-left-icon", props, computed,
}
</script>