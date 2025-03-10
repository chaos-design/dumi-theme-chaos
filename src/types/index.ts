import type { SerializedStyles } from '@emotion/react';
import type { IThemeConfig } from 'dumi/dist/client/theme-api/types';
import type { ThemeConfig } from 'antd';
import type { FooterColumn } from 'rc-footer/lib/column';

export type ISidebarGroupModePathItem = string;

interface ILocaleEnhance {
  /** 同 themeConfig 中 locales 项中的 id */
  id: string;
  /** 当多语言只有两项时用于展示切换的前缀 */
  switchPrefix: string;
}

interface IAction {
  /** 按钮文字描述 */
  text: string;
  /** 按钮链接 */
  link: string;
  /** 按钮类型 */
  type?: 'primary' | 'default';
  shape?: 'round' | 'circle' | 'default';
}

export interface IMoreLink {
  /** 链接文字描述 */
  text: string;
  /** 链接 */
  link: string;
}

interface IFeature {
  emoji?: string;
  /** 特性名称 */
  title: string;
  /** 特性具体描述 */
  details: string;
  /** css in js 样式 */
  itemCss?: SerializedStyles;
}

interface ILoading {
  icon?: string;
  skeleton?: Array<string>;
}
// 分组类型，将 children 换位字符串数组

export type SidebarEnhanceItemType = {
  title: string;
  link: string;
  target?: string;
};

export type SidebarEnhanceChildrenType = string | SidebarEnhanceItemType;
export type SidebarEnhanceSubType = {
  children: SidebarEnhanceChildrenType[];
  title: string;
};

// 增强模式的 sidebar 相关类型
export type SidebarEnhanceGroupChildren = (
  | SidebarEnhanceSubType
  | SidebarEnhanceChildrenType
)[];
export type SidebarEnhanceGroupType = {
  type: 'group';
  title: string;
  children: SidebarEnhanceGroupChildren;
};
export type SidebarEnhanceType =
  | SidebarEnhanceSubType
  | SidebarEnhanceGroupType
  | SidebarEnhanceChildrenType;
export type SidebarEnhanceItems = SidebarEnhanceType[];

interface IDocVersion {
  [propName: string]: string;
}

export interface IBannerConfig {
  /** 是否展示头部 banner 背景 */
  showBanner?: boolean;
  /** banner 图片地址 */
  bannerImgUrl?: string;
  /** banner 移动端图片地址 */
  bannerMobileImgUrl?: string;
}

interface UserThemeConfigEnable {
  /** 是否展示 rtl */
  rtl?: boolean;
  /** 是否展示 doc Version */
  docVersions?: boolean;
  /** 是否展示 backTop */
  backTop?: boolean;
  /** 是否展示 editButton */
  editButton?: boolean;
  /** 是否展示 lastUpdated */
  lastUpdated?: boolean;
}

interface UserThemeConfig {
  /** github 链接 */
  github?:
    | string
    | {
        // github 链接
        url: string;
        // github 分支，默认为 main
        branch?: string;
        // 文档目录
        docDir?: string;
        // 是否使用 blob 模式
        blob?: boolean;
      };
  /** 首页链接 */
  homeLink?: string;
  /** 多语言额外配置，主要用于展示语言切换文字（只针对于两项多语言时） */
  localesEnhance?: ILocaleEnhance[];
  /** 配置首页首屏区域的大标题。 */
  title?: string | Record<string, string>;
  /** 配置首页首屏区域的简介文字 */
  description?: string | Record<string, string>;
  /** 配置首页首屏区域的操作按钮 */
  actions?: IAction[] | Record<string, IAction[]>;
  /** 配置首页特性描述 */
  features?: IFeature[] | Record<string, IFeature[]>;
  /** sidebar group 模式路由 */
  sidebarGroupModePath?: true | ISidebarGroupModePathItem[];
  /** 文档版本 */
  docVersions?: IDocVersion;
  /** 更多链接 */
  moreLinks?: IMoreLink[] | Record<string, IMoreLink[]>;
  /** banner 配置 */
  bannerConfig?: IBannerConfig;
  /** 增强模式的 sidebar */
  sidebarEnhance?: Record<string, SidebarEnhanceItems>;
  /** antd 主题定制，同 `ConfigProvider` 中 `theme` */
  theme?: Omit<ThemeConfig, 'algorithm'>;
  /** 是否展示页面加载状态 */
  loading?: ILoading;
  /** footer 上方展示友情链接 */
  footerLinks?: FooterColumn[] | Record<string, FooterColumn[]>;
  /** SSR, plugin 自动注入，无需设置 */
  ssr?: boolean | Record<string, unknown>;
  /** 开启主题功能 */
  enable?: UserThemeConfigEnable;
}

export interface AnnouncementBarProps {
  id: string;
  align?: 'left' | 'center' | 'right';
  type?: 'info' | 'success' | 'warning' | 'error';
  message: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  showIcon?: boolean;
  closable?: boolean;
  [key: string]: any;
}

export interface IAllThemeConfig extends IThemeConfig, UserThemeConfig {
  announcementBar?: Partial<AnnouncementBarProps>;
}

export { UserThemeConfig, ILocaleEnhance, IFeature, IAction };
