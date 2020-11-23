<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M15 14l5-5-5-5"/><path d="M4 20v-7a4 4 0 014-4h12"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "corner-up-right-icon", props, computed,
}
</script>