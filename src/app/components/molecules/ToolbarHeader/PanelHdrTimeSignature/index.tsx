/** @jsxImportSource theme-ui */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import theme from '../../../../../styles/theme';
import Box from 'ui-box';

interface Props {}

export const PanelHdrTimeSignature = memo((props: Props) => {
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
          SIGNATURE
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
          F#
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
          MIN
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
          4/4
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
          1 BAR
        </Box>
      </Box>
    </Box>
  );
});
