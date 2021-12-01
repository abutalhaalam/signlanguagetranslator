var list1 = [];
var list2 = [];
function translating(text) {
    if (text == "") return "";
    var translatedText = "";
    if (!([].concat(list1, list2,).length === 0)) {
        sentence = text.split(/(\s)/);
    } else {
        translatedText = text;
    }
    if (true) {
        translatedText = forward(translatedText);
    }
    return translatedText;
}

var timeout;
$(document).ready(function () {
    $('.translate-container .trans.div.english').on("input", function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            var english = $('#englishtext').val();
            var translate = translating(english);
            $('#trnsl8-text').val(translate);
        });
    });
});


function eraseText() {
    document.getElementById("trnsl8-text").value = "";
}




