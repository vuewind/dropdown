# VueWind Dropdown

Simple Vue / Tailwind dropdown

```html
<v-dropdown direction="left">
    <template slot="trigger">
        Click Me
    </template>
    <template slot="content" slot-scope="{ toggle }">
        <a href="#" class="list-item" @click="toggle">Link</a>
        <a href="#" class="list-item" @click="toggle">Link</a>
        <a href="#" class="list-item" @click="toggle">Link</a>
        <a href="#" class="list-item" @click="toggle">Link</a>
    </template>
</v-dropdown>
```

### Install

```
npm install @vuewind/dropdown --save
```

```js
import Dropdown from '@vuewind/dropdown';

Vue.use(Dropdown);
```
