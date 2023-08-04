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
    height: 95%;
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
  li {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 0.7rem 0rem;
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
