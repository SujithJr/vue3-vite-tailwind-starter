/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        fontFamily: {
            display: ['inter'],
            body: ['lato']
        },
        extend: {
            colors: {
                primary: 'rgba(var(--color-primary), <alpha-value>)',
                body: 'rgba(var(--color-body), <alpha-value>)',
            }
        }
    },
    plugins: []
}
