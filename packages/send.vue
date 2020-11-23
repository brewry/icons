<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "send-icon", props, computed,
}
</script>