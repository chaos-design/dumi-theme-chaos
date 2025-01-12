import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { createStyles } from 'antd-style';
import { useThemeGithubConfig } from '../hooks/useUserThemeConfig';

const getBranchUrlByUserInfo = (user: string, branch = 'main') => `https://github.com/${user}/edit/${branch}`;
export interface EditButtonProps {
  title: React.ReactNode;
  filename?: string;
}

const useStyle = createStyles(({ token, css }) => {
  const { colorIcon, colorText, iconCls } = token;

  return {
    editButton: css`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: ${token.marginXS}px;
        ${iconCls} {
          display: block;
          color: ${colorIcon};
          font-size: ${token.fontSizeLG}px;
          transition: all ${token.motionDurationSlow};
          &:hover {
            color: ${colorText};
          }
        }
      }
    `,
  };
});

const EditButton: React.FC<EditButtonProps> = ({ title, filename }) => {
  const { styles } = useStyle();
  const { user, repo, branch, docDir } = useThemeGithubConfig();

  return (
    <Tooltip title={title}>
      <a
        className={styles.editButton}
        href={`${getBranchUrlByUserInfo(`${user}/${repo}`, branch)}${docDir}${filename}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <EditOutlined />
      </a>
    </Tooltip>
  );
};

export default EditButton;
