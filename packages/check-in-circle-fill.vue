<template><svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path fill="var(--geist-fill)" stroke="var(--geist-fill)" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/><path fill="none" stroke="var(--geist-stroke)" d="M8 11.857l2.5 2.5L15.857 9"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "check-in-circle-fill-icon", props, computed,
}
</script>