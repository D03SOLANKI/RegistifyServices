/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        registify: {
          navy: {
            50: '#f0f4f9',
            100: '#d9e2ed',
            200: '#b4c7dc',
            300: '#8ba6c7',
            400: '#5a82ad',
            500: '#396596',
            600: '#264e7a',
            700: '#1c3c62',
            800: '#142B49', // Primary Deep Navy Blue
            900: '#0d1d33',
            950: '#081220',
          },
          royal: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#246BCE', // Secondary Royal Blue
            600: '#1d57aa',
            700: '#18478b',
            800: '#143b71',
            900: '#12315b',
          },
          teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#18A999', // Accent Teal
            600: '#13877a',
            700: '#116d63',
            800: '#10564f',
            900: '#0f4641',
          },
          bg: '#F7F9FC',
          charcoal: '#202B3C',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(20, 43, 73, 0.06), 0 2px 6px -1px rgba(20, 43, 73, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(20, 43, 73, 0.12), 0 4px 10px -2px rgba(20, 43, 73, 0.06)',
        'elevated': '0 20px 40px -8px rgba(20, 43, 73, 0.15)',
      }
    },
  },
  plugins: [],
}
