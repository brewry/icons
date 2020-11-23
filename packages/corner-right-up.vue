<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M10 9l5-5 5 5"/><path d="M4 20h7a4 4 0 004-4V4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "corner-right-up-icon", props, computed,
}
</script>