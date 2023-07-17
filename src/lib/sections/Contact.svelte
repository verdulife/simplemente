<script>
	function sendForm() {
		console.log('works');
	}
</script>

<section id="contact" class="row fcenter wfull">
	<div class="wrapper col acenter wfull">
		<form class="row wrap jcenter wfull" on:submit|preventDefault={sendForm}>
			<div class="row wrap wfull">
				<label class="col grow" for="name">
					<small>Nombre</small>
					<input class="wfull" type="text" id="name" />
				</label>

				<label class="col grow" for="surname">
					<small>Apellidos</small>
					<input class="wfull" type="text" id="surname" />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="phone">
					<small>Telefono</small>
					<input class="wfull" type="number" id="phone" />
				</label>

				<label class="col grow" for="email">
					<small>Email</small>
					<input class="wfull" type="email" id="email" />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="address">
					<small>Direccion de envio</small>
					<input class="wfull" type="text" id="address" />
				</label>

				<label class="col grow" for="country">
					<small>Pais</small>
					<input class="wfull" type="text" id="country" />
				</label>
			</div>

			<label class="col wfull" for="type">
				<small>Modelo</small>
				<select class="wfull" id="type">
					<option value="Mynekung">Mynekung</option>
					<option value="Tarzan Movement">Tarzan Movement</option>
				</select>
			</label>

			<div class="row wrap wfull">
				<label class="col grow" for="leg_size">
					<small>Medidas de la pierna</small>
					<input class="wfull" type="text" id="leg_size" />
				</label>

				<label class="col grow" for="weist_size">
					<small>Medidas cintura</small>
					<input class="wfull" type="text" id="weist_size" />
				</label>
			</div>

			<button>Enviar</button>
		</form>

		<span class="xdiv" />

		<footer>
			Estare encantado de añadirte a mi lista, y tan pronto como pueda, me pondre en contacto
			contigo.
		</footer>
	</div>
</section>

<style lang="postcss">
	.wrapper {
		max-width: var(--media-xl);
		gap: 4em;
		margin: 0 auto;
		padding: 10em 2em;
	}

	form {
		gap: 2em;

		& .wrap {
			gap: 1em;
		}
	}

  label > small {
    padding: 0.5em;
  }

	.xdiv {
		width: 20%;
		background-color: var(--base-900);
	}
</style>
