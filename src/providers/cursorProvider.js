import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import CursorDefault from './cursors/cursor-default.svg';
export const CursorContext = React.createContext('cursorContext');

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left'];

const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState(false);

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  });

  const { x, y } = mousePosition;

  const onCursor = cursorType => {
    cursorType =
      (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
    setCursor(cursorType);
  };

  return (
    <CursorContext.Provider value={{ onCursor }}>
      <div
        className={cx('movable', {
          active: !!cursor,
          [`cursor-${cursor}`]: !!cursor,
        })}
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
      >
        <div className="cursor pointer">
          <svg
            height="36"
            viewBox="0 0 36 36"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <circle
                className="dot"
                cx="18"
                cy="18"
                fill="#b5b2b1"
                r="6"
                data-color-type="foreground"
                data-color-prop="fill"
              />
            </g>
          </svg>
        </div>
        <div style={{ display: 'none' }}>
          <div className="cursor default">
            <svg
              height="44"
              viewBox="0 0 44 44"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <circle
                  className="ring"
                  cx="22"
                  cy="22"
                  r="21.5"
                  stroke="#c7a329"
                  data-color-type="foreground"
                  data-color-prop="stroke"
                />
                <circle
                  className="dot"
                  cx="22"
                  cy="22"
                  fill="#c7a329"
                  r="6"
                  data-color-type="foreground"
                  data-color-prop="fill"
                />
              </g>
            </svg>
          </div>
          <div className="cursor compass">
            <svg
              height="53"
              viewBox="0 0 44 53"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                data-color-type="foreground"
                data-color-prop="stroke"
              >
                <circle
                  className="ring"
                  cx="22"
                  cy="31"
                  r="21.5"
                  stroke="#000"
                  data-color-type="foreground"
                  data-color-prop="stroke"
                />
                <circle
                  className="dot"
                  cx="22"
                  cy="31"
                  fill="#000"
                  r="6"
                  data-color-type="foreground"
                  data-color-prop="fill"
                />
                <polyline
                  id="Path"
                  stroke="#000000"
                  points="18 9 22 5 26 9"
                  data-color-type="foreground"
                  data-color-prop="stroke"
                ></polyline>
              </g>
            </svg>
          </div>
          <div className="cursor gallery">
            <svg
              height="44"
              viewBox="0 0 44 44"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="#fff">
                <circle className="ring" cx="22" cy="22" r="21.5" />
                <g transform="translate(14 17)">
                  <path d="m2.47619048 9h-2.47619048v-9h13v2.57142857" />
                  <path d="m10.7380952 12h-7.7380952v-9h13v9z" />
                </g>
              </g>
            </svg>
          </div>
          <div className="cursor play">
            <svg
              width="44px"
              height="44px"
              viewBox="0 0 44 44"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="play">
                  <circle
                    className="ring"
                    id="Oval"
                    stroke="#FFFFFF"
                    cx="22"
                    cy="22"
                    r="21.5"
                  ></circle>
                  <polygon
                    id="Path"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                    points="18 16 18 28 28 22"
                  ></polygon>
                </g>
              </g>
            </svg>
          </div>
          <div className="cursor pause">
            <svg
              width="44px"
              height="44px"
              viewBox="0 0 44 44"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="play">
                  <circle
                    className="ring"
                    id="Oval"
                    stroke="#FFFFFF"
                    cx="22"
                    cy="22"
                    r="21.5"
                  ></circle>
                  <g
                    id="Group"
                    transform="translate(18.000000, 17.000000)"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  >
                    <polygon id="Path" points="0 0 2 0 2 10 0 10"></polygon>
                    <polygon id="Path" points="5 0 7 0 7 10 5 10"></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="cursor open">
            <svg
              height="44"
              viewBox="0 0 44 44"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="#000"
                data-color-type="foreground"
                data-color-prop="stroke"
              >
                <circle className="ring" cx="22" cy="22" r="21.5" />
                <path d="m22 16.5v11" />
                <path d="m22 16.5v11" transform="matrix(0 -1 1 0 0 44)" />
              </g>
            </svg>
          </div>
          <div className="cursor close">
            <svg
              height="44"
              viewBox="0 0 44 44"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="#fff"
                data-color-type="foreground"
                data-color-prop="stroke"
              >
                <circle className="ring" cx="22" cy="22" r="21.5" />
                <path d="m18 18 8 8" />
                <path d="m18 18 8 8" transform="matrix(0 -1 1 0 0 44)" />
              </g>
            </svg>
          </div>
          <div className="cursor next">
            <svg
              height="44"
              viewBox="0 0 44 44"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="#fff">
                <circle className="ring" cx="22" cy="22" r="21.5" />
                <path d="m16.5 22h10.5" />
                <path d="m27 17-4 5 4 5" transform="matrix(-1 0 0 1 50 0)" />
              </g>
            </svg>
          </div>
          <div className="cursor previous">
            <svg
              height="44"
              viewBox="0 0 44 44"
              width="44"
              transform="rotate(180)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="#fff">
                <circle className="ring" cx="22" cy="22" r="21.5" />
                <path d="m16.5 22h10.5" />
                <path d="m27 17-4 5 4 5" transform="matrix(-1 0 0 1 50 0)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
