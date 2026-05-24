import { useState } from 'react'
function App() {
const [hover,setHover]=useState(false);
function explore(){
alert("Explore Button is Clicked");
}

return(

<div style={{
textAlign:"center",
padding:"20px",
background:"#dff6ff",
minHeight:"100vh"
}}>

<h1 style={{color:"darkblue"}}>My Travel Website</h1>

<div style={{
display:"flex",
justifyContent:"center",
gap:"20px"
}}>

<img
src="./src/assets/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg"
style={{
width:"250px",
padding:"5px",
border:"5px Darkblue solid",
borderRadius:"20px"
}}
/>

<img
src="./src/assets/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg"
style={{
width:"250px",
padding:"5px",
border:"5px Darkblue solid",
borderRadius:"20px"
}}
/>

</div>

<p style={{
color:"black" 
}}>
Travelling helps us explore new places, experience different cultures, and create unforgettable memories with firends and family.
</p>
<button
onClick={explore}
onMouseEnter={()=>setHover(true)}
onMouseLeave={()=>setHover(false)}
style={{
background:hover ? "darkblue":"blue",
color:"white",
padding:"10px",
border:"none",
borderRadius:"5px",
cursor:"pointer"
}}
>
Explore Button
</button>

</div>

)

}

export default App;
