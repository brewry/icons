<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M10 15l5 5 5-5"/><path d="M4 4h7a4 4 0 014 4v12"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "corner-right-down-icon", props, computed,
}
</script>