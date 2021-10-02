import './App.css';
import SetupUseState from './tutorial/1-useState/setup/3-useState-array';
import Setup5SetupUseState from './tutorial/1-useState/setup/5-useState-counter';
// import Final from './tutorial/1-useState/final/3-useState-array';

import SetupUseEffect from './tutorial/2-useEffect/setup/1-useEffect-basics';
import SetupUseEffect2 from './tutorial/2-useEffect/setup/2-useEffect-cleanup';
import SetupUseEffect3 from './tutorial/2-useEffect/setup/3-useEffect-fetch-data';

import SetupMulti from './tutorial/3-conditional-rendering/setup/1-multiple-returns';
import SetupMultiCircuit from './tutorial/3-conditional-rendering/setup/2-short-circuit';
import SetupMultiHide from './tutorial/3-conditional-rendering/setup/3-show-hide';

import SetupForms from './tutorial/4-forms/setup/1-controlled-inputs';
import SetupForms2 from './tutorial/4-forms/setup/2-multiple-inputs';

import SetupUseRef from './tutorial/5-useRef/setup/1-useRef-basics';

import SetupReducer from './tutorial/6-useReducer/setup';

import SetupProp from './tutorial/7-prop-drilling/setup/1-prop-drilling';

import SetupContextApi from './tutorial/8-useContext/setup/1-context-api';

import SetupCustomHooks from './tutorial/9-custom-hooks/setup/1-fetch-example';

import SetupPropTypes from './tutorial/10-prop-types/setup';

import SetupReactRouter from './tutorial/11-react-router/setup';

import SetupReactOptimize from './tutorial/12-memo-useMemo-useCallback/setup';

function App() {
  return (
    <div className="container">
      {/* useState */}
      {/* <SetupUseState/> */}
      {/* <Setup5SetupUseState /> */}

      {/* useEffect */}
      {/* <SetupUseEffect /> */}
      {/* <SetupUseEffect2 /> */}
      {/* <SetupUseEffect3 /> */}

      {/* <SetupMulti /> */}
      {/* <SetupMultiCircuit /> */}
      {/* <SetupMultiHide /> */}

      {/* forms */}
      {/* <SetupForms /> */}
      {/* <SetupForms2 /> */}

      {/* useRef */}
      {/* <SetupUseRef /> */}

      {/* useReducer */}
      {/* <SetupReducer /> */}

      {/* prop-drilling */}
      {/* <SetupProp /> */}

      {/* context api */}
      {/* <SetupContextApi /> */}

      {/* custom hooks */}
      {/* <SetupCustomHooks /> */}

      {/* propsTypes */}
      {/* <SetupPropTypes /> */}

      {/* react Router */}
      {/* <SetupReactRouter /> */}

      {/* react optimize */}
      <SetupReactOptimize />
    </div>
  );
}

export default App;
