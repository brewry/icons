<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "archive-icon", props, computed,
}
</script>