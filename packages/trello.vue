<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M7 7h3v9H7zM14 7h3v5h-3z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "trello-icon", props, computed,
}
</script>