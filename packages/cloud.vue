<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "cloud-icon", props, computed,
}
</script>