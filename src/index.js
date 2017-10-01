import React from 'react';
import ReactDOM from 'react-dom';

import Meg from './comps/Comp1.jsx';
import Cmp2 from './comps/Comp2.jsx';
import Cmp3 from './comps/Comp3.jsx';

const MainGatherComp = () => {

  return(
    <div className="MainST">
      <h3>Helo from Main comp</h3>
      <Meg />


      <Cmp2 name="Hyolyn" />
      <Cmp2 name="Ayumi" />

      <Cmp3 name="Mad Clown" color="tomato" />
      <Cmp3 name="Taeyang" color="aquamarine"/>


    </div>
  )

}

ReactDOM.render(<MainGatherComp />, document.getElementById("root"));
