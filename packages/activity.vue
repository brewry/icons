<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "activity-icon", props, computed,
}
</script>