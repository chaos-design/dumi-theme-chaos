import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { FormattedMessage } from 'dumi';
import { ClockCircleOutlined } from '@ant-design/icons';
import useSiteToken from '../hooks/useSiteToken';
import useUserThemeConfig from '../hooks/useUserThemeConfig';

const useStyle = () => {
  const { token } = useSiteToken();

  const { colorTextTertiary, marginXXS } = token;

  return {
    lastUpdatedWrap: css`
      color: ${colorTextTertiary};
      display: flex;
      align-items: center;
      font-size: ${token.fontSizeSM}px;
    `,
    lastUpdatedLabel: css`
      margin-inline-start: ${marginXXS}px;
      margin-inline-end: ${marginXXS}px;
    `,
    lastUpdatedTime: css`
    `
  };
};

const LastUpdated: React.FC<{ time?: number }> = ({ time }) => {
  const styles = useStyle();
  const { lastUpdated } = useUserThemeConfig();
  const [isoLastUpdated, setIsoLastUpdated] = useState('');
  const [lastUpdatedTime, setLastUpdatedTime] = useState('');
  const showLastUpdated = lastUpdated && time;

  useEffect(() => {
    if (showLastUpdated) {
      setIsoLastUpdated(new Date(time!).toISOString());
      setLastUpdatedTime(
        new Intl.DateTimeFormat(undefined, {
          dateStyle: 'short',
          timeStyle: 'short'
        }).format(time)
      );
    }
  }, [showLastUpdated, time]);

  return lastUpdated && time ? (
    <div css={styles.lastUpdatedWrap}>
      <ClockCircleOutlined />
      <span css={styles.lastUpdatedLabel}>
        <FormattedMessage id="content.footer.last.updated" />
      </span>
      <time css={styles.lastUpdatedTime} dateTime={isoLastUpdated}>{lastUpdatedTime}</time>
    </div>
  ) : null;
};

export default LastUpdated;
