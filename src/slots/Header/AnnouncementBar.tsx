import { css } from "@emotion/react";
import { Alert } from "antd";
import { useCallback, useEffect, useState, type FC } from "react";
import useUserThemeConfig from "../../hooks/useUserThemeConfig";
import { AnnouncementBarProps } from "../../types";
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
  backgroundColor = "#e8d7ff",
  textColor = "#091E42",
  align = "center",
}: Pick<AnnouncementBarProps, "backgroundColor" | "textColor" | "align">) => {
  // const { token } = useSiteToken();

  return {
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

const CHAOS_ANNOUNCEMENT_BAR_DISMISS = "chaos.announcement.dismiss";

const AnnouncementBar: FC = () => {
  const [isClosed, setClosed] = useState(true);
  const { announcementBar } = useUserThemeConfig() || {};
  const s = useStyle(announcementBar || {});

  useEffect(() => {
    if (
      announcementBar?.id &&
      localStorage.getItem(CHAOS_ANNOUNCEMENT_BAR_DISMISS) === announcementBar.id
    ) {
      setClosed(true);
    } else {
      setClosed(false);
    }
  }, [announcementBar]);

  const handleClose = useCallback(() => {
    if (announcementBar?.id) {
      localStorage.setItem(CHAOS_ANNOUNCEMENT_BAR_DISMISS, announcementBar.id);
    }

    setClosed(true);
  }, []);

  if (isClosed) {
    return null;
  }

  return (
    <div className="announcement-bar">
      <Alert
        banner
        type="info"
        closable
        {...announcementBar}
        onClose={handleClose}
        css={announcementBar?.backgroundColor ? [s.container] : []}
      />
    </div>
  );
};

export default AnnouncementBar;
