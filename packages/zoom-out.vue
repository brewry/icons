<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M8 11h6"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "zoom-out-icon", props, computed,
}
</script>