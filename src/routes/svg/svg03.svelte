<script>
    import { onMount } from 'svelte';
    

    onMount(() => {

            // Query DOM Elements
    const path = document.querySelector('.infinity');
    const circle = document.querySelector('.circle');

    // Create an object that gsap can animate
    const val = { distance: 0 };
// Create a tween
    gsap.to(val, {
        // Animate from distance 0 to the total distance
        distance: path.getTotalLength(),
        // Loop the animation
        repeat: -1,
        // Make the animation lasts 5 seconds
        duration: 5,
        // Function call on each frame of the animation
            onUpdate: () => {
                // Query a point at the new distance value
                const point = path.getPointAtLength(val.distance);
                // Update the circle coordinates
                circle.setAttribute('cx', point.x);
                circle.setAttribute('cy', point.y);
            }
    });
});
</script>

<svelte:head>
    
</svelte:head>
<svg width="700px" heigth="400px" viewBox="-10 -10 173 61">
    <path d="M153,20.89c0-45.88-74.95,0-74.95,0S.5,66.76.5,20.89s77.54,0,77.54,0S153,66.76,153,20.89Z" fill="none" stroke="#000" vector-effect="non-scaling-stroke" class="infinity" />
    <circle r="5" cx="0" cy="0" fill="purple" class="circle" />
  </svg>

<style>
    svg {
        border: 3px solid green;
    }
</style>
