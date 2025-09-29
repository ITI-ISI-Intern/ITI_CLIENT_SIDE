// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
function selectFirstDiv() {
    var firstDiv = document.getElementsByTagName('div')[0]
    console.log(firstDiv.innerHTML)
}
// 2. Using getElementById change the text of #my-p to "Hello DOM".
function changeTextOfMyP() {
    document.getElementById('my-p').innerText = 'Hello DOM'
}
// 3. Use querySelector to select the element with class "target-div" and log its nodeName.
function querySelectorTargetDiv() {
    console.log(document.querySelector('.target-div').nodeName)
}
// 4. Use querySelectorAll to count how many <div> elements exist; log the count.
function useQuerySelectorAll() {
    console.log(document.querySelectorAll('div').length)
}
// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".    
function useGetElementByNameAndSet() {
    node = document.getElementsByName("user-email")[0].value = 'user@test.com'
}
// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
function checkInputNameAttr() {
    node = document.querySelector('[type= "text"]')
    console.log(node.hasAttribute('name'))
    if (!node.hasAttribute('name'))
        node.setAttribute('name', 'user-name')
}
// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).
function appendTextToMyP() {
    document.getElementById('my-p').innerText += ' - UPDATED'
}
// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.
var images = ['images/landing.jpg', 'images/landing.jpg', "images/shuffle-02.jpg", 'images/shuffle-03.jpg']
var count = 0;
var intervalId;
var imageNode = document.getElementsByTagName('img')[0];
function prev() {
    if (count === 0) {
        count = images.length - 1;
    } else {
        count--;
    }
    imageNode.src = images[count];
}
function pause() {
    if (intervalId == null) {
        intervalId = setInterval(
            next, 3000
        )
    }
    else {
        clearInterval(intervalId)
        intervalId = null
    }
}
function next() {
    if (count === images.length - 1) {
        count = 0;
    } else {
        count++;
    }
    imageNode.src = images[count];
}
// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.
function setPalaceHolder() {
    node = document.querySelector('[type= "text"]')
    node.placeholder = "Type your full name"
}
// 10. Log whether the email input has attribute "required"; if missing add it.
function hasEmailAttri() {
    node = document.querySelector('[type= "email"]')
    console.log(node.hasAttribute('required'))
    if (!node.hasAttribute('required'))
        node.setAttribute('required', true)
}
// 11. Write function getSelectedValue(selectId) returning the current selected option value.
function getSelectedValue(selectId) {
    return document.getElementById(selectId).value
}
// 12. Loop through all options of the select and log each option's text and value.
function loopThrough() {
    select = document.getElementsByTagName("select")[0];
    options = select.options
    for (i in options) {
        if (options[i].nodeType === 1)
            console.log(options[i].innerText + " : " + options[i].value)
    }
}
// 13. Programmatically select the option with value "EG".
function selectValueEg() {
    var select = document.getElementsByTagName("select")[0];
    var egOption;
    options = select.options
    for (i in options) {
        if (options[i].nodeType === 1)
            if (options[i].value === 'EG')
                egOption = options[i]
    }
    console.log(egOption)
}
// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
function selectByText(selectId, text) {
    var select = document.getElementsById(selectId);
    var options = select.options
    var option;
    for (i in options) {
        if (options[i].innerText === text)
            option = options[i]
    }
    console.log(option)
}
// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
function replaceInnerHtmlDiv2() {
    div = document.getElementById('div-2');
    div.innerHTML = "<p><b>Bold Text</b></p>"
}
// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).
function addClass() {
    div = document.getElementById('div-2');
    div.classList.add('class-a')
    div.classList.add('class-b')
    div.classList.remove('class=b')
}
// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.
function toggleClassHidden() {
    div = document.getElementById('div-2');
    div.classList.toggle('hidden')
}
// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.
function insertAfter(refNode, newNode) {
    refNode.insertAdjacentElement('afterEnd', newNode)
}
// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
function createAndInsert() {
    new_div = document.createElement('div');
    new_div.innerText = 'Dynamic Box'
    new_div.style.backgroundColor = "yellow"
    document.getElementById('div-2').appendChild(new_div);
}
// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
function createAndInsert() {
    new_p = document.createElement('p');
    new_p.innerText = 'paragraph'
    div = document.getElementById('div-2');
    div.insertBefore(new_p, div.children[0])
}
// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
function insertAfterEnd() {
    document.getElementById('div-2').insertAdjacentHTML('afterEnd', '<span>AFTER END</span>')
}
// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
function prevenDefault() {
    form = document.querySelector('form')
    form.onsubmit = function (e) { e.prevenDefault() }
    elements = form.elements
    for (element in elements) {
        console.log(element.value)
    }
}
// 23. Add input event on the text input that logs its length whenever it changes.
function addInputLengthLogger() {
    var textInput = document.querySelector('[type= "text"]');
    textInput.addEventListener('change', function (e) {
        console.log(e.target.value.length);
    });
}
// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
function validateEmailSimple(value) {
    return value.indexOf('@') !== -1 && value.indexOf('.') !== -1;
}
// console.log(validateEmailSimple('userexample.com')); // false (missing @)
// console.log(validateEmailSimple('user@examplecom')); // false (missing .)

// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).
function appendAndRemoveElement() {
    var parent = document.getElementById('div-2');
    var child = document.createElement('div');
    parent.appendChild(child);
    console.log('Appended child:', child);
    parent.removeChild(child);
    console.log('Removed child:', child);
}
// 25. Create an element, append it to <div id="wrapper">
//   <p id="first">First</p>
//   <p id="second">Second</p>
// </div>
function appendToWrapper() {
    var wrapper = document.getElementById('wrapper');
    var newEl = document.createElement('div');
    newEl.innerText = 'Appended Element';
    wrapper.insertAfter(wrapper.children[0], newEl)
}
// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.
function cloneDiv2() {
    var original = document.getElementById('div-2');
    var clone = original.cloneNode(true);
    var baseId = 'div-2-clone';
    var newId = baseId;
    var i = 1;
    while (document.getElementById(newId)) {
        newId = baseId + '-' + i++;
    }
    clone.id = newId;
    original.insertAdjacentElement('afterEnd', clone)
    return clone;
}

// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.
function highlightInputs(form) {
    var elements = form.elements
    for(i in elements){
        elements[i].style.border = '2px solid green';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    highlightInputs(form);
});
// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.
function buildCard(title, content) {
    var card = document.createElement('div');
    card.className = 'card';
    var h3 = document.createElement('h3');
    h3.innerText = title;
    var p = document.createElement('p');
    p.innerText = content;
    card.appendChild(h3);
    card.appendChild(p);
    return card;
}
document.body.appendChild(buildCard('Card 1', 'This is the first card.'));
document.body.appendChild(buildCard('Card 2', 'This is the second card.'));
// 29. Add delegated click listener on body logging when a .card is clicked.
document.body.addEventListener('click', function (e) {
    var card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    var title = card.querySelector('h3') ? card.querySelector('h3').innerText : '(no title)';
    console.log('Card clicked:', { element: card, title: title });
});
// 30. Reflection (comment): Which two tasks were most challenging and why?
        // Image Slider problem ->  as I have to hanlde interval and when the image is paused and when not.
// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-
function createListOddEven() {
    var ul = document.createElement("ul");
    for (var i = 1; i <= 10; i++) {
        var li = document.createElement("li");
        li.textContent = "Item " + i;

        if (i % 2 === 0) {
            li.classList.add("even");
        } else {
            li.classList.add("odd");
        }
    }

    ul.appendChild(li);
}