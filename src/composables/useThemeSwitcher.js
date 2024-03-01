import { ref, onMounted } from 'vue'

export default function useThemeSwitcher () {
    const themes = ['light', 'dark', 'coffee']
    const currentTheme = ref(localStorage.getItem('theme') || 'light')

    onMounted(() => {
        themes.forEach(theme => document.documentElement.classList.remove(theme))

        document.documentElement.classList.add(localStorage.getItem('theme'))
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themes.forEach(theme => document.documentElement.classList.remove(theme))
            document.documentElement.classList.add('dark')
            return true
        }

        document.documentElement.classList.add('light')
    })

    const toggleTheme = (themeValue) => {
        currentTheme.value = themeValue || 'light'
        localStorage.setItem('theme', currentTheme.value)

        themes.forEach(theme => document.documentElement.classList.remove(theme))
        document.documentElement.classList.add(currentTheme.value)
    }

    return {
        toggleTheme,
        currentTheme
    }
}
