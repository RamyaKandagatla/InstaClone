import React from 'react';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import './landing.css'
import Postviewpage from './Postviewpage';


const Landingpage=()=>{
    const Enter=()=>{
        <Router>
      <div>
        <Link to="/postview">PostView page</Link>
      </div>

      <Routes>
        <Route exact path="/postview" element={<Postviewpage/>}/>
      </Routes>

    </Router>
    }
    return(
        < >
        <div className='landing'>
            <p></p>
            <hr ></hr>
            <div className='container'>
                <div className='col1'> 
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/1d5gYiyEQq5Ry9HjHqldlH/40754c8fdbb55a238d8774801f27d7c6/06-nature_535318603.jpg?fit=fill&w=480&h=270" alt="nature img"  />
                </div>
                <div className='col2'>
                    <h3>Nature photography</h3>
                    
                    <Link to='/postview'>
                        <Button>Enter{Enter}</Button>
                    </Link>
                </div>
                
            </div>
        </div>
        </>
        
    )
}

export default Landingpage;