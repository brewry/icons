<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M7 17L17 7M7 7h10v10"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "arrow-up-right-icon", props, computed,
}
</script>