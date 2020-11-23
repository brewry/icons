<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10"/><path d="M10 15V9M14 15V9"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "pause-circle-icon", props, computed,
}
</script>