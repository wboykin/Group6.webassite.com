$(document).ready(function() {
	//declare the total number of images to allow for looping
	var IDX_MAX = 41;
	var IDX_MIN = 1;


	var xStart, yStart = 0;
 


	/*
	 *	scrollSwap()
	 *	
	 *	A function that replaces the src attribute of the #target img in the index.html file
	 *
	 *	@todo: 	need to stop it from scrolling down the page slowly, and to invoke directionality
	 *
	 */
	function scrollSwap(event){
		console.log('scrollSwap() called');//log to the console each time this function is called

		//get the index of the current image assuming each image will be named cat#.jpg
		var currentSource = $('#target').attr('src');

		console.log('current source: ' + currentSource);



		

		var startIndex = 13;

		var endIndex = currentSource.lastIndexOf('.');


		var currentNumber = currentSource.substring(startIndex, endIndex);






		console.log('currentNumber: ' + currentNumber);


		currentNumber = parseInt(currentNumber);


		


		//if the index is largest 
		if(currentNumber < IDX_MAX){
			var newNumber = currentNumber + 1;
			console.log('newNumber: ' + newNumber);

			//construct the new source string
			var newSource = 'img/rivington' + newNumber + '.png';

			$('#target').attr('src', newSource);




		}else{
			console.log("congrats you've walked the bowery!");
		}



		return false;		

	}


	window.onload = function()
	{
    //adding the event listerner for Mozilla
    if(window.addEventListener)
        document.addEventListener('DOMMouseScroll', scrollSwap, false);

    //for IE/OPERA/chrome/safari etc
    document.onmousewheel = scrollSwap;
	}
function scrollSwap(event)
	{
    console.log('scrollSwap() called with event: ');//log to the console each time this function is called


    console.dir(event);

    var delta = event.wheelDelta;
    delta = parseInt(delta);



		//get the index of the current image assuming each image will be named cat#.jpg
		var currentSource = $('#target').attr('src');

		console.log('current source: ' + currentSource);



		

		var startIndex = 13;

		var endIndex = currentSource.lastIndexOf('.');


		var currentNumber = currentSource.substring(startIndex, endIndex);






		console.log('currentNumber: ' + currentNumber);


		currentNumber = parseInt(currentNumber);


		
		if(event.wheelDelta < 0){
	    	//move forwards
	    	//if the index is largest 
			if(currentNumber < IDX_MAX){
				var newNumber = currentNumber + 1;
				console.log('newNumber: ' + newNumber);

				//construct the new source string
				var newSource = 'img/rivington' + newNumber + '.png';

				$('#target').attr('src', newSource);




			}else{
				console.log("congrats you've walked the bowery!");
			}
	    }else{
	    	//move backward
	    	//if the index is largest 
			if(currentNumber > IDX_MIN){
				var newNumber = currentNumber - 1;
				console.log('newNumber: ' + newNumber);

				//construct the new source string
				var newSource = 'img/rivington' + newNumber + '.png';

				$('#target').attr('src', newSource);




			}else{
				console.log("congrats you've walked the bowery!");
			}
	    }


		
    return false;

	}



});