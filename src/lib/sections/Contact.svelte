<script>
	let formData = {};
	let buttonText = 'ENVIAR';

	async function sendForm() {
		buttonText = 'ENVIANDO...';

		const res = await fetch('/form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		if (!res.ok) {
			alert('Algo ha salido mal. Porfavor vuelve a intentarlo');
			return;
		}

		buttonText = 'GRACIAS 😀';

		setTimeout(() => {
			buttonText = 'ENVIAR';
		}, 2000);

		formData = {};
	}
</script>

<section id="contact" class="row fcenter wfull">
	<div class="wrapper col acenter wfull">
		<h2 class="tcenter">
			<b>
				Formulario de <i>pedido</i>
			</b>
		</h2>

		<form class="row wrap jcenter wfull" on:submit|preventDefault={sendForm}>
			<div class="row wrap wfull">
				<label class="col grow" for="name">
					<small>Nombre</small>
					<input class="wfull" type="text" id="name" bind:value={formData.name} required />
				</label>

				<label class="col grow" for="surname">
					<small>Apellidos</small>
					<input class="wfull" type="text" id="surname" bind:value={formData.surname} required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="phone">
					<small>Telefono</small>
					<input
						class="wfull"
						type="tel"
						inputmode="numeric"
						id="phone"
						bind:value={formData.phone}
						required
					/>
				</label>

				<label class="col grow" for="email">
					<small>Email</small>
					<input class="wfull" type="email" id="email" bind:value={formData.email} required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="address">
					<small>Direccion de envio</small>
					<input class="wfull" type="text" id="address" bind:value={formData.address} required />
				</label>

				<label class="col grow" for="country">
					<small>Pais</small>
					<input class="wfull" type="text" id="country" bind:value={formData.country} required />
				</label>
			</div>

			<label class="col wfull" for="model">
				<small>Modelo</small>
				<select class="wfull" id="model" bind:value={formData.model} required>
					<option value="Mynekung">Mynekung</option>
					<option value="Tarzan Movement">Tarzan Movement</option>
				</select>
			</label>

			<div class="row wrap wfull">
				<label class="col grow" for="leg_size">
					<small>Medidas de la pierna (cm)</small>
					<input class="wfull" type="text" id="leg_size" bind:value={formData.leg_size} required />
				</label>

				<label class="col grow" for="waist_size">
					<small>Medidas cintura (cm)</small>
					<input
						class="wfull"
						type="text"
						id="waist_size"
						bind:value={formData.waist_size}
						required
					/>
				</label>
			</div>

			<button>{buttonText}</button>
		</form>

		<span class="xdiv" />

		<footer>
			<p class="tcenter">
				<b
					>Estare encantado de <i>añadirte a mi lista</i>, y tan pronto como pueda, me pondre
					<i>en contacto contigo</i>, un saludo 👋.
				</b>
			</p>
		</footer>
	</div>
</section>

<style lang="postcss">
	.wrapper {
		max-width: var(--media-xl);
		gap: 6em;
		margin: 0 auto;
		padding: 2em 2em 10em 2em;
	}

	h2 {
		font-size: var(--font-2xl);
		line-height: 1;

		& i {
			color: var(--accent);
			font-style: normal;
		}
	}

	form {
		max-width: var(--media-lg);
		gap: 1em;
		background-color: var(--alt);
		color: var(--base);
		clip-path: polygon(2em 0%, 100% 0, 100% calc(100% - 2em), calc(100% - 2em) 100%, 0 100%, 0 2em);
		padding: 6em 4em;

		@media (--sm) {
			padding: 4em 2em;
		}

		& .wrap {
			gap: 1em;
		}

		& :--input {
			color: var(--base);
		}

		& button {
			min-width: 200px;
			background-color: var(--base);
			color: var(--alt);
			margin-top: 4em;
		}
	}

	label > small {
		padding: 0.5em;
	}

	.xdiv {
		width: 20%;
		background-color: var(--base-900);
	}

	p {
		max-width: 900px;
		font-size: var(--font-lg);
		color: var(--alt);

		& i {
			color: var(--accent);
			font-style: normal;
		}
	}
</style>
