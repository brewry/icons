<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M14 15l-5 5-5-5"/><path d="M20 4h-7a4 4 0 00-4 4v12"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "corner-left-down-icon", props, computed,
}
</script>