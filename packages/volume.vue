<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "volume-icon", props, computed,
}
</script>