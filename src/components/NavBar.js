import React from 'react';

import { Link } from 'react-router-dom';
 
 class Navbar extends React.Component {
   render () {
     return (
         <nav>
           <h1>Java with react</h1>
           <Link className="topicLink" to="/">Home</Link>
           <Link className="topicLink" to="/tvs">tvs</Link>
           <Link className="topicLink" to="/lamp">Lamps</Link>
           <Link className="topicLink" to="/newtv">Add Tv</Link>
         </nav>
     );
   }
 }
 
 export default Navbar; 