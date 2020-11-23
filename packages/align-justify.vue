<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M21 10H3M21 6H3M21 14H3M21 18H3"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "align-justify-icon", props, computed,
}
</script>