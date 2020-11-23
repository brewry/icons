<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M20 6L9 17l-5-5"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "check-icon", props, computed,
}
</script>