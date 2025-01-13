import type { IApi } from 'dumi';

export default (api: IApi) => {
  api.describe({
    key: `dumi-theme:${require('../../package.json').name}`
  });
};
