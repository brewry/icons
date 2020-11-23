<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="20" height="14" x="2" y="3" rx="2" ry="2"/><path d="M8 21h8M12 17v4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "monitor-icon", props, computed,
}
</script>