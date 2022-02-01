<script>
    /* import { SvelteTable } from '@hurtigruten/svelte-table'; */
    import { onMount } from 'svelte';

    /* onMount(async () => {
        const module = await improt('@hurtigruten/svelte-table');
        SvelteTable = module.default;

    });
 */
    let rows = [
        {id : 1, firstName : 'Adam', proba : 'audio'},
        {id : 2, firstName : 'Vera', proba : 'video'},
        {id : 3, firstName : 'Boss', proba : 'PR'}
    ];

    let colums = [
        {
            key: 'Id',
            title: 'ID',
            sortable: false
        },
        {
            key: 'firstName',
            title: 'First name'
        },
        {
            key: 'proba',
            title: 'Last name'
        }
    ];


</script>

<div> {colums} {rows} </div>