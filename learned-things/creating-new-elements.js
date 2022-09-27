document.body.onload = addElement

function addElement(){
 
    //create a new div element
    const newDiv = document.createElement('div')

    //styling the new div
    newDiv.style.backgroundColor = 'yellow'

    //and give it some content
    const newContent = document.createTextNode('Hello World')

    //add the text node to the newly created div
    newDiv.appendChild(newContent)

    //add the newly created element and its content into the DOM
    const currentDiv = document.getElementById('div1')
    document.body.append(newDiv)
}