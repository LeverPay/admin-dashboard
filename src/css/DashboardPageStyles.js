import styled from 'styled-components';

export const SidebarLayoutView = styled.div`
  display: flex;

  @media screen and (max-width: 884px) {
    flex-direction: column;
    width: 100%;
  }

  .mobileNavbar {
    z-index: 999;
    position: fixed;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background-color: white;
    top: 0;
    padding: 1.6em;
    color: black !important;
    transition: transform 0.3s ease-in-out;

    @media (min-width: 320px) and (max-width: 768px) {
      padding: 1em;
    }

    .mobile_close_header {
      margin-bottom: 2rem;
      cursor: pointer;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #7791cd;
      transition: color 0.3s ease-in-out;

      @media (min-width: 768px) and (max-width: 1114px) {
        width: 35%;
      }
    }

    @media (min-width: 320px) and (max-width: 767px) {
      width: 80%;
    }

    &:hover {
      color: #a0aec0;
    }
  }
`;

// DASHBOARD COMPONENT STYLING

export const DashboardView = styled.main`
  width: 100%;
  overflow: scroll;
  height: calc(100vh - 1rem);
  background-color: #f4f7fe;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 884px) {
    width: 100%;
  }
`;

export const DashboardNavView = styled.nav`
  display: flex;
  align-items: center;
  z-index: 100;
  position: sticky;
  top: 0;
  right: 0;
  background-color: #f4f7fe;
  transition: all 0.2s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 884px) {
    margin-bottom: 1rem;
  }
`;

export const DashboardUserView = styled.div`
  width: max-content;
  gap: 22px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  .app__user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    .user__img {
      width: 27px;
      height: 27px;
    }

    p {
      //styleName: Paragraph - Inter/P3/Semi Bold;
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: right;
    }
  }
`;

export const DashboardSalesOverview = styled.div`
  padding: 100px 32px 0 32px;

  @media (min-width: 320px) and (max-width: 1280px) {
    padding: 10px;
  }

  h2 {
    //styleName: Heading - General Sans/H5 - Small/Medium;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: left;
    margin-bottom: 24px;

    @media (min-width: 320px) and (max-width: 1280px) {
      margin-left: 0.5rem;
    }
  }

  .app__salesOverview {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 1280px) {
      flex-direction: column;
      gap: 2rem;
    }

    .black__theme {
      background-color: #000000;

      .white__color {
        color: white !important;
      }
    }

    .sales__card {
      border: 1px solid #000000;
      height: 320px;
      width: 290px;
      border-radius: 8px;

      @media (min-width: 320px) and (max-width: 767px) {
        width: 95%;
      }

      @media (min-width: 768px) and (max-width: 1280px) {
        width: 100%;
      }

      .chart {
        width: 100%;
      }

      .today__sales {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 5px;
        color: #000000;
        padding: 10px 20px;
      }

      .sales__amount {
        //styleName: Heading - General Sans/H5 - Small/Medium;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #000000;
        padding: 5px 20px;
      }
    }
  }
`;

export const DashboardGraphView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin: 2rem;

  @media (min-width: 320px) and (max-width: 1280px) {
    flex-direction: column;
    gap: 0.5rem;
  }

  h4 {
    margin-bottom: 1rem;
  }

  .app__salesGraph {
    width: 70%;
    margin-top: 50px;

    @media (min-width: 320px) and (max-width: 767px) {
      width: 110%;
      /* margin-top: 25px; */
      margin-top: 0;
    }

    @media (min-width: 768px) and (max-width: 1280px) {
      width: 100%;
      /* margin-top: 25px; */
      margin-top: 0;
    }

    .app__salesGraphContent {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.1rem;

      @media (min-width: 320px) and (max-width: 767px) {
        display: none;
      }

      .divider {
        border: 1px solid #0000001a;
        height: 24px;
        width: 0px;
      }

      .usd__option {
        padding: 10px;
        border-radius: 8px;
        outline: none;
      }

      .email__option {
        border: 2px solid red;
        width: 400px;
        /* height: 20px; */
        padding: 10px;
        border: 1px solid #ededed;
        border-radius: 8px;
        outline: none;

        @media (min-width: 768px) and (max-width: 1280px) {
          width: 200px;
        }
      }

      .download__btn {
        padding: 15px 10px;
        border: 1px solid #000000;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        //styleName: Caption/Semi Bold;
        font-family: Inter;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
        cursor: pointer;

        &:hover {
          transform: translateY(-2px);
        }

        img {
          width: 12px;
          height: 12px;
        }
      }

      h2 {
        //styleName: Heading - General Sans/H5 - Small/Medium;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #0a0a0a;
      }

      .theme__color {
        color: #ef2c5a !important;
      }

      p {
        //styleName: Paragraph - Inter/P3/Semi Bold;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    .sales_graph {
      padding: 1rem;
      border: 1px solid #0a0a0a;
      border-radius: 8px;

      @media (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        padding: 1rem;
      }
    }
  }
`;

export const MobileNavbar = styled.nav`
  display: none;

  img {
    width: 100%;
    height: auto;
  }

  .uil-bars {
    cursor: pointer;
    font-size: 30px;
  }

  @media screen and (max-width: 884px) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0px 5px 20px 0px #0000000a;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 150;
    background-color: white;
  }
`;

export const KlashaCard = styled.div`
  width: 30%;
  height: 284px;
  border-radius: 8px;
  margin-top: 6.3rem;
  padding: 24px;
  background-image: url('/public/assets/lines.png');
  background-color: #ef2c5a;
  background-blend-mode: overlay;
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 110%;
    margin-top: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 50%;
    padding: 1rem;
  }

  .app__klashaCard {
    width: 200px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;

    .klasha__btn {
      cursor: pointer;

      &:hover {
        transform: translateY(-2px);
      }
    }
    .image__klasha {
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;

      img {
        height: 100%;
        width: 100%;
      }
    }

    button {
      padding: 14px 24px;
      border: none;
      z-index: 10;

      //styleName: Paragraph - Inter/P3/Semi Bold;
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      background-color: #0a0a0a;
    }

    h2 {
      //styleName: body heading/M;
      font-family: 'Open Sans', sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: -0.02em;
      text-align: left;
      color: white;
    }
  }
`;

export const DashboardBody = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 20px;

  .flex-1 {
    width: 35%;
  }

  .flex-2 {
    width: 65%;
  }
`;
