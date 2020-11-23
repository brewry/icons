<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M9 10l-5 5 5 5"/><path d="M20 4v7a4 4 0 01-4 4H4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "corner-down-left-icon", props, computed,
}
</script>