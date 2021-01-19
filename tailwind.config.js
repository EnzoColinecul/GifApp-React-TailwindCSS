module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    screens: {
      'small': '200px',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s cubic-bezier(0.4, 0, 0.6, 1) 0.5s',
        bounceEdit: 'bounceEdit 0.8s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%, 50%': {
            opacity: '0',
            transform: 'rotate(3deg)',
            transform: 'translateY(80%)',
            animationTimingFunction: ' cubic-bezier(0.8, 0, 1, 1)'
          },
          '100%': {
            opacity: '1'
          },
        },
        bounceEdit: {
          '0%, 100% ': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
    }
  },
  plugins: [],
}

