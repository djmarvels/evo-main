module.exports = {
    content: [
        "@/components/**/*.{js,vue,ts}",
        "@/layouts/**/*.vue",
        "@/pages/**/*.vue",
        "@/plugins/**/*.{js,ts}",
        "@/nuxt.config.{js,ts}",
    ],
    theme: {
        colors: {
            white: '#FFFFFF',
            white2: '#F7F7F7',
            black: '#1A1A1A',
            brand: '#025EFE',
            blue: '#168BDA',
            green: '#3DF43D',
            red: '#FF370B',
            grey: '#6D6E6E',
            grey2: '#6D6E6E',
            grey3: '#8A8A8A',
            grey4: '#D2D2D2',
            grey5: '#CECECE',
            'grey-50': 'rgba(109, 110, 110, 0.5)'
        },
        extend: {
            fontFamily: {
                sans: ['Whyte', 'Helvetica', 'sans-serif'],
                book: ['Whyte Book', 'Helvetica', 'sans-serif'],
                super: ['Whyte Super', 'Helvetica', 'sans-serif'],
                inktrap: ['Whyte Inktrap', 'Helvetica', 'sans-serif'],
                'inktrap-book': ['Whyte Inktrap Book', 'Helvetica', 'sans-serif'],
                'inktrap-super': ['Whyte Inktrap Super', 'Helvetica', 'sans-serif']
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar-hide'),
        require('autoprefixer')
    ],
};