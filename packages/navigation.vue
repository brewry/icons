<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "navigation-icon", props, computed,
}
</script>