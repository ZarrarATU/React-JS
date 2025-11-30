let element = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        class: 'dark'
    },
    children: 'SHOP NOW',
}

function renderer(element,parent){
     let elementDiv = document.createElement(element.type);
     elementDiv.innerHTML = element.children;
    
     for (const prop in element.props) {
         elementDiv.setAttribute(prop,element.props[prop])
     }
     parent.appendChild(elementDiv)
   

}

let root = document.querySelector('#root');

renderer(element,root)