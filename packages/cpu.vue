<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="16" height="16" x="4" y="4" rx="2" ry="2"/><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "cpu-icon", props, computed,
}
</script>