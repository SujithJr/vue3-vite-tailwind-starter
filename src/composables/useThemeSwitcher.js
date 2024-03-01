import { ref, onMounted } from 'vue'

export default function useThemeSwitcher () {
    const themes = { light: 'light', dark: 'dark', coffee: 'coffee' }
    const currentTheme = ref(localStorage.getItem('theme'))

    onMounted(() => {
        resetThemeSelection()

        if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme.value = themes.dark
            switchTheme(themes.dark)

            return true
        }

        if ('theme' in localStorage) {
            return switchTheme(localStorage.getItem('theme'))
        }

        switchTheme(themes.light)
    })

    const toggleTheme = (theme) => {
        currentTheme.value = theme || themes.light
        localStorage.setItem('theme', currentTheme.value)

        resetThemeSelection()
        switchTheme(currentTheme.value)
    }

    const resetThemeSelection = () => {
        Object.keys(themes).forEach(theme => document.documentElement.classList.remove(theme))
    }

    const switchTheme = (theme) => {
        document.documentElement.classList.add(theme)
    }

    return {
        toggleTheme,
        currentTheme,
        themes
    }
}
