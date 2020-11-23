<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "umbrella-icon", props, computed,
}
</script>