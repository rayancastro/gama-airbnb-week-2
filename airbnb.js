const url = "http://airbnb.douglasmaia.com/api/properties"

const flatsContainer = document.getElementById('flats-container');

console.log(flatsContainer);



const setHearts = () => {
	hearts = document.getElementsByClassName('card-heart');
	for (i = 0; i < hearts.length; i++) {
		var heart = hearts[i];
		heart.addEventListener('click', (event) =>{
			var cardHeart = event.currentTarget;
			console.log(this);
			if (cardHeart.className.includes("far")) {
				cardHeart.className = cardHeart.className.replace('far', 'fas red');
			} else {
				cardHeart.className = cardHeart.className.replace('fas red', 'far');
			}
		})

	}
}


const response = fetch(url)
	.then(response => response.json())
	.then((data) => {
		data.forEach((flat) => {
			const flatCard = `<div class="col-12 col-sm-6 col-lg-3">
						<div class="flats-card">
							<div class="card-image" style="background-image: url(${flat.photo});"></div>

							<div class="card-content">
								<div class="card-name">
									<h4>${flat.name}</h4>
								</div>
								<div class="card-info">
									<p>${flat.city}</p>
									<p>R$${flat.price.replace('.',',')}</p>
									<i class="far fa-heart card-heart"></i>
								</div>
							</div>
						</div>
					</div>`;
			flatsContainer.insertAdjacentHTML('beforeend', flatCard);
		});
	setHearts();
});


console.log('Hello from javascript')

