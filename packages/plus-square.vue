<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M12 8v8M8 12h8"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "plus-square-icon", props, computed,
}
</script>