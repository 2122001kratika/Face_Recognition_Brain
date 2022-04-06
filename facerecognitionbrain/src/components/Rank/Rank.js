import React from 'react';

const Rank= (props) =>{
	return(
		  <div className='center'>
			  <div className='white b f3'>
			  {`${props.name} , your current entry count is...`}
               <div className='white f3 '>
                  {props.entries}
			  </div>
			  </div>
		</div>
	);
}
export default Rank; 