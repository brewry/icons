<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7M3 9V3m0 0h6M3 3l7 7m11 5v6m0 0h-6m6 0l-7-7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "full-screen-icon", props, computed,
}
</script>