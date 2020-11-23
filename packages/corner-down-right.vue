<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M15 10l5 5-5 5"/><path d="M4 4v7a4 4 0 004 4h12"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "corner-down-right-icon", props, computed,
}
</script>