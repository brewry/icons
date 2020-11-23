<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"/><path d="M13 11l-4 6h6l-4 6"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "cloud-lightning-icon", props, computed,
}
</script>