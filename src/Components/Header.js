import React from  'react';

function header(){
	
    return(
        <div style={{backgroundColor:'#202124'}}>
			<nav className="navbar navbar-expand-lg navbar-dark teal lighten-2 mb-4">
				<img src="2x/twotone_note_white_24dp.png"/>
				<h3 className="heading"	>Parcha</h3>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<form className="form-inline ml-auto">
						<div className="md-form my-0">
							<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
						</div>
					</form>
				</div>
			</nav>
		</div>
    );
}

export default header;