import { createGlobalStyle } from "styled-components";

const darkModeButton = `
  color: #FFF;
  border-color: #FFF;
  background-color: transparent;
  a {
    color: #FFF;
  }
  :hover {
    background-color: #f0f0d961;
  }
`

const lightModeButton = `
  a {
    color: #111;
  }
  :hover {
    background-color: #45494940;
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    .screen-wrapper {
      padding-top: 2em;
      height: 100%;
      width: 100%;
      .chart-wrapper {
        height: 20%;
        display: flex;
        justify-content: center;
        .chart {
          width: 50%;
          height: 100%;
        }
      }
      .table-wrapper {
        height: 70%;
        display: flex;
        justify-content: center;
      }
    }
    background-color:${props => {
      return props.theme.mode === "dark" ? "#111" : "#EEE";
    }};
    color:${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};

    .theme-toggle-button, .navigation-button {
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      ${props => (props.theme.mode === "dark") ? darkModeButton : lightModeButton};
      a {
        text-decoration: none;
      }
    }

    .theme-toggle-button {
      position: absolute;
      right: 10px;
    }

    .navigation-buttons {
      position: absolute;
      button {
        margin-right: 12px;
      }
    }

    table {
      width: 70%;
      position: relative;
      border-spacing: 0;
      border: 1px solid ${props => (props.theme.mode === "dark") ? "white" : "black"};

      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }

      tr.table-raw {
        :hover {
          background-color: silver;
          cursor: pointer;
        }
      }

      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid ${props => (props.theme.mode === "dark") ? "white" : "black"};
        border-right: 1px solid ${props => (props.theme.mode === "dark") ? "white" : "black"};

        :last-child {
          border-right: 0;
        }
      }
      .pagination {
        td {
          border: 0;
        }
      }
      .selected::after {
        content: "";
        width: 100%;
        height: 32px;
        border: 4px solid red;
        position: absolute;
        left: -4px;
        margin-top: -4px;
        display: flex;
        justify-content: center;
      }
    }
    .polygons-button {
      border: 1px solid silver;
      background-color: silver;
      margin-left: 12px;
      border-radius: 12px;
      padding: 12px;
      cursor: pointer;
    }
  }
`;
