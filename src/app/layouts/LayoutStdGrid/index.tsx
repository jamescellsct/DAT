/**
 *
 * LayoutStdGrid
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import Box from 'ui-box';
import { ToolbarHeader } from '../../components/molecules/ToolbarHeader';
import { ToolbarFooter } from '../../components/molecules/ToolbarFooter';

interface Props {
  children: React.ReactNode;
}

function LayoutHeader(props) {
  return (
    <Box is="div" {...props}>
      <ToolbarHeader {...props} />
    </Box>
  );
}

function LayoutFooter(props) {
  return (
    <Box is="div" {...props}>
      <ToolbarFooter {...props} />
    </Box>
  );
}

function LayoutContent(props) {
  return <Box is="div" flex="1 1 auto" {...props} />;
}

export const LayoutStdGrid = memo((props: Props) => {
  return (
    <>
      <LayoutStdGridContainer>
        <LayoutHeader />
        <LayoutContent>{props.children}</LayoutContent>
        <LayoutFooter />
      </LayoutStdGridContainer>
    </>
  );
});

const LayoutStdGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`;
