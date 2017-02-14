var wordMap = {
    'one': 'una',
    'two': 'duey',
    'three': 'dee',
    'four': 'foosa',
    'five': 'fife', /*multi-word not working */
    'six': 'seeks',
    'seven': 'sevin',
    'eight': 'ate-a',
    'nine': 'ninee',
    'ten': 'tenska',
	'very': 'berry',
	'superior': 'bombad',
	'superb': 'bombad',
	'great': 'bombad',
	'landspeeder': 'dowopee',
	'i am': 'mesa',
	'i': 'mesa',
	'me': 'mesa',
	'my': 'mesa',
	'much': 'mui',
	'a lot': 'mui',
	'mine': 'moole',
	'thank you': 'tank yu',
	'you': 'yousa',
	'you are': 'yousa',
	'did you': 'yousa',
	'you\'re': 'yousa',
	'money': 'mula',
	'credits': 'mula',
	'dollars': 'mula',
	//"Yu" - Objective of you
	'your': 'yu', //also plural of you
	'she is': 'shesa',
	'did she': 'shesa',
	'she': 'shesa',
	'he is': 'hesa',
	'did he': 'hesa',
	'he': 'hesa', 
	'we': 'wesa',
	'we are': 'wesa', 
	'did we': 'wesa',
	'they are': 'daysa',
	'did they': 'daysa',
	'they': 'daysa',
	'there': 'dalee',
	'it': 'dalee',
	'them': 'themsa',
	'yes': 'yesa',
	'no': 'nosa',
	'that': 'dat',
	'this': 'disa',
	'ok': 'okeeday',
	'okay': 'okeeday',
	'outlander': 'outlaunder',
	'look': 'looky',
	'happy': 'smilin',
	'speak': 'spake',
	'say': 'spake',
	'ship': 'skeebeetle',
	'pals': 'palos',
	'friends': 'palos',
	'go': 'gos',
	'here': 'here',
	'help': 'hep',
	'human': 'hisen',
	'story': 'tello',
	'crazy': 'nutsen',
	'wild': 'nutsen',
	'longo': 'long',
	'cool': 'hot',
	'boys': 'boyos',
	'mess': 'messen',
	'make': 'maken',
	'makes': 'maken',
	'all of you': 'all-n youse',
	'droids': 'machineeks',
	'machines': 'machineeks',
	'hey there': 'heyo dalee',
	'hello': 'hidoe',
	'rude': 'wude',
	'oh boy': 'oie boie',
	'don\t': 'no',
	'excuse': 'ex squeezee',
	'doing': 'doen',
	'i\'m not doing anything': 'mesa doen nutten',
	'humble': 'humbule',
	'love': 'luv',
	'doing': 'doen',
	'peace': 'peles',
	'come': 'comen',
	'for': 'per',
	'the': 'da',
	'invitation': 'invitateon',
	'food': 'foosa',
	'doing': 'doen',
	'coward': 'fraidee frog',
	'see you later': 'selongabye',
	'bye': 'selongabye',
	'cya': 'selongabye',
	'coward': 'fraidee frog',
	'it is': 'isa',
	'to be': 'besa',
	'yes': 'yesa',
	'no': 'nosa',
	'eating': 'tongue-grabben',
	'forest': 'logreena',
	'fighting': 'crunchen',
	'mistake': 'boopjak'

};

var regex = new RegExp('\\b(' + Object.keys(wordMap).join('|') + ')\\b', 'ig');

console.log("regex: " + regex);

// tree walker
var treeWalker = document.createTreeWalker (
	document.body,
	NodeFilter.SHOW_TEXT,
	null,
	false
);

// text nodes
var textNodes = [];

while (treeWalker.nextNode())
{
	textNodes.push(treeWalker.currentNode);
}

// iterate text nodes and modify in place
for (var i = 0, len = textNodes.length; i < len; i++) 
{
    textNodes[i].nodeValue = textNodes[i].nodeValue.replace(regex, 
    	function(match) 
    	{
    		var replacementWord = wordMap[match.toLowerCase()];

    		/* match capitalization -- wordMap is all lowercase */

    		if (match != match.toLowerCase())
    		{
    			if (match == match.toLowerCase().charAt(0).toUpperCase())
    			{
    				replacementWord = replacementWord.charAt(0).toUpperCase() + replacementWord.slice(1);
    			}
    			else if (match == match.toUpperCase())
    			{
    				replacementWord = replacementWord.toUpperCase();
    			}
    		}

    		console.log('replacing ' + match + ' with ' + replacementWord);
			return replacementWord;
    	}
    );
}