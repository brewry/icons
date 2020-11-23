<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M18 10H6M21 6H3M21 14H3M18 18H6"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "align-center-icon", props, computed,
}
</script>