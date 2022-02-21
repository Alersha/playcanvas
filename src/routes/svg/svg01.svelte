<!-- <script context="module">
    
</script> -->

<script>
    
    import LeaderLine from 'leader-line-new';
    /* import { browser } from '$app/env'; */
    import { onMount } from 'svelte';
    import {onDestroy} from 'svelte';
    
    /* if (browser) {
       let line1 = new LeaderLine(start, end);
    } */
    let line1;

    onMount(/* async */ () => {
       /* const LeaderLine = await import('leader-line-new').default;  */

      line1 = new LeaderLine(start, end);
        
    });
    /* onDestroy(
        () => {
            document.location.reload();
        }
    ); */
    
</script>



<div><button id="start">Element-1</button></div>
<div>1111111111111111111111111 33333333333 <button id="end">Element-2</button></div>

