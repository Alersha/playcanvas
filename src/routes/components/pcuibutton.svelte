<script>
    /* import Button from '@playcanvas/pcui/Button'; */
    /* import Button from '@playcanvas/pcui/Button'; */
    import {onMount} from 'svelte';
    let Button;
    /* let helloWorldButton; */

        onMount(async () => {
                const module = await import('@playcanvas/pcui/Button');
                Button = module.default;
            

            let helloWorldButton = new Button({
                text: 'Click Me'
            });

            /* let pcuiButton = document.getElementById('pcui-button'); */
            /* let pcuiButton = document.createElement('div'); */
            let addButton = document.querySelector('.addbutton');
            addButton.appendChild(helloWorldButton.dom);
            
            });
</script>

<!-- <div id="pcui-button"></div> -->
<div class="addbutton"></div>

<style>
    .addbutton {
        width: 100%;
    }
</style>