<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "cloud-snow-icon", props, computed,
}
</script>