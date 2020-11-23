<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10" fill="var(--geist-fill)"/><path stroke="var(--geist-stroke)" d="M15 9l-6 6M9 9l6 6"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "x-circle-icon", props, computed,
}
</script>