<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "arrow-left-icon", props, computed,
}
</script>