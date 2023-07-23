import styled from 'styled-components';

export const SideBarView = styled.div`
  height: 100vh;
  overflow-y: auto;
  width: 20%;
  position: relative;
  padding: 1rem 0;
  padding-left: 18px;
  top: 0;
  left: 0;
  background-color: white;

  .sidebar-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 90%;
  }

  @media screen and (max-width: 884px) {
    display: none !important;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LogoView = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  padding-bottom: 1.5rem;

  img {
    width: 90%;
    height: auto;
  }
`;

export const ListView = styled.ul`
  /* padding-bottom: 3rem;
  padding-top: 0.5rem; */

  .support__btn {
    margin-left: 18px;
    /* width: max-content; */
    border-radius: 39px;
    /* padding: 12px 10px; */
    width: 120px;
    height: 40px;
    background: #ef2c5a;
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .panel__btn {
    margin-left: 18px;
    border: 2px solid #0a0a0a;
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    width: 120px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  }
  h6 {
    padding-left: 18px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #8d8d8d;
    margin-bottom: 16px;
  }

  li {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    gap: 11px;
    /* margin-bottom: 0.5rem; */
    padding: 0.7rem 1rem;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: #0a0a0a;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      transition: 0.2s ease-in-out;
      cursor: pointer;
      color: #7791cd !important;
    }

    .nav__link {
      text-decoration: none;
      display: flex;
      align-items: center;
      width: 100%;
      gap: 11px;
      color: inherit;

      &:hover {
        color: #7791cd !important;
      }
    }
  }
`;
