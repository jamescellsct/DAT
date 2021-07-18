/** @jsxImportSource theme-ui */

import React, { memo } from 'react';
import Box from 'ui-box';
import theme from '../../../../styles/theme';
import { PanelHdrTempo } from './PanelHdrTempo';

interface Props {}

function HeaderPanel(props) {
  return (
    <Box
      is="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: `${theme.colors.toolbarSelected}`,
        color: `${theme.colors.primaryColor}`,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: `${theme.space.lg}`,
        padding: `${theme.space.none}`,
      }}
      {...props}
    />
  );
}

export const ToolbarHeader = memo((props: Props) => {
  // const { t, i18n } = useTranslation();

  return (
    <Box
      is="div"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        width: '100%',
        height: 128,
        backgroundColor: `${theme.colors.toolbarSelected}`,
        color: `${theme.colors.primaryColor}`,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: `${theme.space.lg}`,
      }}
      {...props}
    >
      <HeaderPanel>
        <PanelHdrTempo />
      </HeaderPanel>

      <HeaderPanel></HeaderPanel>
    </Box>
  );
});
