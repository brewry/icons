<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7m0-18v18"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "columns-icon", props, computed,
}
</script>