/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    // container: {
    //   center: true, // Căn giữa nội dung của container
    //   padding: {
    //     DEFAULT: '1rem', // Khoảng trắng mặc định
    //     sm: '2rem',
    //     md: '1rem', // Khoảng trắng cho breakpoint sm
    //     lg: '4rem', // Khoảng trắng cho breakpoint lg
    //   },
    // },
  },
  plugins: [],
}