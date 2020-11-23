<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 019.9-1"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "unlock-icon", props, computed,
}
</script>