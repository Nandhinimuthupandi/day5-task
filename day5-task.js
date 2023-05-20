//Create a resume data using JSON format:

let  MyResume = {
    "personal details":{
        "name":"NANDHINI M",
        "dob":03/09/2001,
        "age":22,
        "email": "nandhinivijaya03@gmail.com",
        "contact no.": 9123456789,
        "location":{
            "address":"No.5, vaithiyanathar st,pallikaranai",
            "city":"chennai",
            "state":"tamilnadu",
            "country":"india",
            "pin code":600100
        }
    },
    "education":[
        {
            "institution":"ST.Joseph Matriculation Higher Secondary School",
            "degree": "SSLC",
            "studyType": "fulltime",
            "batch start year": 2016,
            "batch end year": 2017,
            "percentage": 98.6

        },

        {
            "institution":"ST.Joseph Matriculation Higher Secondary School",
            "degree": "HSC",
            "studyType": "fulltime",
            "batch start year": 2018,
            "batch end year": 2019,
            "percentage": 82

        },
        
        {
            "institution":"Lady Doak College",
            "degree": "BSC",
            "studyType": "fulltime",
            "batch start year": 2019,
            "batch end year": 2022,
            "percentage": 89
          }
    ],
    "languages": [
        {
          "language": "Tamil,English,Hindi",
        }
      ],
    "hobbies":[
        {
            "dramas":"korean drama"
        }

    ]  
}
console.log(resume);


//Iterating the given JSON using for loops:

let resume ={

    "name":"NANDHINI M",
    "age": 22,
    "email": "nandhinivijaya03@gmail.com",
    "contact no.": 9123456789,
    "degree": "BSC",
    "institution":"Lady Doak College",
    "department": "Mathematics",
    "studyType": "fulltime",
    "batch start year": 2019,
    "batch end year": 2022,
    "percentage": 89
    
}



//forin loop

for (var key in resume) {
    console.log(resume[key]);
  }

let keys = Object.keys(resume);

//for loop

for(let i=0;i<keys.length;i++){
    let data = keys[i]
    console.log(resume[data])
}
  
//forEach loop

keys.forEach((value)=>{
    console.log(resume[value]);
})


//forof loop

for (let x of keys) {
 console.log(resume[x]);
}