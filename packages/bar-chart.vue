<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M12 20V10M18 20V4M6 20v-4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "bar-chart-icon", props, computed,
}
</script>