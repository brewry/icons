<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M18 6L6 18M6 6l12 12"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "x-icon", props, computed,
}
</script>