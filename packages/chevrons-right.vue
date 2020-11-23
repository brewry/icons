<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "chevrons-right-icon", props, computed,
}
</script>