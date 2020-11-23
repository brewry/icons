<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M12 2l7 19-7-4-7 4 7-19z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "navigation-2-icon", props, computed,
}
</script>