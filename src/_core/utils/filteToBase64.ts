import { replace } from 'ramda'

const onBase64 = async (file: File): Promise<string> =>
  await new Promise((resolve, reject) => {
    try {
      const reader = new FileReader()
      // Read file content on file loaded event
      reader.onload = (event: any) => {
        resolve(event.target.result)
      }

      // Convert data to base64
      reader.readAsDataURL(file)
    } catch (error) {
      reject(error)
    }
  })

const onFileToBinaries = async (file: File) => {
  const base64Res = await onBase64(file).then((res) => res)
  const {
    groups: { type },
  } = file.name.match(/^.*\.(?<type>.*)$/)
  return {
    name: file.name,
    type,
    binary: replace(/^.*base64,/, '', base64Res),
    size: file.size,
  }
}

export default onFileToBinaries
