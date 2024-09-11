const  btn = document.getElementById('btn')

let colorScheme = []

fetch(`https://www.thecolorapi.com/scheme?hex=0000FF&mode=monochrome`, {method: "GET"})
    .then(res => res.json())
    .then(data => {
      data.colors.forEach((color)=>{
        colorScheme.push(color.hex.value)
      })
      console.log(colorScheme)
      colorPicker(colorScheme)
    })

    btn.addEventListener('click', () => {
      const modeColor = document.getElementById('modeName')
      const colorSelect = document.getElementById('color__box')
      colorScheme = []

      fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelect.value.replace("#", "")}&mode=${modeColor.value}`, {method: "GET"})
          .then(res => res.json())
          .then(data => {
              data.colors.forEach((color) => {
                colorScheme.push(color.hex.value)
              })
              colorPicker(colorScheme)
          })

    })


    function colorPicker(colorScheme){
     let colorHTML = ""
     for(let color of colorScheme){

      colorHTML += `
      
        <h1 class="color-1" style="background-color:${color}"></h1>
        <p class="color">${color}</p>
        `
      }
      document.getElementById('color__scheme').innerHTML = colorHTML
    }

