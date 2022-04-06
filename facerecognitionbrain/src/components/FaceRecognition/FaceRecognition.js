import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) =>{
	const box = props.box;
	return(
		<div className="center ma">
			<div className = "absolute mt2 ">
		    	<img id="inputImage" src={props.imageUrl} alt="" width='500px' height='auto'/>
				<div className = "bounding-box" style = {{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}}></div>
			</div>
        </div>
	);
}

export default FaceRecognition; 
