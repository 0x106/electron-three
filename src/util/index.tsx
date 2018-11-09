import uuidv4 from 'uuid/v4'

export const uuid = (prefix: string = "") => {
  let key = uuidv4();
  if (prefix != "") {
    key = `${prefix}-${key}`
  }
  return key
}
