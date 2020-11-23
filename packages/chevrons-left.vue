<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "chevrons-left-icon", props, computed,
}
</script>