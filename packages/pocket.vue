<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z"/><path d="M8 10l4 4 4-4"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "pocket-icon", props, computed,
}
</script>