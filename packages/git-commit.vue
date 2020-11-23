<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="4"/><path d="M1.05 12H7M17.01 12h5.95"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "git-commit-icon", props, computed,
}
</script>