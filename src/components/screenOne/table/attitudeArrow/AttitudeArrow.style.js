import styled from 'styled-components';

export const Styles = styled.div`
  display: flex;
  justify-content: center;
  .attitude-arrow {
    width: 50px;
    margin-right: 20px;
    margin-top: -16px;
    height: 24px;
    .arrow.up {
      width: 10px;
      height: 10px;
      border-right: 2px solid green;
      border-top: 2px solid green;
      position: absolute;
      right: 0;
      top: 20px;
      transform: rotate(35deg);
    }
  }
  .attitude-arrow.up {
    border-bottom: 2px solid green;
    transform: rotate(-30deg);
  }
  .attitude-arrow.down {
    border-bottom: 2px solid red;
    transform: rotate(30deg);
    margin-left: 20px;
    margin-bottom: 10px;
    .arrow.down {
      width: 10px;
      height: 10px;
      border-right: 2px solid red;
      border-top: 2px solid red;
      position: absolute;
      right: 0;
      top: 20px;
      transform: rotate(35deg);
    }
  }
  .attitude-arrow.equal {
    border-bottom: 2px dotted yellow;
    margin-left: 1rem;
  }
`