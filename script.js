let placeHolder = document.querySelector(".placeHolders")
let diskBoxes = document.querySelectorAll(".diskBox")
 console.log(placeHolder)
 console.log(diskBoxes)
let counter = "Pick"
let topdisk = null


document.getElementById("Tower1").addEventListener("click",
    function selectedDisk(evt) {
        diskbox = diskBoxes[0]
        if (counter === "Pick") {
            diskbox = evt.target.lastElementChild
            if (diskbox.childElementCount >= 1) {
                topdisk = diskbox.lastElementChild
                placeHolder.appendChild(topdisk)
                console.log(topdisk)
                counter = "Drop"
            }else {
                alert("Cannot pick from empty tower")
            }

        }
        else if (counter === "Drop") {
            chosenDisk = placeHolder.lastElementChild
            chosenDiskWidth = chosenDisk.clientWidth
            if(diskbox.childElementCount>=1){
                diskboxChildWidth = diskbox.lastElementChild.clientWidth
                if(chosenDiskWidth < diskboxChildWidth){
                    diskbox.appendChild(chosenDisk)
                    counter="Pick"
                }
                else{
                    alert("Cannot put big disk on small disk")
                }

            }
            else{
                diskbox.appendChild(chosenDisk)
                counter="Pick"
            }
        }
        
       
    });





document.getElementById("Tower2").addEventListener("click",
    function selectedDisk(evt) {
        diskbox = diskBoxes[1]
        if (counter === "Pick") {
            if (diskbox.childElementCount >= 1) {
                topdisk = diskbox.lastElementChild
                placeHolder.appendChild(topdisk)
                counter = "Drop"
                console.log(topdisk)
            }else{
                alert("Cannot pick from empty tower")
            }
        }
        else if (counter === "Drop") {
            chosenDisk = placeHolder.lastElementChild
            chosenDiskWidth = chosenDisk.clientWidth
            if (diskbox.childElementCount>=1) {
                diskboxChildWidth = diskbox.lastElementChild.clientWidth
                if (chosenDiskWidth < diskboxChildWidth) {
                    diskbox.appendChild(chosenDisk)
                    counter="Pick"
                }
                else{
                    alert("Cannot put big disk on small disk")
                }
            }
            else {
                diskbox.appendChild(chosenDisk)
                counter="Pick"
            }
         
        }
       

    });


    document.getElementById("Tower3").addEventListener("click",
    function selectedDisk(evt) {
        diskbox = diskBoxes[2]
        if (counter === "Pick") {
            diskbox = diskBoxes[2]
            if (diskbox.childElementCount >= 1) {
                topdisk = diskbox.lastElementChild
                placeHolder.appendChild(topdisk)
                counter = "Drop"
                console.log(topdisk)
            }else{
                alert("Cannot pick from empty tower")
            }
        }
        else if (counter === "Drop") {
            chosenDisk = placeHolder.lastElementChild
            chosenDiskWidth = chosenDisk.clientWidth
            if(diskbox.childElementCount>=1){
                diskboxChildWidth = diskbox.lastElementChild.clientWidth
                if(chosenDiskWidth < diskboxChildWidth){
                    diskbox.appendChild(chosenDisk)
                    counter="Pick"
                }
                else{
                    alert("Cannot put big disk on small disk")
                }
            }
              else{

                // console.log(chosenDisk)
                diskbox.appendChild(chosenDisk)
                counter="Pick"
            }
        

    }
    Win()

});

    function Win(){
        diskbox = diskBoxes[2]
        if(diskbox.childElementCount === 4){
            document.getElementById("Win").innerHTML = "Congratulations"
            document.getElementById("mainWrapper").className = "disableclicks"
        }
    }


    document.getElementById("Button").addEventListener("click", function(){
        location.reload()
    })