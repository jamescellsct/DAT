/** @jsxImportSource theme-ui */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import theme from '../../../../../styles/theme';
import Box from 'ui-box';
import { Image } from 'theme-ui';
import NudgeDown from './Nudge_Down.svg';
import NudgeUp from './Nudge_Up.png';

interface Props {}

export const PanelHdrTempo = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Box
      is="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: `${theme.colors.primaryColor}`,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
      {...props}
    >
      <Box
        is="div"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          color: `${theme.colors.primaryText}`,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          borderBottom: `${theme.borders.borderLight}`,
          paddingBottom: `${theme.space.md}`,
        }}
        {...props}
      >
        <Box
          is="span"
          sx={{
            display: 'flex',
          }}
          {...props}
        >
          TEMPO
        </Box>
      </Box>
      <Box
        is="div"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          color: `${theme.colors.primaryText}`,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingTop: `${theme.space.md}`,
        }}
        {...props}
      >
        <Box
          is="span"
          sx={{
            display: 'flex',
            fontSize: '12px',
            cursor: 'pointer',
          }}
          {...props}
        >
          LINK
        </Box>
        <Box
          is="span"
          sx={{
            display: 'flex',
            fontSize: '12px',
            marginLeft: `${theme.space.md}`,
            cursor: 'pointer',
          }}
          {...props}
        >
          TAP
        </Box>
        <Box
          is="span"
          sx={{
            display: 'flex',
            fontSize: '12px',
            marginLeft: `${theme.space.md}`,
            cursor: 'pointer',
          }}
          {...props}
        >
          128.00
        </Box>
        <Box
          is="span"
          sx={{
            display: 'flex',
            fontSize: '12px',
            marginLeft: `${theme.space.md}`,
            cursor: 'pointer',
          }}
          {...props}
        >
          <Image src={NudgeDown} variant="headerPanel" />
        </Box>
        <Box
          is="span"
          sx={{
            display: 'flex',
            fontSize: '12px',
            marginLeft: `${theme.space.md}`,
            cursor: 'pointer',
          }}
          {...props}
        >
          <Image src={NudgeUp} variant="headerPanel" />
        </Box>
      </Box>
    </Box>
  );
});
