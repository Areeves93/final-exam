const dog_api = 'https://dog.ceo/api/'
const select = document.getElementById("selectBreed");
const breedImage = document.getElementById("breedImage");

let dogSearch = ()=>{
    let api_url = 'https://dog.ceo/api/breeds/list/all';

    $.ajax({
        url: api_url,
        dataType: 'json',
        success: (data) => {
        console.log(data)

        const dogsObject = data.message;

        const dogs = Object.keys(dogsObject);

        console.log(dogs);

            dogs.forEach(dog => {
                select.innerHTML += `
                    <option value="${dog}">${dog}</option>
                `
            });
        },

        error: (error)=>{
            console.log("Ooopppsss must be an error")
        }
    })
}

dogSearch();

let viewDog = document.getElementById('viewDog');

viewDog.addEventListener('click', function(){
    let dogValue = select.options[select.selectedIndex].value;
    console.log(dogValue);
    let image_api_url = `https://dog.ceo/api/breed/${dogValue}/images/random`;

    $.ajax({
        url: image_api_url,
        dataType: 'json',
        success: (data) => {
            console.log(data)
            //console.log(data);
            breedImage.setAttribute("src", data.message); 
        },
        error: (error)=>{
            console.log("Ooopppsss must be an error")
        }
    });
 });
         
        