//这里使用CommonJS风格
function generateText(){
	var element=document.createElement('h2');
	element.innerHTML='Hello h2 World!';
	return element;
}
module.exports=generateText;