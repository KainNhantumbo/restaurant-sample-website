import styled from 'styled-components';
import { BaseButton, StyledCornerButton } from '../defaults';

export const _cookies = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 12000;
  display: grid;
  place-content: center;
  place-items: center;
  background: rgba(${({ theme }) => theme.foreground}, 0.2);
  backdrop-filter: blur(5px);

  .modal-container {
    width: 100%;
    border-radius: 12px;
    padding: 15px 20px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    line-height: 1.4rem;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 25px rgba(${({ theme }) => theme.black}, 0.1);
    border: 1px solid rgba(${({ theme }) => theme.font}, 0.2);

    h1 {
      all: unset;
      line-height: 1.6rem;
      font-size: 1.1rem;
      display: flex;
      flex-direction: row;
      gap: 5px;
      font-weight: 600;
      align-items: center;
    }

    .options-container {
      display: flex;
      flex-direction: column;
      gap: 12px;

      h2 {
        font-weight: 600;
        line-height: 1.6rem;
      }
    }

    @media screen and (max-width: 435px) {
      flex-direction: column;
    }

    .close-button {
      ${StyledCornerButton}
      border: none;
      padding: 0;
      position: absolute;
      top: 12px;
      right: 12px;

      :hover {
        color: rgb(${({ theme }) => theme.error});
      }
    }

    .actions-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 12px;
      border-top: 2px solid rgba(${({ theme }) => theme.font}, 0.9);
      gap: 8px;

      a {
        font-weight: 600;
        text-decoration: underline;
        text-underline-offset: 3px;
      }

      .accept-button {
        ${BaseButton}
      }
    }
  }
`;
