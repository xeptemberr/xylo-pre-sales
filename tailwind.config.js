/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'spread': '0 25px 30px -12px rgba(0, 0, 0, 0.05)',
        'spread-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
        'spread-xl': '0 45px 80px -12px rgba(0, 0, 0, 0.35)',
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 8px 12px -2px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'gray-006': 'var(--gray-006)',
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'Pretendard', 'system-ui', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
