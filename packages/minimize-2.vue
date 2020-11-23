<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "minimize-2-icon", props, computed,
}
</script>