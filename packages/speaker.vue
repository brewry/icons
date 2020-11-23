<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><circle cx="12" cy="14" r="4"/><path d="M12 6h.01"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "speaker-icon", props, computed,
}
</script>