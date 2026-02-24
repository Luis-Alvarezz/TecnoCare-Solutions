type WithId = {
  id: number
}
type WithName = {
  name: string,
}
type WithDescription = {
  description: string,
}
type WithImage = {
  image: {
    webp: string,
    png: string
  }
}


export type Job = WithId & WithName & WithDescription & WithImage &{

}

export type InformationPersonal = WithId & WithName & WithDescription & WithImage & {

}