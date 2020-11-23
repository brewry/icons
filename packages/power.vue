<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "power-icon", props, computed,
}
</script>