<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M4 17l6-6-6-6M12 19h8"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "terminal-icon", props, computed,
}
</script>