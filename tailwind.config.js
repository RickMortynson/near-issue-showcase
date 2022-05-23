module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          bar: 'var(--color-bg-bar)',
          input: 'var(--color-bg-input)',
        }
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          invert: 'var(--color-text-invert)'
        }
      },
      borderColor: {
        skin: {
          accent: 'var(--color-border-accent)'
        }
      }
    }
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('children', '& > *')
    }
  ]
}
