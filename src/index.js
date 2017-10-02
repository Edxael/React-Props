import React from 'react';
import ReactDOM from 'react-dom';

import ayuPic from './comps/img/ayu.jpg';

// import Meg from './comps/Comp1.jsx';
// import Cmp2 from './comps/Comp2.jsx';
// import Cmp3 from './comps/Comp3.jsx';

import Profile from './comps/Profile.jsx';

const MainGatherComp = () => {

  return(
    <div className="MainST">
      <h3>Singers Profiles</h3>

      <Profile name= "Ayumi Hamasaki" group= "solo" country= "Japan" pic={ayuPic} />



    </div>
  )

}

ReactDOM.render(<MainGatherComp />, document.getElementById("root"));


// <Meg />
//
// <Cmp2 name="Hyolyn S." />
// <Cmp2 name="Ayumi H." />
//
// <Cmp3 name="Mad Clown" color="tomato" />
// <Cmp3 name="Taeyang" color="aquamarine"/>
