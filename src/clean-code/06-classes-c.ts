(() => {
  // Aplicando el principio de responsabilidad unica
  // Priorizar la composición frente a la herencia

  type Gender = 'M' | 'F'

  interface PersonProps {
    birthdate: Date
    gender: Gender
    name: string
  }

  class Person {
    public birthdate: Date
    public gender: Gender
    public name: string

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name
      this.gender = gender
      this.birthdate = birthdate
    }
  }

  interface UserProps {
    email: string,
    role: string
  }

  class User {
    public email: string
    public lastAccess: Date
    public role: string

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    checkCredentials() {
      return true
    }
  }

  interface SettingsProps {
    workingDirectory: string
    lastOpenFolder: string
  }

  class Settings {
    public workingDirectory: string
    public lastOpenFolder: string
    
    constructor({workingDirectory, lastOpenFolder}: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder
      this.workingDirectory = workingDirectory
    }
  }

  interface UserSettingsProps {
    workingDirectory: string
    lastOpenFolder: string
    email: string
    role: string
    name: string
    gender: Gender
    birthdate: Date
  }

  class UserSettings {
    public person: Person
    public user: User
    public settings: Settings

    constructor({
      birthdate, gender, name,
      email, role,
      lastOpenFolder, workingDirectory,
    }: UserSettingsProps) {

      this.person = new Person({birthdate, gender, name})
      this.user = new User({email, role})
      this.settings = new Settings({lastOpenFolder, workingDirectory})
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/user/name',
    lastOpenFolder: '/Dev',
    email: 'hola@google.com',
    role: 'admin',
    name: 'Zane',
    gender: 'M',
    birthdate: new Date('2000-01-01')
  })

  console.log(userSettings)
})()