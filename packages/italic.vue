<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M19 4h-9M14 20H5M15 4L9 20"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "italic-icon", props, computed,
}
</script>