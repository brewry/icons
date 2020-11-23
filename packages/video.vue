<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M23 7l-7 5 7 5V7z"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "video-icon", props, computed,
}
</script>