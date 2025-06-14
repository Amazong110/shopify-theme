// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.liquid',
    './src/**/*.html',
    './src/**/*.js',
    // 根据你的项目结构调整路径
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006FBB',
        secondary: '#4B9CD3',
        accent: '#FF6B35',
        dark: '#1A1A1A',
        light: '#F5F5F5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
