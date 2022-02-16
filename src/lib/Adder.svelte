<script>
    export let a;
    export let b;

    function add(a, b) {
        return a + b;
    }
</script>

<p>{a} + {b} = {add(a, b)}</p>