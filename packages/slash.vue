<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "slash-icon", props, computed,
}
</script>