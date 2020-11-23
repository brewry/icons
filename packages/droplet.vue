<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "droplet-icon", props, computed,
}
</script>