import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  margin: 15px 0;

  label {
    margin-bottom: 5px;
    font-size: 13px;
  }

  .input {
    padding: 10px 15px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    border: 1px solid black;
  }

  .input-phone {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;

    .code-input {
      border: 1px solid black;
      padding: 10px;
      border-radius: 4px;
    }
  }
`;
