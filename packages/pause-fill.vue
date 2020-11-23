<template><svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path fill="var(--geist-fill)" d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "pause-fill-icon", props, computed,
}
</script>