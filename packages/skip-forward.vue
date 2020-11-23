<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M5 4l10 8-10 8V4zM19 5v14"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "skip-forward-icon", props, computed,
}
</script>