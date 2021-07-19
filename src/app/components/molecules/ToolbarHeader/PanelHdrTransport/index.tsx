/** @jsxImportSource theme-ui */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import theme from '../../../../../styles/theme';
import Box from 'ui-box';
import { Image } from 'theme-ui';
import LocatorIcon from './Locator.svg';
import PlayIcon from './Play.svg';
import RecordIcon from './record.svg';
import OverdubIcon from './overdub.svg';
import LoopIcon from './loop.svg';
import StopIcon from './Stop.svg';

interface Props {}

export const PanelHdrTransport = memo((props: Props) => {
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
          TRANSPORT
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
          <Image src={LocatorIcon} variant="headerPanel" />
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
          39.3.1
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
          <Image src={PlayIcon} variant="headerPanel" />
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
          <Image src={StopIcon} variant="headerPanel" />
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
          <Image src={RecordIcon} variant="headerPanel" />
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
          <Image src={OverdubIcon} variant="headerPanel" />
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
          <Image src={LoopIcon} variant="headerPanel" />
        </Box>
      </Box>
    </Box>
  );
});
