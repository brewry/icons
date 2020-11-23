<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "twitch-icon", props, computed,
}
</script>