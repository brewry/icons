<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "type-icon", props, computed,
}
</script>