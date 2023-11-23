import { css } from 'styled-components';

export const BaseButtonOutline = css`
  border: none;
  background: none;
  padding: 7px 10px;
  color: rgb(${({ theme }) => theme.font});
  width: fit-content;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  :hover {
    color: rgb(${({ theme }) => theme.primary_a});
  }
  span {
    font-weight: 500;
    pointer-events: none;
  }
`;

export const BaseButton = css`
  all: unset;
  border-radius: 8px;
  padding: 7px 10px;
  width: fit-content;
  cursor: pointer;
  background: rgb(${({ theme }) => theme.primary_c});
  color: rgb(${({ theme }) => theme.white});
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
  text-align: center;

  :hover {
    background: rgba(${({ theme }) => theme.primary_a}, 0.9);
    border: 1px solid rgba(${({ theme }) => theme.font}, 0.3);

    span {
      color: rgb(${({ theme }) => theme.white});
    }
  }

  span {
    background: transparent;
    font-weight: 500;
    pointer-events: none;
  }
`;

export const StyledCornerButton = css`
  all: unset;
  border-radius: 10px;
  color: rgb(${({ theme }) => theme.font});
  border: 1px solid rgba(${({ theme }) => theme.black}, 0.07);
  width: fit-content;
  cursor: pointer;
  display: grid;
  place-content: center;
  padding: 5px;

  :hover {
    color: rgb(${({ theme }) => theme.primary_a});
  }

  svg {
    pointer-events: none;
    width: 20px;
    height: 20px;
  }
`;

export const StyledLabels = css`
  position: relative;
  line-height: 1.4rem;

  svg {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 2px;
    left: 0;
    color: rgb(${({ theme }) => theme.font});
  }
  span {
    padding-left: 25px;
    font-weight: 500;
  }
`;
