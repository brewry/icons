## @brewry/icons
Icons(feather-icons) used for the [Brewry UI Kit](#).

`@brewry/icons` is a high quality icon library, all components are displayed by `svg`.

<br/>

### Usage

1. Install: `yarn add @brewry/icons`.

2. Global import
    ```js
    import { install } from '@brewry/icons'
    import Vue from 'vue'
    
    install(Vue)
    ```

3. Per component
```vue
<template>
  <div>
    <AirplayIcon size="24px" color="#000000"></AirplayIcon>
  </div>
</template>
<script>
import { AirplayIcon } from '@brewry/icons';

export default {
  components: {
    AirplayIcon
  }
}
</script>
```
### See

  - [@brewry/icons](https://github.com/brewry/icons)
  - [feathericons](https://feathericons.com/)
