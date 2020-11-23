<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10"/><path d="M8 12l4 4 4-4M12 8v8"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "arrow-down-circle-icon", props, computed,
}
</script>