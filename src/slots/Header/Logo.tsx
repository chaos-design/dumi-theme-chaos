import * as React from 'react';
import { createStyles } from 'antd-style';
import { useLocation, useSiteData } from 'dumi';

import Link from '../../common/Link';
import * as utils from '../../utils';
import { Tooltip } from 'antd';
import { isLocalStorageNameSupported } from '../../utils';

const useStyle = createStyles(({ token, css }) => {
  const { headerHeight, colorTextHeading, fontFamily, mobileMaxWidth } = token;

  return {
    logo: css`
      height: ${headerHeight}px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: ${colorTextHeading};
      font-weight: bold;
      font-size: 24px;
      font-family: AlibabaPuHuiTi, ${fontFamily}, sans-serif;
      line-height: ${headerHeight}px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      column-gap: ${token.marginSM}px;

      &:hover {
        color: ${colorTextHeading};
      }

      img {
        width: 40px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
      }

      @media only screen and (max-width: ${mobileMaxWidth}px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `,
    title: css`
      line-height: 40px;
    `,
    logoImage: css`
      &:hover {
        transform: rotate(666turn);
        transition: 59s cubic-bezier(0.34, 0, 0.84, 1) 1s;
      }
    `,
  };
});

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}

const CHAOS_LOGO_TOUR_DISMISS = 'chaos.logo.tour.dismiss';

const Logo: React.FC<LogoProps> = ({ isZhCN }) => {
  const [tour, setTour] = React.useState(true);
  const { themeConfig } = useSiteData();
  const { search } = useLocation();
  const { styles: s } = useStyle();

  const logoSrc =
    themeConfig.logo || 'https://rain120.github.io/study-notes/img/chao.png';

  React.useEffect(() => {
    if (isLocalStorageNameSupported()) {
      if (!localStorage.getItem(CHAOS_LOGO_TOUR_DISMISS)) {
        setTour(true);
      } else {
        setTour(false);
      }
    }
  }, [tour]);

  return (
    <h1>
      <Link
        to={utils.getLocalizedPathname('/', isZhCN, search)}
        className={s.logo}
      >
        <Tooltip
          title="Hover见证魔法 😉"
          placement="right"
          open={tour}
          onOpenChange={(v) => {
            if (v) {
              if (isLocalStorageNameSupported()) {
                localStorage.setItem(CHAOS_LOGO_TOUR_DISMISS, '1');
              }
            } else {
              setTour(v);
            }
          }}
        >
          <img
            id="chaos-logo"
            className={s.logoImage}
            src={logoSrc}
            draggable={false}
            alt="logo"
          />
        </Tooltip>
        <span className={s.title}>Chaos</span>
      </Link>
    </h1>
  );
};

export default Logo;
