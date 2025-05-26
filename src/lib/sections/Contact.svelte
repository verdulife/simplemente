<script>
	import { Lang } from '$lib/stores';
	import { page } from '$app/stores';
	import { referals } from '$lib/referals';

	const referal_param = $page.url.searchParams.get('referal');

	export let ui;
	$: buttonText = ui.btn1;

	let formData = {
		lang: $Lang,
		amount: 1,
		notes: '',
		referal: referals[referal_param] || null
	};

	$: console.log(formData);

	async function sendForm() {
		buttonText = ui.btn2;

		const res = await fetch('/form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		if (!res.ok) {
			alert(ui.error);
			return;
		}

		buttonText = ui.btn3;

		setTimeout(() => {
			buttonText = ui.btn1;
		}, 2000);

		formData = {};
	}
</script>

<section id="contact" class="row fcenter wfull">
	<div class="wrapper col acenter wfull">
		<h2 class="tcenter">
			<b>{ui.title1} <i>{ui.title2}</i></b>
		</h2>

		<form class="row wrap jcenter wfull" on:submit|preventDefault={sendForm}>
			<h3 class="wfull">Datos del pedido</h3>

			<div class="row wrap wfull">
				<label class="col grow" for="model">
					<small>{ui.input_model}</small>
					<select class="wfull" id="model" bind:value={formData.model} required>
						<option value="Mynekung">Mynekung</option>
						<option value="Tarzan Movement">Tarzan Movement</option>
					</select>
				</label>

				<label class="col grow" for="color">
					<small>{ui.input_color}</small>
					<select class="wfull" id="color" bind:value={formData.color} required>
						<option value="Atlantic Blue">Atlantic Blue</option>
						<option value="Avena">Avena</option>
					</select>
				</label>

				<label class="col grow" for="amount">
					<small>{ui.input_amount}</small>
					<input class="wfull" type="number" id="amount" bind:value={formData.amount} required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="body_height">
					<small>{ui.input_height}</small>
					<input
						class="wfull"
						type="number"
						step="0.01"
						id="body_height"
						bind:value={formData.body_height}
						required
					/>
				</label>

				<label class="col grow" for="leg_size">
					<small>{ui.input_leg}</small>
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
					<small>{ui.input_waist}</small>
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
				<small>{ui.input_notes}</small>
				<textarea
					class="wfull"
					id="notes"
					bind:value={formData.notes}
					placeholder={ui.placeholder_notes}
				/>
			</label>

			<span class="xdiv" />
			<h3 class="wfull">Datos de contacto</h3>

			<div class="row wrap wfull">
				<label class="col grow" for="name">
					<small>{ui.input_name}</small>
					<input class="wfull" type="text" id="name" bind:value={formData.name} required />
				</label>

				<label class="col grow" for="surname">
					<small>{ui.input_surname}</small>
					<input class="wfull" type="text" id="surname" bind:value={formData.surname} required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="phone">
					<small>{ui.input_phone}</small>
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
					<small>{ui.input_email}</small>
					<input class="wfull" type="email" id="email" bind:value={formData.email} required />
				</label>
			</div>

			<div class="row wrap wfull">
				<label class="col grow" for="address">
					<small>{ui.input_address}</small>
					<input class="wfull" type="text" id="address" bind:value={formData.address} required />
				</label>

				<label class="col grow" for="city">
					<small>{ui.input_city}</small>
					<input class="wfull" type="text" id="city" bind:value={formData.city} required />
				</label>

				<label class="col grow" for="cp">
					<small>{ui.input_cp}</small>
					<input class="wfull" type="text" id="cp" bind:value={formData.cp} required />
				</label>

				<label class="col grow" for="country">
					<small>{ui.input_country}</small>
					<input class="wfull" type="text" id="country" bind:value={formData.country} required />
				</label>
			</div>

			<label class="col wfull" for="from">
				<small>{ui.input_from}</small>
				<select class="wfull" id="from" bind:value={formData.from} required>
					<option value={ui.desc_from[0]}>{ui.desc_from[0]}</option>
					<option value={ui.desc_from[1]}>{ui.desc_from[1]}</option>
					<option value={ui.desc_from[2]}>{ui.desc_from[2]}</option>
					<option value={ui.desc_from[3]}>{ui.desc_from[3]}</option>
					<option value={ui.desc_from[4]}>{ui.desc_from[4]}</option>
					<option value={ui.desc_from[5]}>{ui.desc_from[5]}</option>
				</select>
			</label>

			<button disabled={buttonText !== ui.btn1}>{buttonText}</button>
		</form>

		<span class="xdiv" />

		<footer>
			<p class="tcenter">
				<b>
					{ui.footer1} <i>{ui.footer2}</i>{ui.footer3}
					<i>{ui.footer4}</i>{ui.footer5}
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
