

$(document).ready(function(){	
		//run on document ready (can also run on button click)
		$('#submit').click(function(){	
			for (var i = 1; i <= 100; i++ ) {
				//print the number in the console; press F12 to fire console
				console.log("Loop number ", i);
				//alignment: tab size 4
				 if (i % 5 === 0 && i % 3 === 0) {	// use === for checking type equality
					$('.answer ul').append('<li>'+ i + ": Fizz-Buzz" + '</li>');
				}
				else if (i % 3 === 0) {
					$('.answer ul').append('<li>'+ i +  ": Fizz" + '</li>');
				}
				else if (i % 5 === 0) {			
					$('.answer ul').append('<li>'+ i +  ": Buzz" + '</li>');
				}
				else {
					$('.answer ul').append('<li>'+ i + " : " + i + '</li>');
				}
			}
		});


});
