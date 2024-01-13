const extendHex = (shortHex) => {
  // write your code here
	var fullHex="#";
	for(let i=0;i<3;i++)
	{
		for(let j=1;j<=2;j++)
		{
			fullHex+=shortHex.charAt(i);
		}
	}
	return fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
