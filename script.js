async function consultaCEP(cep) {
	let mensagemErro = document.getElementById("erro")
	mensagemErro.innerHTML = ""
	try {
		const cepBusca = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
		const cepConvertido = await cepBusca.json()
		if (cepConvertido.erro) {
			throw Error("O CEP não existe!")
		}
		const bairro = document.getElementById("bairro")
		const cidade = document.getElementById("cidade")
		const logradouro = document.getElementById("endereco")
		const uf = document.getElementById("estado")

		bairro.value = cepConvertido.bairro
		cidade.value = cepConvertido.localidade
		logradouro.value = cepConvertido.logradouro
		uf.value = cepConvertido.uf
		console.log(cepConvertido)
	} catch (erro) {
		mensagemErro.innerHTML = `<p>O CEP está incorreto!</p>`
		console.log(erro)
	}
}

const cepInput = document.getElementById("cep")
cepInput.addEventListener("focusout", () => consultaCEP(cepInput.value))
