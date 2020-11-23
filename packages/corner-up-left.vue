<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M9 14L4 9l5-5"/><path d="M20 20v-7a4 4 0 00-4-4H4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "corner-up-left-icon", props, computed,
}
</script>