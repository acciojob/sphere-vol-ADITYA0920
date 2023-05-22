function volume_sphere() {
    //Write your code here
	let radius = document.getElmentById("radius").value ;

	let res = 4/3 * 3.14 * (radius * radius );

	let volume = document.getElementById("volume");
	volume.innerText = res ;

	
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
