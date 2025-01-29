import flatten from 'lodash/flatten';
import { flattenDeep } from 'lodash';

import { useSiteData } from 'dumi';
import { ISidebarGroup } from 'dumi/dist/client/theme-api/types';

interface Meta {
  skip?: boolean;
  category?: any;
  type?: any;
  title?: any;
  subtitle?: string;
  tag?: string;
  path?: string;
  cover?: string;
  order?: number;
  children?: Meta[];
}

interface ModuleDataItem {
  meta: Meta;
}

interface Orders {
  [key: string]: number;
}

type ILocaleItem = ReturnType<typeof useSiteData>['locales'][0];

export function getTargetLocalePath({
  pathname,
  current,
  target,
}: {
  pathname: string;
  current: ILocaleItem;
  target: ILocaleItem;
}) {
  const clearPath =
    'base' in current
      ? pathname.replace(current.base.replace(/\/$/, ''), '')
      : pathname.replace?.(new RegExp(`${current.suffix}$`), '');

  return 'base' in target
    ? `${target.base}${clearPath}`.replace(/^\/\//, '/')
    : `${clearPath}${target.suffix}`;
}

export function getMenuItems(
  moduleData: ModuleDataItem[],
  locale: string,
  categoryOrder: Orders,
  typeOrder: Orders,
) {
  const menuMeta = moduleData
    .map((item) => item.meta)
    .filter((meta) => !meta.skip);

  const menuItems: Meta[] = [];
  const sortFn = (a: Meta, b: Meta) => (a.order || 0) - (b.order || 0);
  menuMeta.sort(sortFn).forEach((meta) => {
    // Format
    if (meta.category) {
      meta.category = meta.category[locale] || meta.category;
    }
    if (meta.type) {
      meta.type = meta.type[locale] || meta.type;
    }
    if (meta?.title) {
      meta.title = meta.title[locale] || meta.title;
    }

    if (!meta.category) {
      menuItems.push(meta);
      return;
    }

    // Component
    if (meta.category === 'Components' && meta.type) {
      let type = menuItems.find((i) => i?.title === meta.type);
      if (!type) {
        type = {
          type: 'type',
          title: meta.type,
          children: [],
          order: typeOrder[meta.type],
        };
        menuItems.push(type);
      }
      type.children = type.children || [];
      type.children.push(meta);
      return;
    }

    let group = menuItems.find((i) => i?.title === meta.category);

    if (!group) {
      group = {
        type: 'category',
        title: meta.category,
        children: [],
        order: categoryOrder[meta.category],
      };
      menuItems.push(group);
    }

    group.children = group.children || [];

    if (meta.type) {
      let type = group.children.filter((i) => i?.title === meta.type)[0];
      if (!type) {
        type = {
          type: 'type',
          title: meta.type,
          children: [],
          order: typeOrder[meta.type],
        };
        group.children.push(type);
      }
      type.children = type.children || [];
      type.children.push(meta);
    } else {
      group.children.push(meta);
    }
  });

  function nestSort(list: Meta[]): Meta[] {
    return list.sort(sortFn).map((item) => {
      if (item.children) {
        return {
          ...item,
          children: nestSort(item.children),
        };
      }

      return item;
    });
  }

  return nestSort(menuItems);
}

export function isZhCN(pathname: string) {
  return !/-en\/?$/.test(pathname);
}

export function getLocalizedPathname(
  path: string,
  zhCN?: boolean,
  search?: string,
  hash?: {
    zhCN?: string;
    enUS?: string;
  },
) {
  const pathname = path.startsWith('/') ? path : `/${path}`;
  let fullPath: string = pathname;
  // if (!zhCN) {
  //   // to enUS
  //   fullPath = /\/?index-cn/.test(pathname) ? '/' : pathname.replace('-cn', '');
  // } else if (pathname === '/') {
  //   fullPath = '/index-cn';
  // } else if (pathname.endsWith('/')) {
  //   fullPath = pathname.replace(/\/$/, '-cn/');
  // } else {
  //   fullPath = `${pathname}-cn`;
  //   fullPath = fullPath.replace(/(-cn)+/, '-cn');
  // }

  if (hash) {
    const localHash = hash[zhCN ? 'zhCN' : 'enUS'];
    fullPath += `#${localHash}`;
  }

  return { pathname: fullPath, search };
}

export function isLocalStorageNameSupported() {
  if (typeof window === 'undefined') {
    return false;
  }

  const testKey = 'test';
  const storage = window?.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    console.error(
      'Your web browser does not support storing settings locally.',
      error,
    );
    return false;
  }
}

export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head!.appendChild(script);
  });
}

export function getMetaDescription(jml?: any[] | null) {
  const COMMON_TAGS = ['h1', 'h2', 'h3', 'p', 'img', 'a', 'code', 'strong'];
  if (!Array.isArray(jml)) {
    return '';
  }
  const paragraph = flattenDeep(
    jml
      .filter((item) => {
        if (Array.isArray(item)) {
          const [tag] = item;
          return tag === 'p';
        }
        return false;
      })
      // ['p', ['code', 'aa'], 'bb'] => ['p', 'aabb']
      .map((item) => {
        const [tag, ...others] = flatten(item);
        const content = others
          .filter(
            (other) =>
              typeof other === 'string' && !COMMON_TAGS.includes(other),
          )
          .join('');
        return [tag, content];
      }),
  ).find(
    (p) => p && typeof p === 'string' && !COMMON_TAGS.includes(p),
  ) as string;
  return paragraph;
}

export const isExternalLinks = (link?: string): boolean => {
  return /^(\w+:)\/\/|^(mailto|tel):/.test(link ?? '');
};

export const removeTitleCode = (title = '') => {
  return title.replace(/<\w+>.*<\/\w+>/g, '');
};

export const handleFullSidebarData = (
  fullSidebarData: Record<string, ISidebarGroup[]>,
): Record<string, ISidebarGroup[]> => {
  const nextFullSidebarData: Record<string, ISidebarGroup[]> = {};

  Object.entries(fullSidebarData).forEach(([key, value]) => {
    const existedLevelOneNavList = Object.keys(nextFullSidebarData);

    if (key.split('/').length === 3) {
      // 二级目录
      const levelOneNavKey = `/${key.split('/')[1]}`;
      let _levelTwoNav = value[0]?.children?.find((item) => {
        const _frontmatterInfo = item.frontmatter?.nav;
        return (
          typeof _frontmatterInfo === 'object' &&
          typeof _frontmatterInfo?.second === 'object'
        );
      });

      // 如果是 second 配置不为对象，直接获取其值即可
      if (!_levelTwoNav) {
        _levelTwoNav = value[0]?.children[0];
      }

      // 找找二级菜单名称以及顺序
      const _levelTwoNavInfo: any = _levelTwoNav?.frontmatter?.nav;
      const frontmatterNavSecond: { order: number; title?: string } = {
        order: 0,
        title: undefined,
      };

      if (typeof _levelTwoNavInfo !== 'string') {
        // @ts-ignore
        frontmatterNavSecond.order = _levelTwoNavInfo?.second?.order ?? 0;
        // @ts-ignore
        frontmatterNavSecond.title =
          _levelTwoNavInfo?.second?.title ?? _levelTwoNavInfo?.second;
      }

      if (existedLevelOneNavList.includes(levelOneNavKey)) {
        // 已存在，直接 push 为 children
        nextFullSidebarData[levelOneNavKey].push({
          title: frontmatterNavSecond.title,
          order: frontmatterNavSecond.order,
          children: value[0]?.children,
        });
      } else {
        nextFullSidebarData[levelOneNavKey] = value.map((item) => ({
          ...item,
          title: frontmatterNavSecond.title,
          order: frontmatterNavSecond.order,
        }));
      }
    } else if (existedLevelOneNavList.includes(key)) {
      nextFullSidebarData[key] = nextFullSidebarData[key].concat(value);
    } else {
      nextFullSidebarData[key] = value;
    }
  });

  return nextFullSidebarData;
};
