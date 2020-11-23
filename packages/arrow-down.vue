<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "arrow-down-icon", props, computed,
}
</script>