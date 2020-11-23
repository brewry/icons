<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "rotate-ccw-icon", props, computed,
}
</script>