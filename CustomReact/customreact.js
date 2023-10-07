// Here we are implementing how our reacxt code is executed as javascript

// creating react element
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

// defining container to inject react element
const mainContainer=document.querySelector("#root")

// defining custom render function
function customRender(reactElement,container){
    
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    /*
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */
   
//    generalizing the code
    for( const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
        
    }
    
    // injecting
    container.appendChild(domElement);
}

// rendering
customRender(reactElement,mainContainer);
