<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "play-circle-icon", props, computed,
}
</script>