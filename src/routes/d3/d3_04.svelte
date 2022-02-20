<script>
    import { onMount } from 'svelte';

    onMount(() => {
        var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "red", null);
}
    
/* d3.selectAll("p").style("color", "red"); */
d3.select("body").style("background-color", "black");


});

</script>

<svelte:head>
    <script src="https://d3js.org/d3.v7.min.js"></script>
</svelte:head>

<p>Text</p>

<!-- <line 

      x1=»50″ y1=»30″ //начальные координаты линии

      x2=»250″ y2=»0″  ← конечные координаты

      stroke-width=»3″ ← толщина линии

      stroke=»red» ← цвет
/>  -->

<svg>
    
    <line x1="50" y1="30" x2="250" y2="0" stroke-width="3" stroke="red"/> 
    <circle cx="25" cy="25" r="20" fill="green" stroke-width="5" stroke="rgb(150,110,200)"/>
    <circle cx="250" cy="32" r="30" fill="yellow" stroke-width="3" stroke="rgb(50,90,150)"/> 
    <rect width="30" height="20" fill="orange" stroke-width="1" stroke="rgb(0,0,0)"/>
    <polygon points="100,140 250,118 170,60 " fill="blue" stroke-width="1" stroke="rgb(0,0,0)"/>
<!-- сразу добавим ещё одну фигуру -->
<polygon points="40,100 100,100 100,150 40,150 30,120" fill="red" stroke-width="2" stroke="rgb(100,250,110)"/>
</svg>
<h1 style="color:white">Привет, Нью Нео!</h1>

                    <!-- ///Animate icon -->

<svg id="svg1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="150" height="150" viewBox="40 40 70 70">
    <!-- Контур иконки -->
<path id="contour" d="M100 73.6a25.3 25.3 0 0 1-25.4 25.3 25.3 25.3 0 0 1-25.3-25.3 25.3 25.3 0 0 1 25.3-25.4 25.3 25.3 0 0 1 25.3 25.4z"   fill="#FFEEA3"  stroke="#C29653" stroke-width="5"  stroke-dasharray="none" />
    <!-- Правый глаз -->
<path id="eye_right" d="M85 64c2.4 0 4.8 2.3 4.8 5.2 0 3-2.4 5.2-4.8 5.2s-4.8-2.2-5-5.3a5 5 0 0 1 5-5.1z"  fill="none" stroke="#C29653" stroke-width="2" />

          <!-- Правый зрачок -->
<path id="pupil-right" 
d="M82.7 66.7c1.1 0 2.3.9 2.3 2.5s-1.2 2.3-2.3 2.2c-1 0-1.9-1-1.9-2.2 0-1.3.9-2.5 2-2.5z"  
fill="#36404D" stroke="#687B94" stroke-width="1" >
<animateTransform id="an_right" attributeName="transform" type="rotate" begin="contour.mouseenter" end="contour.mouseleave" dur="2s" values="0, 85,69;360, 85,69" repeatCount="indefinite" /> 
</path>
   <!-- Левый глаз -->
<path id="eye_left" d="M64 64c2.5 0 5.3 1.5 5.4 5.3 0 3-2.9 5.3-5.4 5.2-2.4 0-5-2.3-5-5.4a5 5 0 0 1 5-5z"  fill="none" stroke="#C29653" stroke-width="2"/>
     <!-- Левый зрачок -->
<path id="pupil-left" d="M66.5 66.9c1.1 0 2.3.9 2.3 2.3s-1.2 2.4-2.3 2.4c-1.1 0-2.3-.7-2.3-2.5 0-1.6 1.3-2.2 2.3-2.2z"   stroke="#687B94" stroke-width="1"  >

</path>

     <!-- Язык -->
<g id="tongue" >
<path  d="M75.8 85c0 1.1 1 3.4 1.6 5 .6 1.2 1 2.8 2.2 3.6 1.6 1 3.8 1.1 5.5.4 1-.4 1.8-1.5 2.3-2.5.5-1.3.7-2.7.6-4-.2-1.7-1-3-1.7-4.6-.3-.6-2.4.3-3.5.6-2 .6-6.9.2-7 1.6z"  fill="#F78F8F" stroke="green" stroke-width="1" />
<path d="M80.2 84.3c-.3.6.8 1 1 1.6.2.6 0 1.3 0 2 .1.3.1.7.3 1 .3.4.8 1 1.2.8.8-.3.7-1.6.7-2.4 0-.9-.2-1.8-.7-2.5a2 2 0 0 0-1.1-.8c-.5-.1-1.3-.1-1.4.3z"  fill="red"  stroke-width="1"  />  

</g>    

      <!-- Рот -->
<path id="mouth" d="M59 81.1s6.4 2.6 9.9 3c4.6.6 9.3.3 13.8-.6 2.4-.5 7-2.5 7-2.5"  fill="none" stroke="#C29653" stroke-width="2.5" stroke-linecap="round" />  
<path id="trace" stroke="#C29653" d="m 64.036017,83.166226 c 0,0 6.966915,1.220923 10.487288,1.249571 0.984992,0.008 2.939618,-0.301827 2.939618,-0.301827" />
</svg>



<style>
    svg {
        border: 1px solid rgb(69, 214, 69);
    }
</style>