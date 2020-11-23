<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "rotate-cw-icon", props, computed,
}
</script>