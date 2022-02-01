<script>
    import { onMount } from 'svelte';
    /* import * as particlesUrl from '$lib/particles_default.json'; */
    /* import Particles from 'svelte-particles'; */

    let ParticlesComponent

    onMount(async () => {
        const module = await import("svelte-particles");
        ParticlesComponent = module.default;
    });
    /* console.log(Particles); */

    let particlesUrl = 'http://localhost:3080/static/particlesdefault.json';

    let particlesConfig = {
    particles: {
      color: {
        value: "#000",
      },
      links: {
        enable: true,
        color: "#000",
      },
      move: {
        enable: true,
      },
    },
  };

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let onParticlesInit = (main) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
  };


</script>

<!-- <svelte:component
  this="{ParticlesComponent}"
  id="tsparticles"
  url="{particlesUrl}"
  on:particlesLoaded="{onParticlesLoaded}"
  on:particlesInit="{onParticlesInit}"
/> -->

<svelte:component
  this="{ParticlesComponent}"
  id="tsparticles"
  options="{particlesConfig}"
  on:particlesLoaded="{onParticlesLoaded}"
  on:particlesInit="{onParticlesInit}"
/>

<!-- <ParticlesComponent /> -->

<!-- <Particles
  id="tsparticles"
  options="{particlesConfig}"
  on:particlesLoaded="{onParticlesLoaded}"
  on:particlesInit="{onParticlesInit}"
/> -->