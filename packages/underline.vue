<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3M4 21h16"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "underline-icon", props, computed,
}
</script>