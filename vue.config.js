const path = require('path')

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // '@cfg': path.resolve(__dirname, 'src', '_config'),
        // '@components': path.resolve(__dirname, 'src', 'components'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        // '@config': path.resolve(__dirname, 'src', '_config', 'config'),
        '@css': path.resolve(__dirname, 'src', 'assets', 'css'),
        '@fonts': path.resolve(__dirname, 'src', 'assets', 'fonts'),
        '@services': path.resolve(__dirname, 'src', 'services'),
        '@i18n': path.resolve(__dirname, 'src', 'i18n'),
        '@icons': path.resolve(__dirname, 'src', 'assets', 'icons'),
        '@img': path.resolve(__dirname, 'src', 'assets', 'img'),
        '@js': path.resolve(__dirname, 'src', 'assets', 'js'),
        '@router': path.resolve(__dirname, 'src', 'router'),
        '@utils': path.resolve(__dirname, 'src', 'utils'),
        '@views': path.resolve(__dirname, 'src', 'views'),
        '@lib': path.resolve(__dirname, 'src', 'lib')
      }
    },
    output: {
      crossOriginLoading: 'anonymous'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            minSize: 10000,
            maxSize: 200000
          }
        }
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
