/** @jsxImportSource theme-ui */

import React, { memo } from 'react';
import Box from 'ui-box';
import theme from '../../../../styles/theme';
import { PanelHdrTempo } from './PanelHdrTempo';
import { PanelHdrTimeSignature } from './PanelHdrTimeSignature';
import { PanelHdrTransport } from './PanelHdrTransport';
import { PanelHdrEnvelopes } from './PanelHdrEnvelopes';

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
        marginRight: `${theme.space.lg}`,
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

      <HeaderPanel margin-left="42px">
        <PanelHdrTimeSignature />
      </HeaderPanel>

      <HeaderPanel margin-left="42px">
        <PanelHdrTransport />
      </HeaderPanel>

      <HeaderPanel margin-left="42px">
        <PanelHdrEnvelopes />
      </HeaderPanel>
    </Box>
  );
});
