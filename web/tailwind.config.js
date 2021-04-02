const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blueGray: colors.blueGray
            },
            screens: {
                xs: '420px'
            },
            transitionDelay: {
                0: '0ms'
            }
        }
    },
    variants: {
        extend: {
            translate: ['group-hover'],
            transitionDelay: ['group-hover'],
            fontSize: ['group-hover']
        }
    },
    plugins: []
};
