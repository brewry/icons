<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M5 12h14M12 5l7 7-7 7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "arrow-right-icon", props, computed,
}
</script>