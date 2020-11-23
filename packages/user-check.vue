<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M17 11l2 2 4-4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "user-check-icon", props, computed,
}
</script>