
	//start of top slideshow
		image_tracker = 's1';
		
		function change(){
		 var image = document.getElementById('top_slide');
		 
		 if(image_tracker=='s1'){
			image.src = 'photos/slide1.jpg';
			image_tracker = 's2';
		}
	
		else if(image_tracker=='s2'){
			image.src = 'photos/slide2.jpg';
			image_tracker = 's3';
		 }
		else if(image_tracker=='s3'){
			image.src = 'photos/slide3.jpg';
			image_tracker = 's4';
		 }
		else if(image_tracker=='s4'){
			image.src = 'photos/slide4.jpeg';
			image_tracker = 's5';
		 }
		else if(image_tracker=='s5'){
			image.src = 'photos/slide5.jpg';
			image_tracker = 's6';
		 }
		else if(image_tracker=='s6'){
			image.src = 'photos/slide6.jpg';
			image_tracker = 's7';
		 }		 
		else{
			image.src = 'photos/slide7.jpg';
			image_tracker = 's1';	
		 }
	}
	
	var timer = setInterval('change()',2000);
	
	//end of top slideshow