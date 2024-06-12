// quasar.conf.js
const dotenv = require('dotenv');
const webpack = require('webpack');

// Load environment variables from .env file
dotenv.config();

const serverAliases = {
  local: '',
  flespi: 'https://flespi.io'
};

module.exports = function (ctx) {
  return {
    boot: [
      'i18n',
      'flespi-io'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      'mdi-v5',
      'roboto-font',
      'material-icons'
    ],
    framework: {
      importStrategy: 'auto',
      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QTooltip',
        'QResizeObserver',
        'QDialog',
        'QSelect',
        'QInput',
        'QKnob',
        'QCheckbox',
        'QTabs',
        'QTab',
        'QTabPanels',
        'QTabPanel',
        'QToggle',
        'QMenu',
        'QCircularProgress',
        'QSpinnerGears',
        'QSlider',
        'QField',
        'QRange',
        'QChip',
        'QColor',
        'QCard',
        'QSeparator',
        'QCardActions',
        'QCardSection',
        'QBtnToggle'
      ],
      directives: [
        'Ripple',
        'ClosePopup',
        'TouchHold',
        'TouchPan'
      ],
      plugins: [
        'Notify',
        'Loading',
        'LocalStorage',
        'SessionStorage',
        'Dialog'
      ]
    },
    supportIE: true,
    build: {
      publicPath: process.env.NODE_ENV === 'production' ? '/data-and-history/' : '/',
      distDir: 'dist/spa',
      vueRouterMode: 'history',
      scopeHoisting: true,
      extendWebpack(cfg) {
        cfg.plugins.push(
          new webpack.DefinePlugin({
            SERVER: JSON.stringify(serverAliases[process.env.FLESPI_SERVER]),
            DEV: process.env.NODE_ENV === 'development',
            PROD: process.env.NODE_ENV === 'production',
            LOCAL: process.env.NODE_LOCAL === 'local',
            'process.env': {
              VUE_APP_HARDCODED_TOKEN: JSON.stringify(process.env.VUE_APP_HARDCODED_TOKEN)
            }
          })
        );
      }
    },
    devServer: {
      port: 7006,
      open: 'Google Chrome'
    },
    animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      manifest: {
        name: 'Track it!',
        short_name: 'Track it!',
        display: 'standalone',
        orientation: 'any',
        background_color: '#333333',
        theme_color: '#333333',
        icons: [
          {
            src: 'statics/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    cordova: {},
    electron: {
      extendWebpack(cfg) {}
    }
  }
}
