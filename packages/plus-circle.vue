<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "plus-circle-icon", props, computed,
}
</script>