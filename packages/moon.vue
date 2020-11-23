<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "moon-icon", props, computed,
}
</script>