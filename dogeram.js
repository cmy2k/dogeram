walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
  var v = textNode.nodeValue;

  var match = v.match(/(\s)\$([0-9,.]*)(\s)/);
  var value = match[2];

  if (value) {
    var dollars = parseFloat(value.replace(/,/g, ''));
    if (!dollars) {
      dollars = 0;
    }
    console.log(dollars);
    var doge = dollars * 2270;
    v = v.replace('$' + value, 'doge' + doge);
  }
	
  textNode.nodeValue = v;
}


