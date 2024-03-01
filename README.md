# Vue 3 + Vite + Tailwind CSS + Theme Switcher

<img width="904" alt="image" src="https://github.com/SujithJr/vue3-vite-tailwind-starter/assets/29048470/d3388890-ff2b-499e-9134-03aebc196f4c">

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Theme Switcher
This template has three basic themes. Refer the below example to add your own themes in `app.css` file.
Themes are stored in local storage.
```css
:root {
    --light-theme-primary: 230, 230, 230;
    --light-theme-body: 59, 59, 59;

    --dark-theme-primary: 37, 38, 39;
    --dark-theme-body: 189, 189, 189;

    --coffee-theme-primary: 252, 248, 232;
    --coffee-theme-body: 120, 110, 131;

    --color-primary: var(--light-theme-primary);
    --color-body: var(--light-theme-body);
}

.light {
    --color-primary: var(--light-theme-primary);
    --color-body: var(--light-theme-body);
}

.dark {
    --color-primary: var(--dark-theme-primary);
    --color-body: var(--dark-theme-body);
}

.coffee {
    --color-primary: var(--coffee-theme-primary);
    --color-body: var(--coffee-theme-body);
}
```

No need to mention `dark:text-gray-100` class in every place to support tailwindcss dark mode. You can call the theme class just once and the theme color will switch dynamically.

`tailwind.config.js`
```js
theme: {
    ...
    extend: {
        colors: {
            primary: 'rgba(var(--color-primary), <alpha-value>)',
            body: 'rgba(var(--color-body), <alpha-value>)',
        }
    }
    ...
},
```

```html
<div class="bg-primary">
    <h1 class="text-body">Vue — Vite — TailwindCss — Theme Switcher</h1>
</div>
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
