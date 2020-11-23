<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "framer-icon", props, computed,
}
</script>