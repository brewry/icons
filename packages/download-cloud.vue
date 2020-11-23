<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M8 17l4 4 4-4M12 12v9"/><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "download-cloud-icon", props, computed,
}
</script>