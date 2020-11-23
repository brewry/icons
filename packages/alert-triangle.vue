<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path fill="var(--geist-fill)" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path stroke="var(--geist-stroke)" d="M12 9v4M12 17h.01"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "alert-triangle-icon", props, computed,
}
</script>