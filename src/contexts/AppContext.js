import { createContext } from 'react';

export const AppContext = createContext({
  factorA: null,
  chartData: null,
  userData: "",
  tablePage: [],
  setChartData: () => {},
  setUserData: () => {},
  setTablePage: () => {},
});