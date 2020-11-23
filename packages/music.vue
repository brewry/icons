<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "music-icon", props, computed,
}
</script>