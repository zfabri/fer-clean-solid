(() => {

  function getMovieById(id: string) {
    console.log({ id })
  }

  function getMovieCastById(id: string) {
    console.log({ id })
  }

  function getActorBioById(id: string) {
    console.log({ id })
  }

  interface Movie {
    cast: string[]
    description: string
    rating: number
    title: string
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast })
  }

  interface Actor {
    fullName: string
    birthdate: Date
  }

  function checkFullName(fullName: string) {
    console.log({ fullName })

    return true
  }

  function createActor({ fullName, birthdate }: Actor): boolean {

    if (checkFullName(fullName)) return false

    console.log('Crear actor')
    return true

  }

  // continuacion
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    if (isDead) return 1500
    if (isSeparated) return 2500

    return isRetired ? 3000 : 4000
  }

})()