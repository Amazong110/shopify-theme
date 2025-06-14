// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@shopify/postcss-plugin-liquid')({
      // 允许 Tailwind 类名中的 Liquid 变量
      preserve: ['theme-colors'],
    }),
  ],
};
