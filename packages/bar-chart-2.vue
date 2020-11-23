<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "bar-chart-2-icon", props, computed,
}
</script>