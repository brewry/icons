<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "chrome-icon", props, computed,
}
</script>