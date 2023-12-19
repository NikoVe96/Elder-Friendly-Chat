import React from 'react';
import MainPage from './MainPage';
import { render } from '@testing-library/react';
import Parse from 'parse/dist/parse.min.js';
import LogIn from './LogIn';

const PARSE_APPLICATION_ID = 'xOTysHSbn3Svw459WJtp7MAVwIISPJABmm274nGX';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'quonPtGQ6XiWnRblPDnIYhQHEoWlzIvhgcv8xmue';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <>
      <LogIn />
    </>
  );
}

export default App;
