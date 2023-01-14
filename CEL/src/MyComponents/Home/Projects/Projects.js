import React from 'react';
import Data from '../../../Data';
import Pitem from './Pitem';
import './Projects.css';


const Projects = ()=>{
    const item = Data.serv.map((itembox)=>{
        return(
            <div className='col-md-4'>
                <Pitem title={itembox.title} text={itembox.text} icons={itembox.icons}/>
            </div>
        )
    })
    return (
    <section className='services'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>OUR SERVICES</h2>
                    <p>
                        Through an amalgamation of various projects, we aspire to cater to the interests of a wide variety of people - ranging from students with an entrepreneurial bent to economically weaker sections in the nearby rural areas, as well as established startups in need of funding or mentorship.</p>
                </div>
            </div>
            <div className='row'>
                {item}
            </div> 
      </div>
      </section>
  )
}

export default Projects
