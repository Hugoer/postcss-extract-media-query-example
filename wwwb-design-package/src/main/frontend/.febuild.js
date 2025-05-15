const path = require('path');
const rootPath = path.resolve('../');
const sourcesPath = path.join(rootPath,'frontend');
const destinationPath = path.join(rootPath,'../../target/package/jcr_root/apps/wwwb/clientlibs');
const common = path.join(sourcesPath, 'common');
const nodeModules = path.join(rootPath, 'frontend', 'node_modules');
const defaultConfig = require('@netcentric/fe-build/config');

module.exports = {
  general : {
    rootPath,
    projectKey : 'wwwb',
    sourceKey: 'clientlibs',
    bundleKey: 'bundle',
    destinationPath,
    sourcesPath,
    common,
    ignore: ['!(**/common/**)', '!(**/author/aem/**)', '!(**/target/**)', '!(**/jcr_root/**)']
  },
  sass : {
    includePaths : [path.join(common, 'styles'), nodeModules]
  },
  output: {
    path: destinationPath
  },
  postcss: {
    ...defaultConfig.postcss,
    plugins:[
      ...defaultConfig.postcss.plugins,
      'postcss-combine-media-query',
      ['postcss-extract-media-query',
        {
          output: {
            path: destinationPath,
            name: '[path]/[query]/[name]-[query].[ext]'
          },
          src: {
            path: destinationPath,
          },
          queries: {
            'screen and (min-width: 1200px)': 'xlarge',
            'screen and (min-width: 1024px)': 'large',
            'screen and (min-width: 999px)': 'medium',
          },
          extractAll: false,
        }
      ],

    ],
    extraEntries : {
      extension: 'css',
      cwd: destinationPath,
      filenamePattern: 'clientlibs-*',
    }
  },
  optimization: {
    splitChunks: false,
    runtimeChunk: false,
  },
}
