<template><svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path fill="var(--geist-fill)" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path fill="none" stroke="var(--geist-stroke)" d="M8 10.679l4 4 4-4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "chevron-down-circle-fill-icon", props, computed,
}
</script>