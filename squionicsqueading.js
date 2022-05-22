// https://github.com/henryfbp/squionicsqueading
// bionic reading except free, wow

// inspired by https://bionic-reading.com/


// instructions:
// copy-paste this whole file into Chrome console (F12 key)
// and enjoy le open sauce 

// kekw

if (typeof jQuery === 'undefined') //get le jquery if we dont got it
{
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function wrapWithHTML(it, sel) {
    return "<" + sel + ">" + it + "</" + sel + ">"
}


function boldHTML(it) {
    return wrapWithHTML(it, 'b')
}

function italicHTML(it) {
    return wrapWithHTML(it, 'i')
}

daEltNames = 'p span blockquote code'.split(' ')

daEltNames.forEach(eltName => {

    console.log('gonna process ' + eltName);

    daDomElts = jQuery(eltName)

    console.log("matches from "+eltName)
    console.log(daDomElts)

    for (let index = 0; index < daDomElts.length; index++) {
        const element = daDomElts[index];

        console.log('iter #'+index)
        console.log(element)

        let shitWeWantToMakeSquionic = element.innerText

        element.innerHTML = "todo lol i am lazy"
        
    }

});