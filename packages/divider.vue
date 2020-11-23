<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M16.88 3.549L7.12 20.451"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "divider-icon", props, computed,
}
</script>