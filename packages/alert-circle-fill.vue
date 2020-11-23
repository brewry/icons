<template><svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10" fill="var(--geist-fill)"/><path stroke="var(--geist-stroke)" d="M12 8v4M12 16h.01"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "alert-circle-fill-icon", props, computed,
}
</script>