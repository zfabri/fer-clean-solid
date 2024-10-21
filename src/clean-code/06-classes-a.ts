// (() => {

//   type Gender = 'M' | 'F'

//   class Person {
//     public name: string
//     public gender: Gender
//     public birthdate: Date

//     constructor(
//       name: string,
//       gender: Gender,
//       birthdate: Date
//     ){
//       this.name = name
//       this.gender = gender
//       this.birthdate = birthdate
//     }
//   }

//   const newPerson = new Person('hugo', 'M', new Date('2000-01-02'))
//   console.log(newPerson)

// })()



// (() => {
// type Gender = 'M' | 'F'

// class Person {

//   constructor(
//     public name: string,
//     public gender: Gender,
//     public birthdate: Date
//   ){}
// }

// const newPerson = new Person('hugo', 'M', new Date('2000-01-02'))
// console.log(newPerson)
// })()



// (() => {
//   // No aplicando el principio de responsabilidad unica
//   type Gender = 'M' | 'F'

//   class Person {

//     constructor(
//       public name: string,
//       public gender: Gender,
//       public birthdate: Date
//     ) { }
//   }

//   class User extends Person {
//     public lastAccess: Date

//     constructor(
//       public email: string,
//       public role: string,
//       name: string,
//       gender: Gender,
//       birthdate: Date
//     ) {
//       super(name, gender, birthdate)
//       this.lastAccess = new Date()
//     }

//     checkCredentials() {
//       return true
//     }
//   }

//   class UserSettings extends User {
//     constructor(
//       public workingDirectory: string,
//       public lastOpenFolder: string,
//       email: string,
//       role: string,
//       name: string,
//       gender: Gender,
//       birtdate: Date
//     ){
//       super(email, role, name, gender, birtdate)
//     }
//   }

//   const userSettings = new UserSettings(
//     '/user/name',
//     '/Dev',
//     'hola@google.com',
//     'admin',
//     'Zane',
//     'M',
//     new Date('2000-01-01')
//   )

//   // console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()})
//   console.log(userSettings)
// })()