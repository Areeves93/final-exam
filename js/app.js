const dog_api = 'https://dog.ceo/api/'

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

            let select = document.getElementById('selectBreed');
            dogs.forEach(dog => {
                select.innerHTML += `
                    <option value="${dog}">${dog}</option>
                `
            });
        }

        error: (error)=>{
            console.log("Ooopppsss must be an error")
        }
    })
}

//  selectBreed.addEventListener('click',dogSearch)
//  viewDog.addEventListener('click', function(){
// let cho = document.getElementById('selectBreed');
// let breedName = cho.choice[cho.selectedIndex].text;
// //console.log(breedName);
// let api_url = 'https://dog.ceo/api/breed/' + breedName + '/images/random';
// $.ajax({
//     url: api_url,
//     dataType: 'json',
//     success: (data) => {
//         //console.log(data);
//         document.getElementById("breedImage").setAttribute("src", data.message); 
//      },
//     error: (error)=>{
//         console.log("Ooopppsss must be an error")
//     }
// });
//  });
         

        //  let select = document.getElementById('selectBreed');
        //  data.forEach(function(key){
        //      select.innerHTML+=`
        //      <option value="${message.key}" >
        //             ${message.key}
        //      </option>
        //     `
        //  })

        //  Object.keys(data.message).forEach(function(key) {

        //     let choice = document.createElement("choice");
        //     choice.value= key;
        //     choice.innerHTML = key; 
         
          
        //     select.appendChild(choice); 
        //   });
        //  },
        