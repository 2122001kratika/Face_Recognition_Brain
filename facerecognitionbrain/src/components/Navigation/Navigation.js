import React from 'react';

const Navigation = (props) => {
	if(props.isSignedIn){
			return(
			    <nav style={{ display: 'flex', paddingRight: "15px", justifyContent: 'flex-end' }}>
					<p onClick={() => props.onRouteChange('signout')}
						className='f3 link dim black underline pointer'>Sign Out
					</p>
			    </nav>
			);
		}
		else{
			return(
                <nav style={{ display: 'flex', paddingRight: "15px", justifyContent: 'flex-end' }}>
					<p onClick={() => props.onRouteChange('signin')} className='f3 pa3 link dim black underline pointer'>Sign In </p>
					<p onClick={() => props.onRouteChange('register')} className='f3 pa3 link dim black underline pointer'>Register </p>
				</nav>
			);
		}
}
export default Navigation; 
