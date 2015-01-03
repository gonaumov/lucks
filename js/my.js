Array.prototype.find = function(s)
{
	for(var i=0;i<this.length;i++)
		if(this[i] == s) return true;
	return false;
};
var pageMails=new Array();
pageMails[0]=new Array(
						'jacques.de.molay',
						'operamail.com'
						);
pageMails[1]=new Array(
						'rama',
						'dir.bg'
						);
function randomnumber(aNumber,aExclude)
{  
		var myRand=Math.round(aNumber*Math.random());
		if(!aExclude.find(myRand))
			return myRand;
		else
			return randomnumber(aNumber,aExclude);
}
function xmlhttpQuery(strURL) 
{
    var xmlHttpReq = false;
    var self = this;
    // Mozilla/Safari
    if (window.XMLHttpRequest && typeof document.namespaces == 'undefined') 
    {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) 
    {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('GET', strURL, true);
    self.xmlHttpReq.onreadystatechange = function() 
    {
        if (self.xmlHttpReq.readyState == 4) 
        {
            drawOut(self.xmlHttpReq.responseXML);
        }
    }
    self.xmlHttpReq.send(null);
}
function setFutureYear()
{
		var yearHolder = document.getElementById("myyear");
		var myDate = new Date();
        if(myDate.getMonth())
        {
            yearHolder.innerHTML = myDate.getFullYear()+1;
        }
        else
        {
            yearHolder.innerHTML = myDate.getFullYear();
        }
}
function protectMails()
{
		for(var i=0;i< pageMails.length;i++)
		{
				var myDiv=document.getElementById("mail"+i);
				if(myDiv != null)
				{
						var myA=document.createElement("A");
						var currentMail= pageMails[i];
						myA.href="mailto:"+currentMail[0]+"@"+currentMail[1];
					  myA.innerHTML = currentMail[0]+"@"+currentMail[1];
						myDiv.appendChild(myA);
				}
		}
		setFutureYear();
}
function getTagValue(aNode,aTagName)
{
		for(i=0;i<aNode.childNodes.length;i++)
		{
				var current=aNode.childNodes[i];
				if(current.tagName == aTagName)
					return current.firstChild.nodeValue;
		}
		return false;
}
function writeLuck(aTd,aNum,aLucks)
{
		aTd.innerHTML="Късмет номер: "+getTagValue(aLucks[aNum],'LUCK_ID')
		+"<br/>"+getTagValue(aLucks[aNum],'LUCK_TEXT');
		aTd.style.borderTop='1px solid #5E8DBE';
}
function drawOut(aDom)
{
		var myLucks=aDom.getElementsByTagName("LUCK");
		var myFirst=document.getElementById("first");
		var mySecond=document.getElementById("second");
		var myThird=document.getElementById("third");
		var firstNum = randomnumber(myLucks.length-1, new Array());
		var secondNum = randomnumber(myLucks.length-1, new Array(firstNum));
		var thirdNum =  randomnumber(myLucks.length-1, new Array(firstNum,secondNum));
		writeLuck(myFirst,firstNum,myLucks);
		writeLuck(mySecond,secondNum,myLucks);
		writeLuck(myThird,thirdNum,myLucks);
}
window.onload=protectMails;