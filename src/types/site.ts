import { ISiteContext } from "dumi/dist/client/theme-api/context";

export interface Author {
  avatar: string;
  href: string;
  type: 'design' | 'develop';
  name: string;
}

export interface Article {
  title: string;
  href: string;
  date: string;
  type: 'design' | 'develop';
  author: Author['name'];
}

export interface Recommendation {
  title?: string;
  img?: string;
  href?: string;
  popularize?: boolean;
  description?: string;
}

type SourceType = 'zhihu' | 'yuque';
export interface Extra {
  title: string;
  description: string;
  date: string;
  img: string;
  source: SourceType;
  href: string;
}

export interface Icon {
  name: string;
  href: string;
}

export type Articles = {
  cn: Article[];
  en: Article[];
};

export type Authors = Author[];

export type Recommendations = {
  cn: Recommendation[];
  en: Recommendation[];
};

export type Extras = {
  cn: Extra[];
  en: Extra[];
};

export type Icons = Icon[];

export type SiteData = ISiteContext & {
  articles: Articles;
  authors: Authors;
  recommendations: Recommendations;
  extras: Extras;
  icons: Icons;
};
