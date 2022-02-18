<script>
	import { onMount } from 'svelte';

	let name = 'world';
	/* let canvas; */
	let p = document.createElement('p');
	p.innerHTML = 'test';
	document.body.appendChild(p);
		onMount(() => {const canvas = document.getElementById('canvas');
		const ctx = canvas.getContext("2d");
		ctx.rect(10, 10, 100, 100);
		ctx.fill();


})
	


	/* const ctx = canvas.getContext("2d"); */

</script>

<h1>Hello! {name}!</h1>
<!-- <canvas bind:this={canvas}></canvas> -->
<canvas id="canvas"></canvas>
