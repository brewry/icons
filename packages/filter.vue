<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "filter-icon", props, computed,
}
</script>