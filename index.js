


function run(){
            
  const hexs = document.querySelector("#hexColor")
  const hex = hexs.value 
  const hexColor = hex.slice(1) 
  const colorSchemes = document.querySelector("#colorSchemes ").value
    
  /* fetch color scheme */
  fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${colorSchemes}&count=5`)
  .then(res => res.json())
  .then(data => {
  
  /* define hex Array */
  const hexArr = [{color:data.colors[0].hex.value,name:data.colors[0].name.value},
                  {color:data.colors[1].hex.value,name:data.colors[1].name.value},
                  {color:data.colors[2].hex.value,name:data.colors[2].name.value},
                  {color:data.colors[3].hex.value,name:data.colors[3].name.value},
                  {color:data.colors[4].hex.value,name:data.colors[4].name.value}]
              
  /* render data to html */             
let html=""
 for(let color of hexArr){
html +=
      `  
      <div class="color" style="background-color: ${color.color};">
      <text>${color.color}</text>
      <text style="font-size:16px; margin-top: 25px;">${color.name}</text></div>`
      }
       document.querySelector('.colors').innerHTML = html }) }



    function random(){
   const randomHex = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'); 
   const schArr = [
       'monochrome', 'monochrome-dark', 'monochrome-light',  'analogic', 'complement',  'analogic-complement', 'triad', 'quad']

        const randomScheme = schArr[Math.floor(Math.random() * schArr.length)];
  
     
  /* fetch color scheme */
  fetch(`https://www.thecolorapi.com/scheme?hex=${randomHex}&mode=${randomScheme}&count=5`)
  .then(res => res.json())
  .then(data => {

  /* define hex Array */
  const hexArr = [{color:data.colors[0].hex.value,name:data.colors[0].name.value},
                  {color:data.colors[1].hex.value,name:data.colors[1].name.value},
                  {color:data.colors[2].hex.value,name:data.colors[2].name.value},
                  {color:data.colors[3].hex.value,name:data.colors[3].name.value},
                  {color:data.colors[4].hex.value,name:data.colors[4].name.value}]
              
  /* render data to html */             
let html=""
 for(let color of hexArr){
     
html +=
      `  
      <html>
      <div class="color" style="background-color: ${color.color};">
      <text id="hexsColor">${color.color}</text>
      <text style="font-size:16px; margin-top: 25px;">${color.name}</text></div>
      </html>
      `
      }
       document.querySelector('.colors').innerHTML = html
       })  
           } 
           

        document.querySelector('#get-scheme').addEventListener('click',function(){
        return run()
        
       })  
       
       window.addEventListener('keypress',function(e){
           if(e.code === "Space"){
               random ()
    
        } })  
        
        
        /*    const copy = document.querySelector("#hexsColor").value  
            
            function copyHex (){
            navigator.clipboard.writeText(copy);
            
            alert("copied")
           } */
       
    

random()
 
           

