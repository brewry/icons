<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M3 12h18M3 6h18M3 18h18"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "menu-icon", props, computed,
}
</script>