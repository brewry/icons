<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "hash-icon", props, computed,
}
</script>