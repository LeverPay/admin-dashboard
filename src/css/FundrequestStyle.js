import styled from 'styled-components';

export const FundRequestStyle = styled.section`
  padding: 50px 20px 50px 20px;

  @media (min-width: 320px) and (max-width: 1280px) {
    padding: 50px 32px 30px 32px;
  }

  .bg__custom__blue {
    background: #0b0230 !important;
  }

  .bg__blue_600 {
    background-color: #2962f2 !important;
  }
  .bg__custom__green {
    background: #0c6904 !important;
  }

  .bg__custom__yellow {
    background: #f49b09eb !important;
  }

  .bg__custom__red {
    background: #fd3003 !important;
  }

  .bg__custom__blue,
  .bg__custom__green,
  .bg__custom__yellow,
  .bg__custom__red {
    color: #ffffff !important;
  }

  th {
    color: #0b0230 !important;
    font-weight: 700 !important;
  }

  tr td {
    color: #0b0230 !important;
  }

  .font__approved a {
    color: #0c6904 !important;
    font-weight: 700 !important;
  }

  .font__pending a {
    color: #f49b09eb !important;
    font-weight: 700 !important;
  }

  .font__failed a {
    color: #fd3003 !important;
    font-weight: 700 !important;
  }

  .font__amount {
    color: #fd3003 !important;
  }

  .narration__text {
    font-weight: 700;
    color: #0b0230 !important;
    margin-left: 10px;
  }

  .btn-approve {
    background: #0c6904 !important;
    color: #ffffff !important;
  }

  .btn-amber {
    background-color: #f49a09;
  }

  .btn-cancel {
    background: #ff0505 !important;
    color: #ffffff !important;
  }

  .approve__text {
    color: #0c6904 !important;
    font-weight: 700;
  }

  .success__image {
    width: 150px;
  }

  .success__text {
    color: #0c6904 !important;
  }

  label {
    position: initial !important;
  }

  .transaction__table {
    .TransactionTitle {
      font-family: 'Open Sans', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0 24px 12px;
      float: right;
    }
  }

  .fund__request__card {
    /* padding: 20px 50px 20px 50px; */
  }

  .search_input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;

    @media (min-width: 320px) and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .right__filter {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      font-family: Inter;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      color: #0a0a0a;

      .transaction_btn {
        border: 2px solid #0a0a0a;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;

        p {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
      }
    }

    .left__input {
      border: 1px solid #082e88;
      padding: 10px 15px;
      border-radius: 8px;

      @media (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      input {
        border: none;
        outline: none;
        background: inherit;

        @media (min-width: 320px) and (max-width: 767px) {
          width: 90%;
        }
      }
    }
  }
`;

export const HeaderCell = styled.th`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #ffffff;
`;

export const TableContainer = styled.section`
  background: #0b0230;
  overflow: scroll !important;
  border-radius: 8px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none;
  }

  .pagination__container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 24px;
  }

  table {
    width: max-content;
    height: 400px;
    border-collapse: collapse;
    position: relative;
    padding: 30px;
    overflow: visible;
    margin-bottom: 20px;
    width: 100%;

    @media screen and (min-width: 320px) and (max-width: 767px) {
      margin-top: 2rem;
    }

    tbody {
      padding: 7px 13px;

      tr {
        &:hover {
          background-color: #000;
          cursor: pointer;
          transition: 0.5s;
        }

        td {
          padding: 25px;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0px;
          text-align: left;
          color: #ffffff;
        }
      }
    }

    thead {
      font-family: Work Sans;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 600;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: left;
      color: #545f7d;

      tr {
        th {
          padding: 45px 0px 20px 25px;
        }
      }
    }
  }

  thead tr th {
    font-weight: 500;
    text-align: left;
  }

  // tbody tr:nth-child(even) {
  //   background-color: #fafafa;
  // }

  th,
  td {
    padding: 8px;
    overflow-wrap: break-word;
  }

  /* .pagination-bar {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
  } */

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Work Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #213f7d;
  }

  .view-more-btn {
    background: #008cff;
    padding: 5px;
    border-radius: 5px;
    color: #ffffff;
  }

  .suspended-user {
    background: red;
    padding: 5px;
    border-radius: 5px;
    color: #ffffff;
  }

  .active-user {
    background: green;
    padding: 5px;
    border-radius: 5px;
    color: #ffffff;
  }
`;
