/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        moveAlongPath1: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(80px, 80px)', opacity: '0' }
        },
        moveAlongPath2: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(-60px, 10px)', opacity: '0' }
        },
        moveAlongPath3: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(80px, 50px)', opacity: '0' }
        },
        moveAlongPath4: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(80px, -80px)', opacity: '0' }
        }
      },
      animation: {
        float: 'float 15s ease-in-out infinite',
        moveAlongPath1: 'moveAlongPath1 8s linear infinite',
        moveAlongPath2: 'moveAlongPath2 7s linear infinite',
        moveAlongPath3: 'moveAlongPath3 6s linear infinite',
        moveAlongPath4: 'moveAlongPath4 9s linear infinite',
      }
    },
  },
  plugins: [],
};