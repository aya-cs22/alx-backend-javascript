export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (filename){
        reject(new Error(`$fileName cannot be processed`));
    }
  })
}