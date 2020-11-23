<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "chevrons-down-icon", props, computed,
}
</script>