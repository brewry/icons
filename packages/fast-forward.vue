<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "fast-forward-icon", props, computed,
}
</script>