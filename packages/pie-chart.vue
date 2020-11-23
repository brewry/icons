<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "pie-chart-icon", props, computed,
}
</script>