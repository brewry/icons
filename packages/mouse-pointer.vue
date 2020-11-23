<template><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" v-on="listeners" v-bind="attrs" :style="styles"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6"/></svg></template>
<script>
import { props, computed } from './mixin'
export default {
  name: "mouse-pointer-icon", props, computed,
}
</script>