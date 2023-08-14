var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function (img) {
        blockobj = img
        blockobj.scaleToWidth(700)
        blockobj.scaleToHeight(510)
        blockobj.set({
            top: 0,
            left:0
           
        })
        canvas.add(blockobj)

    })
}
	
	


function playsound(){
	x.play()
}
