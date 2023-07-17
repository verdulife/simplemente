<script>
	function sendForm() {
		console.log('works');
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
					<input class="wfull" type="text" id="name" required />
				</label>

				<label class="col grow" for="surname">
					<small>Apellidos</small>
					<input class="wfull" type="text" id="surname" required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="phone">
					<small>Telefono</small>
					<input class="wfull" type="tel" inputmode="numeric" id="phone" required />
				</label>

				<label class="col grow" for="email">
					<small>Email</small>
					<input class="wfull" type="email" id="email" required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="address">
					<small>Direccion de envio</small>
					<input class="wfull" type="text" id="address" required />
				</label>

				<label class="col grow" for="country">
					<small>Pais</small>
					<input class="wfull" type="text" id="country" required />
				</label>
			</div>

			<label class="col wfull" for="type">
				<small>Modelo</small>
				<select class="wfull" id="type" required>
					<option value="Mynekung">Mynekung</option>
					<option value="Tarzan Movement">Tarzan Movement</option>
				</select>
			</label>

			<div class="row wrap wfull">
				<label class="col grow" for="leg_size">
					<small>Medidas de la pierna</small>
					<input class="wfull" type="text" id="leg_size" required />
				</label>

				<label class="col grow" for="weist_size">
					<small>Medidas cintura</small>
					<input class="wfull" type="text" id="weist_size" required />
				</label>
			</div>

			<button>Enviar</button>
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
