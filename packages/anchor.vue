<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="5" r="3"/><path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "anchor-icon", props, computed,
}
</script>