import React from 'react';

export const UserProfile = () => (
	<section className='section'>
		<div className='container'>
			<form>
				<div className='field'>
					<img src='https://picsum.photos/200?random' className='profile--image' />
					<div className="file has-name is-full-width">
  					<label className="file-label">
    					<input className="file-input" type="file" name="resume" />
   						<span className="file-cta">
      					<span className="file-label">Choose a file…</span>
    					</span>
    					<span className="file-name">
      					Screen Shot 2017-07-29 at 15.54.25.png
   			 			</span>
  					</label>
					</div>
				</div>
			</form>
		</div>
	</section>
);

export default UserProfile;