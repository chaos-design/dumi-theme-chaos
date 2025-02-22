// 获取 dumi-theme-chaos 额外的配置
import { useSiteData } from 'dumi';

import type { IAllThemeConfig } from '../types';
import { merge } from 'lodash';

export interface UserThemeConfig {
  (): IAllThemeConfig;
}

export const defaultThemeConfig = {
  footer: `Made with <span style="color: rgb(255, 255, 255);">❤</span>by <span>chaos-design | Copyright © 2025-${new Date().getFullYear()}</span>`,
};

const useUserThemeConfig: UserThemeConfig = () => {
  const { themeConfig } = useSiteData();
  const additionalThemeConfig = merge(defaultThemeConfig, themeConfig);

  return additionalThemeConfig;
};

export const useUserThemeEnableConfig: UserThemeConfig = () => {
  const { themeConfig } = useSiteData();
  const additionalThemeConfig = merge(defaultThemeConfig, themeConfig);

  return merge(
    {
      rtl: true,
      backTop: true,
      docVersions: true,
      editButton: true,
      lastUpdated: true,
    },
    {
      rtl: additionalThemeConfig?.rtl,
      lastUpdated: additionalThemeConfig?.lastUpdated,
    },
    additionalThemeConfig.enable,
  );
};

export interface UserGithubConfig {
  owner: string;
  repo: string;
  github: string | undefined;
  branch: string;
  originDocDir: string;
  docDir: string;
  isGithub?: boolean;
  blob?: boolean;
}

export const useThemeGithubConfig = (): UserGithubConfig => {
  const { github: origin, socialLinks } = useUserThemeConfig();

  const github =
    typeof origin === 'string' ? origin : origin?.url || socialLinks?.github;

  const isGithub =
    /https:\/\/github.com\/([^/]+)\/([^/]+)/.test(github!) ?? false;

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

  return merge(typeof origin === 'string' ? {} : origin, {
    owner,
    repo,
    github,
    isGithub,
    branch: typeof origin === 'string' ? 'main' : (origin?.branch ?? 'main'),
    originDocDir,
    docDir: '/' + originDocDir,
  });
};

export default useUserThemeConfig;
