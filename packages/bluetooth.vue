<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "bluetooth-icon", props, computed,
}
</script>