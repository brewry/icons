<template><svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10" fill="var(--geist-fill)"/><path stroke="var(--geist-stroke)" d="M12 16l4-4-4-4M8 12h8"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "arrow-right-circle-fill-icon", props, computed,
}
</script>