(() => {
  // No aplicando el principio de responsabilidad unica
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

  interface UserProps extends PersonProps {
    email: string,
    role: string
  }

  class User extends Person {
    public lastAccess: Date
    public email: string
    public role: string

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate })

      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    checkCredentials() {
      return true
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string
    lastOpenFolder: string
  }

  class UserSettings extends User {
    public workingDirectory: string
    public lastOpenFolder: string

    constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate })

      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
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