<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4M6 12H2M12 6V2M12 22v-4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "crosshair-icon", props, computed,
}
</script>