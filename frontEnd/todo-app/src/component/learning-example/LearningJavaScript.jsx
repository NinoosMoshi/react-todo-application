const person = {
  // one object
  name:'matthew',  

  // object has many objects
  address: {      
    number:9025,
    city:'niles',
    code:60714
  },

  // array of objects
  profiles:['facebook','linkin','twitter'],

  // method and loop
  printProfiles: () =>{
    person.profiles.map(
      (profile) => {
         console.log(profile)
    })
  },

  // method
  printName: () => {
    console.log('hi ninos')
  }

 
  
}


export default function LearningJavaScript(){
  return(
    <>
    <div>Name: {person.name}</div>
    <div>address: {person.address.number} {person.address.city} {person.address.code}</div>
    <div>profile: {person.profiles[1]}</div>
    <div>{ person.printProfiles() }</div>
    <div>{person.printName()}</div>
    </>
  )
}