<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "rewind-icon", props, computed,
}
</script>