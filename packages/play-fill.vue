<template><svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path fill="var(--geist-fill)" d="M5 3l14 9-14 9V3z"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "play-fill-icon", props, computed,
}
</script>