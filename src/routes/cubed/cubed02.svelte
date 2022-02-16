<script>
    import * as THREE from 'three';
    import * as SC from 'svelte-cubed';


</script>
<div>Head</div>
<div class="canvastest">
    <div>pre Canvas</div>
<SC.Canvas antialias background={new THREE.Color('papayawhip')} width=400 height=200>
	<SC.Mesh geometry={new THREE.BoxGeometry()} />
	<SC.PerspectiveCamera position={[1, 1, 3]} />
    <SC.OrbitControls enableZoom={true} />
    <SC.AmbientLight intensity={0.6} />
	<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />

</SC.Canvas>
<div>foot Canvas</div>
</div>
<div>Footer</div>

<style>
    .canvastest {
        /* width: 50%;
        height: 400px; */

    }
</style>
