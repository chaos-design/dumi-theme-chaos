import React from 'react';
import { css } from '@emotion/react';
import { Alert, ConfigProvider } from 'antd';
import { useCallback, useEffect, useState, type FC } from 'react';
import useUserThemeConfig from '../../hooks/useUserThemeConfig';
import { AnnouncementBarProps } from '../../types';
import { isLocalStorageNameSupported } from '../../utils';
import useSiteToken from '../../hooks/useSiteToken';
import { useSiteContext } from '../SiteContext';
// import useSiteToken from '../../hooks/useSiteToken';

export const hexToHsl = (hex: string, decline = 0) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  l = l * 100 - decline;

  return `hsl(${Math.round(h * 360)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
};

const useStyle = ({
  backgroundColor = '#e8d7ff',
  textColor = '#091E42',
  align = 'center',
}: Pick<AnnouncementBarProps, 'backgroundColor' | 'textColor' | 'align'>) => {
  const { token } = useSiteToken();

  return {
    link: css`
      margin-inline-start: 4px;
      font-size: ${token.fontSize}px;

      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        margin-inline-start: 0;
      }
    `,
    container: css`
      --site-announcement-bar-stripe-color1: ${hexToHsl(backgroundColor, 10)};
      --site-announcement-bar-stripe-color2: ${hexToHsl(backgroundColor, 15)};

      background: repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );
      padding: 8px 16px;

      text-align: ${align};

      & .ant-alert-message {
        color: ${textColor};
      }

      & .ant-alert-description {
        color: ${textColor};
      }
    `,
  };
};

const CHAOS_ANNOUNCEMENT_BAR_DISMISS = 'chaos.announcement.dismiss';

const AnnouncementBar: FC = () => {
  const [isClosed, setClosed] = useState(true);
  const { announcementBar } = useUserThemeConfig() || {};
  const { updateSiteConfig } = useSiteContext();
  const s = useStyle(announcementBar || {});

  useEffect(() => {
    if (
      announcementBar?.id &&
      (!isLocalStorageNameSupported()
        ? true
        : localStorage.getItem(CHAOS_ANNOUNCEMENT_BAR_DISMISS) ===
          announcementBar.id)
    ) {
      setClosed(true);
    } else {
      setClosed(false);
    }
  }, [announcementBar]);

  useEffect(() => {
    updateSiteConfig({
      bannerVisible: !isClosed,
    });
  }, [isClosed]);

  const handleClose = useCallback(() => {
    if (announcementBar?.id && isLocalStorageNameSupported()) {
      localStorage.setItem(CHAOS_ANNOUNCEMENT_BAR_DISMISS, announcementBar.id);
    }

    setClosed(true);
  }, []);

  if (isClosed) {
    return null;
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorInfoBg:
            announcementBar?.backgroundColor ||
            'linear-gradient(90deg, #84fab0, #8fd3f4)',
          colorTextBase: announcementBar?.textColor || '#000',
        },
      }}
    >
      <div className="announcement-bar">
        <Alert
          banner
          type="info"
          closable
          {...announcementBar}
          message={
            <>
              <span>{announcementBar?.message}</span>
              {!announcementBar?.more || !announcementBar?.link ? null : (
                <a
                  css={[s.link]}
                  href={announcementBar?.link.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    window.gtag?.('event', '点击', {
                      event_category: 'top_banner',
                      event_label: announcementBar?.link,
                    });
                  }}
                >
                  {announcementBar?.more}
                </a>
              )}
            </>
          }
          onClose={handleClose}
          css={announcementBar?.backgroundColor ? [s.container] : []}
        />
      </div>
    </ConfigProvider>
  );
};

export default AnnouncementBar;
