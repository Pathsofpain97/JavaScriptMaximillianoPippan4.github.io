fetch("https://rickandmortyapi.com/api/character")
	.then(res => res.json())
	.then(res => res.results)
	.then(res =>{
		const containerResenas = document.querySelector('#reseñas');
		containerResenas.innerHTML = "";
		res.forEach(personaje => {
			if (personaje.id > 2) return;

			containerResenas.innerHTML += String(
					`<div class="producto col-6 col-md-3">`+
					`<img src="${personaje.image}" class="producto-img"></img>`+
					`<h3 class="producto-nombre">${personaje.name}</h3>`+
					`</div>`
			);
		})
	});
