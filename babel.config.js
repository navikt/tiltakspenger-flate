module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    // Taken from Github, replaces all meta occurences with "process", ex import.meta.env -> process.env
    //
    // https://github.com/vitejs/vite/issues/1149#issuecomment-775033930
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process');
          },
        },
      };
    },
  ],
};
