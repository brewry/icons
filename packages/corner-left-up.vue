<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M14 9L9 4 4 9"/><path d="M20 20h-7a4 4 0 01-4-4V4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "corner-left-up-icon", props, computed,
}
</script>