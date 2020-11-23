<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"/><path d="M12 15l5 6H7l5-6z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "airplay-icon", props, computed,
}
</script>