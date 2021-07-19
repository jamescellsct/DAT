/**
 *
 * DotRing
 *
 */
import React, { memo, useContext } from 'react';
import useMousePosition from '../../../../hooks/useMousePosition';
import { MouseContext } from '../../../../context/mouse-context';
import './styles.css';

interface Props {}

export const DotRing = memo((props: Props) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={'ring ' + cursorType}
      />
      <div
        className={'dot ' + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </>
  );
});
