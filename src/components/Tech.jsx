import React from 'react';
import {BallCanvas} from "./canvas";
import { technologies } from '../constants'; 
import { SectionWrapper } from './hoc';


const Tech = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center'>
        {technologies.map(technology => (
            <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology?.icon}/>
            </div>
        ))}
    </div>
  )
}

export default SectionWrapper(Tech,"");