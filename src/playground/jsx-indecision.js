
console.log('hello');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    location:'here',
    options:[]
};

function getLocation(location){
    if(location){
        return <p>Location:{location}</p>;
    }
}

const onFormSubmit =(e) =>{
  e.preventDefault();
  console.log('form submitted');
  const option = e.target.elements.option.value;

  if(option){
      app.options.push(option);
      e.target.elements.option.value='';
      render();
  }
};

const onRemoveAll = () =>{
    app.options =[];
    render();
}


var appRoot = document.getElementById('app')
const render = () =>{
    var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            {getLocation(app.location)}
            <p>{app.options.length}</p>
            <button onClick ={onRemoveAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();

