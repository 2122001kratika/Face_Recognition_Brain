import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm= (props) =>{
	return(
		<div className='mt0'>
		 <p className='f3 b'>{'This magic brain will detect faces in your pictures. Give it a try!'}
		 </p>
		 
		 <div className='center'>
		    <div className='center form pa4 br3 shadow-5'>
		      <input className='f4 pa2 w-70 center' type='text' onChange={props.onInputChange}/>
			  <button className=' w-30 grow f4 ph3 pv2 link dib white bg-dark-blue' onClick={props.handleOnSubmit}>Detect</button>
		    </div>
		 </div>
		</div>
	);
}
export default ImageLinkForm; 