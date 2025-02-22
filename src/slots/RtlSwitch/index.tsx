import React, { useContext, type FC } from 'react';
import { css } from '@emotion/react';
import type { SiteContextProps } from '../SiteContext';
import SiteContext from '../SiteContext';
import { useUserThemeEnableConfig } from '../../hooks/useUserThemeConfig';
import SwitchBtn from '../Header/SwitchBtn';
import LTRIcon from '../../icons/LTRIcon';
import RTLIcon from '../../icons/RTLIcon';
import DirectionIcon from '../../icons/DirectionIcon';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ token, css }) => {
  return {
    dataDirectionIcon: css`
      width: 20px;
    `,
  };
});

const RtlSwitch: FC = () => {
  const { direction, updateSiteConfig } =
    useContext<SiteContextProps>(SiteContext);
  const { styles: s } = useStyle();
  const { rtl = true } = useUserThemeEnableConfig();

  if (!rtl) {
    return null;
  }

  const onDirectionChange = () => {
    updateSiteConfig({ direction: direction !== 'rtl' ? 'rtl' : 'ltr' });
  };

  return (
    <SwitchBtn
      key="direction"
      onClick={onDirectionChange}
      value={direction === 'rtl' ? 2 : 1}
      label1={<DirectionIcon className={s.dataDirectionIcon} direction="ltr" />}
      tooltip1="LTR"
      label2={<DirectionIcon className={s.dataDirectionIcon} direction="rtl" />}
      tooltip2="RTL"
      pure
      aria-label="RTL Switch Button"
    />
  );
};

export default RtlSwitch;
