import { GithubOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Flex, Tooltip } from 'antd';
import { useMemo, type FC } from 'react';
import useUserThemeConfig, {
  useThemeGithubConfig,
} from '../../hooks/useUserThemeConfig';
import useSiteToken from '../../hooks/useSiteToken';
import { SocialTypes } from 'dumi/dist/client/theme-api/types';
import SocialIcon from 'dumi/theme-default/slots/SocialIcon';

const BASE_SIZE = '1.2em';

const useStyle = () => {
  const { token } = useSiteToken();
  const { controlHeight, motionDurationMid } = token;

  return {
    extra: css`
      .dumi-default-icon + .dumi-default-icon {
        margin-inline-start: 12px;
      }

      .dumi-default-icon {
        font-size: 16px;
      }

      .dumi-default-icon > svg {
        height: ${BASE_SIZE};
      }
    `,
  };
};

const HeaderExtra: FC = () => {
  const { socialLinks } = useUserThemeConfig();
  const { github } = useThemeGithubConfig();
  const style = useStyle();

  const socialIcons = useMemo(
    () =>
      [
        github
          ? {
              icon: 'github' as SocialTypes,
              link: github,
            }
          : null,
        ...(socialLinks
          ? Object.keys(socialLinks)
              .slice(0, github ? 4 : 5)
              .map((key) => ({
                icon: key as SocialTypes,
                link: socialLinks[key as SocialTypes],
              }))
          : []),
      ].filter(Boolean),
    [socialLinks],
  );

  if (!socialIcons.length) {
    return null;
  }

  return (
    <Flex gap={4} align="center" css={style.extra}>
      {socialIcons.map((item: { icon: SocialTypes; link: string }) => (
        <SocialIcon icon={item.icon} link={item.link || ''} key={item.link} />
      ))}
    </Flex>
  );
};

export default HeaderExtra;
