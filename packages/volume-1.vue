<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "volume-1-icon", props, computed,
}
</script>