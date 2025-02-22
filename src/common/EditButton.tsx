import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { createStyles } from 'antd-style';
import { useThemeGithubConfig } from '../hooks/useUserThemeConfig';

const getBranchUrlByUserInfo = (
  user: string,
  { branch = 'main', blob = false },
) => `https://github.com/${user}/${blob ? 'blob' : 'edit'}/${branch}`;
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
  const { owner, repo, branch, docDir, isGithub, github, blob } =
    useThemeGithubConfig();

  return (
    <Tooltip title={title}>
      <a
        className={styles.editButton}
        href={
          isGithub
            ? `${getBranchUrlByUserInfo(`${owner}/${repo}`, { branch, blob })}${docDir}${filename}`
            : blob
              ? `${github}/blob/${branch}${docDir}${filename}`
              : ''
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <EditOutlined />
      </a>
    </Tooltip>
  );
};

export default EditButton;
