class VigenereCipheringMachine {
	constructor(crypto) {
		const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		this.alphabet = alphabet;
		let result = [];
		this.result = result;
		this.crypto = crypto;

}

	encrypt(message, key) {
		let needSym;
		let arrKey = Array.from(key.toUpperCase());
		let arrMessage = Array.from(message.toUpperCase().replace(/\s/g, ''));
		let strMessage = message.toUpperCase();

		for (let i = 0; i < message.length; i++) {
			arrKey.push(arrKey[i])
		}

		for (let i = 0; i < message.length; i++){
			if (this.alphabet.indexOf(arrMessage[i]) == -1) {
				needSym = arrMessage[i];
				this.result.push(needSym);
			} else {
				needSym = this.alphabet.indexOf(arrMessage[i]) + this.alphabet.indexOf(arrKey[i]);
				while (needSym > 25) {
					needSym = needSym - 26;
				}
				this.result.push(this.alphabet[needSym])
			}
		}

		if (this.crypto == false) {
			return this.result.reverse().join('')
		}

		return this.result.join('');
	}

	decrypt(message, key) {
		let needSym;
		let arrKey = Array.from(key.toUpperCase());
		let arrMessage = Array.from(message.toUpperCase())
		this.result = [];
		for (let i = 0; i < message.length; i++){
			if (message[i] == ' ') {
				needSym = ' ';
				this.result.push(needSym)
			} else {
				needSym = this.alphabet.indexOf(arrMessage[i]) - this.alphabet.indexOf(arrKey[i]);
			/* 	while (needSym > 25) {
					needSym = needSym - 26;
				} */
				this.result.push(this.alphabet[needSym])
			}
		}
		if (this.crypto == false) {
			return this.result.reverse().join('')
		}
		return this.result.join('');

  }
}

const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);





console.log(directMachine.encrypt('attack at dawn!', 'alphonse')) // 'AEIHQX SX DLLU!'
/* console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') )// 'ATTACK AT DAWN!' */
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')) // '!ULLD XS XQHIEA'
/* console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) // '!NWAD TA KCATTA' */