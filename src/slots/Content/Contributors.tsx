import React, { useContext } from 'react';
import ContributorsList from '@qixian.cs/github-contributors-list';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import { useIntl } from 'dumi';

import SiteContext from '../SiteContext';
import ContributorAvatar from './ContributorAvatar';
import { UserGithubConfig } from '../../hooks/useUserThemeConfig';

const useStyle = createStyles(({ token, css }) => ({
  listMobile: css`
    // margin: 1em 0 !important;
    margin-bottom: 1em !important;
  `,
  title: css`
    font-size: ${token.fontSizeSM}px;
    opacity: 0.5;
    margin-bottom: ${token.marginXS}px;
  `,
  list: css`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all ${token.motionDurationSlow};
      margin-inline-end: -${token.marginXS}px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `,
}));

interface ContributorsProps extends UserGithubConfig {
  filename?: string;
}

const Contributors: React.FC<ContributorsProps> = ({ filename, ...github }) => {
  const { formatMessage } = useIntl();
  const { styles } = useStyle();
  const { isMobile } = useContext(SiteContext);

  if (!filename || !github.repo || !github.owner) {
    return null;
  }

  return (
    <div
      className={classNames({
        [styles.listMobile]: isMobile,
      })}
    >
      <div className={styles.title}>
        {formatMessage({ id: 'app.content.contributors' })}
      </div>
      <ContributorsList
        cache
        repo={github.repo}
        owner={github.owner}
        fileName={filename}
        branch={github.branch}
        className={styles.list}
        renderItem={(item, loading) => (
          <ContributorAvatar item={item} loading={loading} key={item?.url} />
        )}
      />
    </div>
  );
};

export default Contributors;
