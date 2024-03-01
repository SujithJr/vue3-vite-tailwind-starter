<template>
    <div class="bg-primary h-screen pt-32 text-center">
        <img src="./assets/logo.png" alt="Vue" class="inline-block" />
        <h1 class="text-body mt-8 mb-8 text-4xl font-medium">Vue — Vite — TailwindCss — Theme Switcher</h1>
        <div class="bg-primary inline-flex items-center justify-center p-1 border border-gray-300 rounded-lg shadow-xl">
            <button
                @click="toggleTheme('light')"
                class="px-4 py-2 rounded-md"
                :class="[
                    { 'bg-body text-primary': currentTheme === 'light' },
                    { 'text-zinc-500': currentTheme !== 'light' },
                ]"
            >
                Light Theme
            </button>
            <button
                @click="toggleTheme('dark')"
                class="px-4 py-2 rounded-md"
                :class="[
                    { 'bg-body text-primary': currentTheme === 'dark' },
                    { 'text-zinc-500': currentTheme !== 'dark' },
                ]"
            >
                Dark Theme
            </button>
            <button
                @click="toggleTheme('coffee')"
                class="px-4 py-2 rounded-md"
                :class="[
                    { 'bg-body text-primary': currentTheme === 'coffee' },
                    { 'text-zinc-500': currentTheme !== 'coffee' },
                ]"
            >
                Coffee Theme
            </button>
        </div>
    </div>
</template>

<script setup>
import useThemeSwitcher from './composables/useThemeSwitcher'

const { currentTheme, toggleTheme } = useThemeSwitcher()
</script>
