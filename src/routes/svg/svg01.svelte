<!-- <script context="module">
    
</script> -->

<script>
    
    /* import LeaderLine from 'leader-line-new'; */
    /* import { browser } from '$app/env'; */
    import { onMount } from 'svelte';
    import {onDestroy} from 'svelte';

    let line1;
    /* onMount(async () => {
		const module = await import('leader-line-new');
		LeaderLine = module.default;
		window.ApexCharts = ApexCharts;
		loaded = true;

        line1 = new LeaderLine(start, end);
	}); */

    
    /* if (browser) {
       let line1 = new LeaderLine(start, end);
    } */
    /* $: line1; */
    /* let start;
    let end; */

    /* const line1 = new LeaderLine();
    line1(start, end); */

    onMount(/* async */ () => {
       /* const LeaderLine = await import('leader-line-new').default;  */

      line1 = new LeaderLine(start, end);

      
     /*  return document.location.reload(); */
});
/* onDestroy(
        () => {
            document.location.reload();
        }
    ); */ 
    
</script>

<svelte:head>
    <script src="/js/leader-line.min.js"></script>
</svelte:head>

<!-- <div><button bind:this={start}>Element-1</button></div>
<div>1111111111111111111111111 33333333333 <button bind:this={end}>Element-2</button></div> -->
<div>
    <p> Test 01  Leader-Line</p>
    <div>
        <div><button id="start">Element-1</button></div>
        <div>11111111111111111111111111 3333333333333333333 <button id="end">Element-2</button></div>
    </div>
</div>

