
const chainMaker = {
	chain: [],

	getLength() {
		return this.chain.length;
	},

	addLink(value) {
		if (value === undefined){
			value = ' ';
		}
		this.value = value;
		chain = this.chain,

		chain.push(`( ${value} )`);
		return this;
	},

  removeLink(position) {
    if (typeof (position) !== 'number' ||
			position > this.chain.length ||
			position == 0) {
			this.chain = [];

			throw new Error("THROW");
		}
		chain = this.chain,

		value = this.value;
		for (let i = 0; i < this.chain.length; i++) {
			if (position == i) {
				this.chain.splice(position - 1 , 1)
			}
		}
		return this;
	},

	reverseChain() {
		chain = this.chain,
		chain.reverse();
		return this;
	},

	finishChain() {
		let result = this.chain.join('~~');
		console.log(result)
		this.chain = [];
		console.log(this.chain)
		return result;
	}
}
/*
console.log(chainMaker.addLink(1).addLink( "function() {}" ).addLink(3).finishChain() )//=> '( 1 )~~( 2 )~~( 3 )'
 *//* console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain()) //=> ( NaN )~~( null )~~( true )~~( false )~~( 1.233 )
 */
console.log(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())//'( 3rd )~~( function() {} )'

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())