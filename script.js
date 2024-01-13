const extendHex = (shortHex) => {
	var fullHex="#";
  // write your code here
		if(shortHex.charAt(0)==="#"){
			for(let i=1;i<=3;i++)
	{
		for(let j=1;j<=2;j++)
		{
			fullHex+=shortHex.charAt(i);
		}
	}
		}else{
			for(let i=0;i<3;i++)
	{
		for(let j=1;j<=2;j++)
		{
			fullHex+=shortHex.charAt(i);
		}
	}
		}
	return fullHex; 
};

// Do not change the code below.
 const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
 