// 获取 dumi-theme-chaos 额外的配置
import { useSiteData } from 'dumi';

import type { IAllThemeConfig } from '../types';

interface UserThemeConfig {
  (): IAllThemeConfig;
}

const useUserThemeConfig: UserThemeConfig = () => {
  const { themeConfig } = useSiteData();
  const additionalThemeConfig = themeConfig;

  return additionalThemeConfig;
};

export interface UserGithubConfig {
  owner: string;
  repo: string;
  github: string | undefined;
  branch: string;
  originDocDir: string;
  docDir: string;
}

export const useThemeGithubConfig = (): UserGithubConfig => {
  const { github: origin, socialLinks } = useUserThemeConfig();

  const github =
    typeof origin === 'string' ? origin : origin?.url || socialLinks?.github;

  // https://github.com/chaos-design/dumi-theme-chaos
  // 把上述GitHub地址中的user 和 repo 提取出来
  const [, owner, repo] =
    github?.match(/https:\/\/github.com\/([^/]+)\/([^/]+)/) ?? [];

  const originDocDir =
    typeof origin === 'string'
      ? ''
      : origin?.docDir
        ? `${origin?.docDir}/`
        : '';

  return {
    owner,
    repo,
    github,
    branch: typeof origin === 'string' ? 'main' : (origin?.branch ?? 'main'),
    originDocDir,
    docDir: '/' + originDocDir,
  };
};

export default useUserThemeConfig;
