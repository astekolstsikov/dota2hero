audio = new Audio()
audio.autoplay = true // настраиваем звук
heros = ['Pudge', 'Techies', 'AM', 'TB', 'KOTL', 'Leshrac', 'Rubick', 'WK'] //герои
pudgeIs = false // пудж показывался?
function choose(){	
	tru = Math.floor(Math.random()*heros.length) //рандомим героя из массива
	if(pudgeIs != true || heros[0] == "P"){ //в начале всегда добряк
		document.getElementById('hero').innerHTML = heros[0]
		document.getElementById('heroImg').src = 'img/Pudge.jpg'
		audio.src = 'aud/Pudge.mpeg'
		heros.splice(0, 1)
		pudgeIs = true
	}
	else{
		if(heros[tru] == undefined){ // герои закончились? удали доту.
			document.getElementById('heroImg').src = 'img/exit.JPG'
			document.getElementById('hero').innerHTML = 'Tilted'
			audio.src = 'aud/exit.mp3'
		}
		else{ // герои не закончились? поиграй
			document.getElementById('hero').innerHTML = heros[tru] 
			document.getElementById('heroImg').src = 'img/' + heros[tru] + '.jpg'
			heros.splice(heros.indexOf(document.getElementById("hero").innerHTML), 1)
			audio.src = 'aud/' + document.getElementById('hero').innerHTML + '.mpeg'
			console.log(heros[tru])
			
		}
	}
	console.log(heros)
}

function restart(){ // рестарт чтобы не нажимать эфпэпять
	heros = ['Pudge', 'Techies', 'AM', 'TB', 'KOTL', 'Leshrac', 'Rubick', 'WK']
	pudgeIs = false
	document.getElementById('hero').innerHTML = 'Какого героя пикнуть?'
	document.getElementById('heroImg').src = ''
	console.log(heros)
}
