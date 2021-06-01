const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}'
        ],
        options: {
            safelist: [
                /*
                 * Don't purge classes that are dynamically
                 * added by react-transition-group
                 */
                /-(appear|enter|exit)(-active|-done)?$/
            ]
        }
    },
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
