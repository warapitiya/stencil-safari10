import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'safari10',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  extras: {
    safari10: true
  }
};
