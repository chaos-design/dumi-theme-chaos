import type { IApi } from 'dumi';

export default (api: IApi) => {
  api.describe({
    key: `dumi-theme:${require('../../package.json').name}`
  });
  api.modifyDefaultConfig(
    (memo) =>
      Object.assign(memo, {
        cjs: {
          output: 'dist/defineThemeConfig',
          input: 'src/defineThemeConfig'
        }
      })
  );
};
