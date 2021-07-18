/**
 *
 * PagePreLoader
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import './styles.scss';

interface Props {}

export const PagePreLoader = memo((props: Props) => {
  return (
    <Div>
      <div className="wrapper">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </div>

      <svg>
        <defs>
          <filter id="filter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="18"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
              result="filter"
            />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg>
    </Div>
  );
});

const Div = styled.div``;
