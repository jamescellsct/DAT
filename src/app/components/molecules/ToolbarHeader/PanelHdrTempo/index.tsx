/** @jsxImportSource theme-ui */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import theme from '../../../../../styles/theme';
import Box from 'ui-box';

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
          color: `${theme.colors.primaryText}`,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          borderBottom: `${theme.borders.borderLight}`,
          paddingBottom: `${theme.space.xs}`,
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
          paddingTop: `${theme.space.xs}`,
        }}
        {...props}
      >
        <span>hi</span>
      </Box>
    </Box>
  );
});
