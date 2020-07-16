const wordMap = {
    'one': 'una',
    'two': 'duey',
    'three': 'dee',
    'four': 'foosa',
    'five': 'fife',
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
    'you are': 'yousa',
    'you': 'yousa',
    'did you': 'yousa',
    'you\'re': 'yousa',
    'money': 'mula',
    'credits': 'mula',
    'dollars': 'mula',
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
    'don\'t': 'no',
    'excuse': 'ex squeezee',
    'doing': 'doen',
    'i\'m not doing anything': 'mesa doen nutten',
    'humble': 'humbule',
    'love': 'luv',
    'peace': 'peles',
    'come': 'comen',
    'for': 'per',
    'the': 'da',
    'invitation': 'invitateon',
    'food': 'foosa',
    'coward': 'fraidee frog',
    'see you later': 'selongabye',
    'bye': 'selongabye',
    'cya': 'selongabye',
    'it is': 'isa',
    'to be': 'besa',
    'eating': 'tongue-grabben',
    'forest': 'logreena',
    'fighting': 'crunchen',
    'mistake': 'boopjak',
    'afraid': 'fraid',
    'anakin': 'annie',
    'our': 'are-sa',
    'arrive': 'arriven',
    'accident': 'axadent',
    'accidents': 'axadentes',
    'back': 'backin',
    'bet': 'betchen',
    'big': 'biggen',
    'blame': 'blamen',
    'blaming': 'blamen',
    'but': 'boot',
    'fire': 'opadda',
    'overly': 'grossly',
    'work': 'jobben',
    'look': 'lookie',
    'lovely': 'loverly',
    'beautiful': 'loverly'
};

let regex = new RegExp('\\b(' + Object.keys(wordMap).join('|') + ')\\b', 'ig');

let treeWalker = document.createTreeWalker (
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
);

let textNodes = [];

while (treeWalker.nextNode())
{
    textNodes.push(treeWalker.currentNode);
}

for (let i = 0, len = textNodes.length; i < len; i++)
{
    textNodes[i].nodeValue = textNodes[i].nodeValue.replace(regex, replaceFunction)
}

function replaceFunction(match)
{
    let replacementWord = wordMap[match.toLowerCase()];

    /* match capitalization -- wordMap is all lowercase */

    if (match === match.toLowerCase())
    {
        return replacementWord;
    }

    let titleCase = match.charAt(0).toUpperCase() + match.slice(1);

    if (match === titleCase)
    {
        replacementWord = replacementWord.charAt(0).toUpperCase() + replacementWord.slice(1);
    }
    else if (match === match.toUpperCase() && match.length > 1)
    {
        replacementWord = replacementWord.toUpperCase();
    }

    return replacementWord;
}
