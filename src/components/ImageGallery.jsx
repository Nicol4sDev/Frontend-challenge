/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import React, { useState } from 'react';

function Image({ src, onRemove }) {
	return (
		<div className="image">
			<img src={src} alt="" />
			<button className="remove" onClick={onRemove}>X</button>
		</div>
	);
}

export function ImageGallery({ links }) {
	const [imageLinks, setImageLinks] = useState(links);

	const removeImage = (src) => {
		setImageLinks(imageLinks.filter(link => link !== src));
	}

	return (
		<div>
			{imageLinks.map((src, index) => 
				<Image 
					key={index} 
					src={src} 
					onRemove={() => removeImage(src)} 
				/>
			)}
		</div>
	);
}
