

    document.querySelector('#get-scheme').addEventListener('click',function(){
        /* convert color input value */ 
        const hexs = document.querySelector("#hexColor")
        const hex = hexs.value 
        const hexColor = hex.slice(1) 
        
        /* fetch color scheme */
        fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=monochrome&count=5`)
        .then(res => res.json())
        .then(data => {
        
        /* define hex Array */
        const hexArr = [{colorOne:data.colors[0].hex.value,
                        colorTwo:data.colors[1].hex.value,
                        colorThree:data.colors[2].hex.value,
                        colorFour:data.colors[3].hex.value,
                        colorFive:data.colors[4].hex.value}]
                        console.log(hexArr[0].colorOne)
        /* render data to html */             
     
       
      document.querySelector('.colors').innerHTML =
       
            `  
            <div class="color" style="background-color: ${hexArr[0].colorOne};">
            <text>531ABC</text>
            <text style="font-size:16px; margin-top: 25px;">color</text></div>
            <div class="color"  style="background-color: ${hexArr[0].colorTwo};">
            <text>531ABC</text>
            <text style="font-size:16px; margin-top: 25px;">color</text>
            </div>
            <div class="color"  style="background-color: ${hexArr[0].colorThree};">
            <text>531ABC</text>
            <text style="font-size:16px; margin-top: 25px;">color</text>
            </div>
            <div class="color"  style="background-color: ${hexArr[0].colorFour};">
            <text>531ABC</text>
            <text style="font-size:16px; margin-top: 25px;">color</text>
            </div>
            <div class="color"  style="background-color: ${hexArr[0].colorFive};">
            <text>531ABC</text>
            <text style="font-size:16px; margin-top: 25px;">color</text>
            </div> ` 
        
         
        
      })  }) 