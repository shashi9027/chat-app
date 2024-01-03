import { lightBlue } from '@mui/material/colors'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        lightBlue: "#F0F4FA",
        lightBlue100 : "#F8FAFF",
        blue: "#AFBBF7",
        horizontal: "#B4B4B4",
        textColor: "#7C7C7D",
        btnColor: "#5B96F7"
      }
    },
  },
  plugins: [],
}
export default config
