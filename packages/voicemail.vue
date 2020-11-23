<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="5.5" cy="11.5" r="4.5"/><circle cx="18.5" cy="11.5" r="4.5"/><path d="M5.5 16h13"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "voicemail-icon", props, computed,
}
</script>