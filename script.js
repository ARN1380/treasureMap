fetch('http://127.0.0.1:5500/levels.json')
    .then((json) => json.json())
    .then((res) => {
    const  levels = res.levels
    console.log(levels[0][0])
    let square = document.querySelector("#square")

    let label = document.querySelector("#level")

    let i = 0;
    let randNum = 0;
    function rand() {
        return Math.random() * (255 - 0);
    }
    
    console.log(Math.trunc( Math.random(i) * 10))
    
    square.onmousemove = function(e){
        console.log("I: ",i)
        // let dist = Math.sqrt((e.layerX-levels[i][0])**2 + (e.layerY-levels[i][1])**2)
        let dist = Math.sqrt((e.layerX-randNum)**2 + (e.layerY-randNum)**2)
        
        dist = Math.abs(dist);
        let colorId = 255 - dist/2;
        
        square.style.backgroundColor = "rgb(" + colorId + "," + colorId + "," + colorId + ")";
        
        if (dist < 10) {
            alert("You Won!")
            i++;
            randNum = rand()
        }
        label.textContent = "level " + i

        
    }   


});
