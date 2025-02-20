import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
            colors: {
                neutralSilver: '#F5F7Fa',
                neutralDGrey: '#4D4D4D',
                brandPrimary: '#038C61',
                brandSecondary: '#2C2C54',
                neutralGrey: '#717171',
                brandLight: '#ffffff',
            }
        }
    },
    plugins: [daisyui]
};
