import React from 'react';
import { useRouteMeta, useIntl, FormattedMessage } from 'dumi';
import { EditOutlined } from '@ant-design/icons';
import useUserThemeConfig from '../hooks/useUserThemeConfig';
import { createStyles } from 'antd-style';

export const useStyle = createStyles(({ token, css }) => {
  return {
    editLink: css`
      font-size: ${token.fontSizeSM}px;
    `,
  };
});

const EditLink = () => {
  const { frontmatter } = useRouteMeta();
  const { editLink } = useUserThemeConfig();
  const intl = useIntl();
  const { styles: s } = useStyle();

  const showEditLink = editLink && frontmatter.filename;

  return showEditLink ? (
    <div className={s.editLink}>
      <a
        target="_blank"
        href={`${intl.formatMessage(
          { id: '$internal.edit.link' },
          { filename: frontmatter.filename }
        )}`}
        rel="noreferrer"
      >
        <EditOutlined />
        <FormattedMessage id="app.footer.actions.edit" />
      </a>
    </div>
  ) : null;
};

export default EditLink;
