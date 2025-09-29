// ---
// BOM (Browser Object Model)

// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
function openNewWindow() {
    var new_window = window.open("https://www.google.com", ' ', height = "500px", width = "500px")
    setTimeout(
        function () { new_window.close() }
        , 3000)
}

// 2. Display the browser's user agent string in an alert.
function displayUserAgent() {
    alert('this user agent : ' + navigator.userAgent)
}

// 3. Use `navigator` to detect if the browser is online or offline and log the result.
function isBrowserOnline() {
    console.log((navigator.onLine ? "Online" : "Offline"))
}

// 4. Write code to reload the current page after 5 seconds.
function reloadPage() {
    setInterval(
        function () {
            location.reload()
        },
        5000
    )
}

// reloadPage()
// 5. Get the current page URL, protocol, and hostname using `location` and log them.
console.log(location.href)
console.log(location.protocol)
console.log(location.hostname)
// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).
function goBackForward() {
    history.back()
    history.forward()
}

// 7. Show the screen width and height in a div -change the div content- on the page.
function showScreenRes() {
    div = document.children[0].children[1].children[0];
    div.innerHTML = '<p>Width: ' + screen.width + '</p><br>' +
        '<p>Height: ' + screen.height + '</p><br>'
}

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.
var timeOutId;
function changeContent() {
    timeOutId = setTimeout(
        function () {
            document.children[0].children[1].children[2].href = 'https://www.facebook.com'
            document.children[0].children[1].children[2].innerText = 'Go To Facebook'
        },
        2000
    )
}

function clearTimeOutChange() {
    clearTimeout(timeOutId)
}

// 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.
var intervalId;
function changeTimeOnTitle() {
    intervalId = setInterval(
        function () {
            document.children[0].children[0].children[2].textContent = new Date()
        }, 1000
    )
}

function stopTimeChange() {
    clearInterval(intervalId)
}
// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").
function showConfirmDialog() {
    console.log(
        confirm("Do you want to continue?") ? "user said yes" : "user said no"
    )
}

// ---
// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.
function selectFirstUl() {
    ul = document.getElementsByTagName('ul')[0]
    console.log(ul.childNodes)
    console.log(ul.children)

    // childNodes will show spaces and comments (space between two element will represeneted as text)
    // children will show elements only 
}

// 12. Write a function that logs the tag names of all direct child elements of `<body>`.
function showElements() {
    body = document.children[0].children[1];
    for (i in body.children) {
        console.log(body.children[i].tagName.toLowerCase())
    }
}

// 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).
function showElementsOfParent(parentNode) {
    nodes = parentNode.childNodes
    for (i in nodes) {
        if (nodes[i].nodeType === 1) {
            console.log(nodes[i])
        }
    }
}

// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.
function diffFEChild() {
    body = document.children[0].children[1];
    console.log(body.firstChild) //  will show text node (newline/whitespace) or comment
    console.log(body.firstElementChild) // will show only elemnts with nodeType 1
}

// 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.
function showLi() {
    ul = document.getElementsByTagName('ul')[0]
    console.log(ul.children)
    console.log(ul.childNodes) // will show Text 
}

// 17. Write a function that logs all sibling elements of a given element (excluding itself).
function showSiblings(node) {
    childrens = node.parentNode.children
    for (i in childrens) {
        if (childrens[i] !== node) {
            console.log(childrens[i])
        }
    }
}

// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.
function traverseChilds() {
    ul = document.getElementsByTagName('ul')[0]
    node = ul.children[0]
    while (node != null) {
        console.log(node.nextSibling)
        console.log(node.nextElementSibling)
        node = node.nextElementSibling
    }
}

// 19. Count how many element children a given node has (not using `children.length`).
function countChildren(node) {
    var count = 0
    for (i in node.children)
        if (node.children[i].nodeType === 1)
            count++;
    console.log(count)
}

// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.
function getFirstFormElement() {
    formNode = document.forms[0]
    childs = formNode.elements
    for (i in childs) {
        if (childs[i].nodeType === 1) {
            console.log(childs[i].name + " : " + childs[i].value)
        }
    }
}

// 21. Access all forms in the document using `document.forms` and log their names.
function getAllFormsName() {
    forms = document.forms
    for (i in forms) {
        console.log(forms[i].name)
    }
}

// 22. Access all images in the document using `document.images` and log their `src` attributes.
function getAllImages() {
    images = document.images
    for (i in images.elements) {
        console.log('src : ' + image[i].src)
    }
}

// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.
function disablesAllInput(formNode) {
    var elems = form.elements;
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
    }
}

// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.
function filterImages() {
    imagesArray = Array.from(document.images);
    var bigImages = imagesArray.filter(function (img) {
        return img.width > 100;
    })
    console.log("Images wider than 100px:", bigImages);
}
