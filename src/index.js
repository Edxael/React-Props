import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './comps/Profile.jsx';

import ayuPic from './comps/img/ayu.jpg';
import boraPic from './comps/img/bora.jpg';
import rosePic from './comps/img/rose.jpg';
import madPic from './comps/img/mad.jpg';
import haniPic from './comps/img/hani.jpg';
import taePic from './comps/img/tae.jpg';
import hyoPic from './comps/img/hyo.jpg';
import haruPic from './comps/img/haru.jpg';


const MainGatherComp = () => {
  const mainCont = { padding: "20px", background: "black" }
  const titleSty = { textAlign: "center", background:"rgb(115, 234, 255)", padding: "10px" }
  const profsCont = { display: "flex", flexWrap: "wrap", background:"rgb(115, 234, 255)", padding: "10px" }

  return(
    <div style={mainCont}>
      <h1 style={titleSty}>Singers Profiles</h1>

      <div style={profsCont}>
        <Profile name= "Ayumi Hamasaki." group= "Solist" country= "Japan" pic={ayuPic} />
        <Profile name= "Bora." group= "Sistar" country= "S. Korea" pic={boraPic} />
        <Profile name= "Rose Park." group= "Black Pink" country= "S. Korea" pic={rosePic} />
        <Profile name= "Mad Clown." group= "Solist" country= "S. Korea" pic={madPic} />
        <Profile name= "Hani." group= "Exid" country= "S. Korea" pic={haniPic} />
        <Profile name= "Taeyang." group= "Big-Bang" country= "S. Korea" pic={taePic} />
        <Profile name= "Hyolyn." group= "Sistar" country= "S. Korea" pic={hyoPic} />
        <Profile name= "Haruka Kodoma." group= "HTK-48" country= "Japan" pic={haruPic} />
      </div>

    </div>
  )

}

ReactDOM.render(<MainGatherComp />, document.getElementById("root"));
