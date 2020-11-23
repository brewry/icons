<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="20" height="20" x="2" y="2" rx="2.2" ry="2.2"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "film-icon", props, computed,
}
</script>