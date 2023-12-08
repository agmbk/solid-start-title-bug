import {Title} from "solid-start";
import {SITE_NAME} from "~/utils/SEO";
import {createSignal, onMount} from "solid-js";

export default function Home() {
	const [title, setTitle] = createSignal<string>('')
	
	const expectedTitle = `Home - ${SITE_NAME}`
	
	onMount(() => {
		setTitle(window.document.title)
	})
	
	return (
		<main>
			{/* Notice the extra comma in the page title in the browser tab */}
			<Title>Home - {SITE_NAME}</Title>
			<p>Title is: <strong>"{title()}"</strong></p>
			<p>Expecting: <strong>"{expectedTitle}"</strong></p>
			<p>Title
				is <strong>{expectedTitle === title() ? 'correct. Try refreshing the page to trigger the bug' : 'incorrect'}</strong>
			</p>
		</main>
	);
}
