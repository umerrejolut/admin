/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        blueTick: 'hsl(var(--blue-tick))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        inputBackground: 'hsl(var(--inputbackground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        login: {
          DEFAULT: 'hsl(var(--login))',
          foreground: 'hsl(var(--login-foreground))',
        },
        // bgColor: "#FEFDFC",
        buttonBg: "#262658",
        labelColor: "#68645E",
        checkboxBg: "#d4b8b7",
        profileborder: "#F7D763",
        textColor: "#F7EEE0",
        bottomline: "#88837B",
        sideBarBg: "#421317",
        headingColor: "#18181B",
        headerBg: "#FAF4EA",
        popupBgColor: "#F1E8E8",
        tableBgColor: "#FDFAF5",
        deleteTextColor: "#FD6161",
        deleteButtonBgColor: "#FFEBEB",
        deleteButtonHover: "#FD3A3A",
        descriptionText: "#616167",
        fileNameTextColor: "#29292E",
        acceptBgColor: "#1ebb101f",
        acceptTextColor: "#1EBB10",
        rejectBgColor: "#fd3a3a1f",
        rejectTextColor: "#FD3A3A",
        modalBorder: "#E1D9CC",
        checkBoxBorder: "#AFA99F",
        hoverColor: "#5D312F",
      },
      dropShadow: {
        card: 'hsla(0, 0%, 0%, 0.15)',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        xs: 'calc(var(--fontSize) - 4px)',
        sm: 'calc(var(--fontSize) - 2px)',
        base: 'calc(var(--fontSize))',
        lg: 'calc(var(--fontSize) + 2px)',
        xl: 'calc(var(--fontSize) + 4px)',
        '2xl': 'calc(var(--fontSize) + 8px)',
        '3xl': 'calc(var(--fontSize) + 12px)',
        '4xl': 'calc(var(--fontSize) + 16px)',
        '5xl': 'calc(var(--fontSize) + 20px)',
        '6xl': 'calc(var(--fontSize) + 24px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderColor:{
        primary: "#FAFAFA",
        lightprimary : "#FAFAFA4D" ,
        secondary: "#1CF9CF",
        light : "#181818F2",
        blacklight : "#181818E8" ,
        labelColor: "#68645E",
      },
      backgroundImage: {
        blur: "url('/src/assets/images/res/noise.png')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      height:{
        full: "calc(100vh - 67px)",
      },
    },
  },
};
