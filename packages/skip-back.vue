<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M19 20L9 12l10-8v16zM5 19V5"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "skip-back-icon", props, computed,
}
</script>