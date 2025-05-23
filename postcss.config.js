// @ts-check
import globalData from '@csstools/postcss-global-data';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import customMedia from 'postcss-custom-media';
import nested from 'postcss-nested';
import variableCompress from 'postcss-variable-compress';

const MEDIA_QUERIES_PATH = 'src/styles/media.css';

/** @type {import('postcss-load-config').ConfigFn} */
export default ({ env }) => {
  const isProduction = env === 'production';

  return {
    plugins: [
      globalData({ files: [MEDIA_QUERIES_PATH] }),
      customMedia(),
      nested(),
      ...(isProduction
        ? [
            autoprefixer(),
            cssnano({
              preset: ['advanced', { zindex: false }],
            }),
            variableCompress([
              variableName =>
                variableName.startsWith('--js-') ||
                variableName.startsWith('--font-'),
            ]),
          ]
        : []),
    ],
  };
};
