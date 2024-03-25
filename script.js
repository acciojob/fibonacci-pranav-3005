function fibonacci(num) {
// your code here
	let f1=-1,f2=1,f3=0

	for(let i=1;i<=num;i++)
	{
		f3=f1+f2
		f1=f2
		f2=f3
	}
	return f3
}

module.exports = fibonacci;
