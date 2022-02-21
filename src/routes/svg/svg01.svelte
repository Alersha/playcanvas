<!-- <script context="module">
    
</script> -->

<script>
    
    import LeaderLine from 'leader-line-new';
    import { onMount } from 'svelte';
    import {onDestroy} from 'svelte';
    
    
    let line1;
    onMount(() => {
        
        line1 = new LeaderLine(start, end);
        
    });
    onDestroy(
        () => {
            document.location.reload();
        }
    );
    
</script>



<div><button id="start">Element-1</button></div>
<div>1111111111111111111111111 33333333333 <button id="end">Element-2</button></div>

