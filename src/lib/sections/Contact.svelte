<script>
	import { ui } from '$lib/ui';
	import { Lang } from '$lib/stores';

	$: contact = ui[$Lang].contact;
	$: buttonText = contact.btn1;

	let formData = {
		lang: $Lang
	};

	async function sendForm() {
		buttonText = contact.btn2;

		const res = await fetch('/form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		if (!res.ok) {
			alert(contact.error);
			return;
		}

		buttonText = contact.btn3;

		setTimeout(() => {
			buttonText = contact.btn1;
		}, 2000);

		formData = {};
	}
</script>

<section id="contact" class="row fcenter wfull">
	<div class="wrapper col acenter wfull">
		<h2 class="tcenter">
			<b>{contact.title1} <i>{contact.title2}</i></b>
		</h2>

		<form class="row wrap jcenter wfull" on:submit|preventDefault={sendForm}>
			<h3 class="wfull">Datos del pedido</h3>

			<div class="row wrap wfull">
				<label class="col grow" for="model">
					<small>{contact.input_model}</small>
					<select class="wfull" id="model" bind:value={formData.model} required>
						<option value="Mynekung">Mynekung</option>
						<option value="Tarzan Movement">Tarzan Movement</option>
					</select>
				</label>

				<label class="col grow" for="color">
					<small>{contact.input_color}</small>
					<select class="wfull" id="color" bind:value={formData.color} required>
						<option value="Atlantic Blue">Atlantic Blue</option>
						<option value="Avena">Avena</option>
					</select>
				</label>

				<label class="col grow" for="amount">
					<small>{contact.input_amount}</small>
					<input class="wfull" type="number" id="amount" bind:value={formData.amount} required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="leg_size">
					<small>{contact.input_leg}</small>
					<input
						class="wfull"
						type="number"
						step="0.01"
						id="leg_size"
						bind:value={formData.leg_size}
						required
					/>
				</label>

				<label class="col grow" for="waist_size">
					<small>{contact.input_waist}</small>
					<input
						class="wfull"
						type="number"
						step="0.01"
						id="waist_size"
						bind:value={formData.waist_size}
						required
					/>
				</label>
			</div>

			<label class="col wfull" for="notes">
				<small>{contact.input_notes}</small>
				<textarea
					class="wfull"
					id="notes"
					bind:value={formData.notes}
					placeholder={contact.placeholder_notes}
					required
				/>
			</label>

			<span class="xdiv" />
			<h3 class="wfull">Datos de contacto</h3>

			<div class="row wrap wfull">
				<label class="col grow" for="name">
					<small>{contact.input_name}</small>
					<input class="wfull" type="text" id="name" bind:value={formData.name} required />
				</label>

				<label class="col grow" for="surname">
					<small>{contact.input_surname}</small>
					<input class="wfull" type="text" id="surname" bind:value={formData.surname} required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="phone">
					<small>{contact.input_phone}</small>
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
					<small>{contact.input_email}</small>
					<input class="wfull" type="email" id="email" bind:value={formData.email} required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="address">
					<small>{contact.input_address}</small>
					<input class="wfull" type="text" id="address" bind:value={formData.address} required />
				</label>

				<label class="col grow" for="country">
					<small>{contact.input_country}</small>
					<input class="wfull" type="text" id="country" bind:value={formData.country} required />
				</label>
			</div>

			<label class="col wfull" for="from">
				<small>{contact.input_from}</small>
				<select class="wfull" id="from" bind:value={formData.from} required>
					<option value={contact.desc_from[0]}>{contact.desc_from[0]}</option>
					<option value={contact.desc_from[1]}>{contact.desc_from[1]}</option>
					<option value={contact.desc_from[2]}>{contact.desc_from[2]}</option>
					<option value={contact.desc_from[3]}>{contact.desc_from[3]}</option>
					<option value={contact.desc_from[4]}>{contact.desc_from[4]}</option>
					<option value={contact.desc_from[5]}>{contact.desc_from[5]}</option>
				</select>
			</label>

			<button>{buttonText}</button>
		</form>

		<span class="xdiv" />

		<footer>
			<p class="tcenter">
				<b>
					{contact.footer1} <i>{contact.footer2}</i>{contact.footer3}
					<i>{contact.footer4}</i>{contact.footer5}
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

		@media (--sm) {
			padding: 2em 1em 10em 1em;
		}
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
			padding: 4em 1.5em;
		}

		& h3 {
			color: var(--base);
			padding: 0 1em;
		}

		& .xdiv {
			background-color: var(--base-700);
			margin: 2em 0;
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
		font-family: var(--font-code);
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
