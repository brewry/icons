<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M9 18l6-6-6-6"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "chevron-right-icon", props, computed,
}
</script>