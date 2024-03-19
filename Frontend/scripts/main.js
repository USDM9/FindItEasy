const dataFilter = [1, 2, 3, 4, 5, 6, 7, 8]
const dataResult = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


// Form
const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  search();
});

const search = () => {
  const searchValue = document.getElementById("search").value
  const filterValue = document.getElementById('filter').value
    if(filterValue !== '' && searchValue !== ''){
        console.log(`${filterValue} ${searchValue}`)
        const filterIdx = filterValue - 1
        const resultIdx = dataResult.map((e, idx ) =>  idx)
        
        const index = resultIdx.filter(r => r === filterIdx)

        console.log(dataResult[index])
        const container  = document.getElementById('result')

        addElements('p', dataResult[index], container)
        
    }

  document.getElementById("search").value = "";
};

/* Slider */


// create elements on DOM
const createElement = () => {
    dataFilter.forEach((element) => {
        const container = document.getElementById("filter");
        addElements("option", element, container);
  });
};

const addElements = (tag, content, container) => {
  const newDiv = document.createElement(`${tag}`);
  const newContet = document.createTextNode(`${content}`);
  newDiv.appendChild(newContet);
  container.appendChild(newDiv);
};

createElement();
