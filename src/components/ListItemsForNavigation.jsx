/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */
import { useEffect, useRef, useState } from "react";

const itemsList = Array(10).fill().map((_, i) => `Item ${i+1}`);
export function ListItemsForNavigation(props) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const activeItemRef = useRef();

	useEffect(() => {
		activeItemRef.current.focus();
	}, [selectedIndex]);

	function handleKeyDown(event) {
		if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
			setSelectedIndex((selectedIndex + 1) % itemsList.length);
		} else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
			setSelectedIndex((selectedIndex - 1 + itemsList.length) % itemsList.length);
		}
	}

	return (
		<>
		<ul onKeyDown={handleKeyDown} tabIndex={0}>
			{itemsList.map((item, index) => (
				<li
					key={index}
					tabIndex={-1}
					ref={index === selectedIndex ? activeItemRef : null}
				>
					{item}
				</li>
			))}
		</ul>
		</>
		
	);
}
