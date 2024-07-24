/* eslint-disable no-unused-vars */
/* eslint-disable */
export default loadBalancer((chinaDownload, USDownload) =>{
  return new Promise((resolve, reject) => {
    if (chinaDownload && USDownload){
        resolve([chinaDownload, USDownload]);
    } else {
      reject(new Error("Both downloads must be provided."));
    }
  }) .then((response) => {
    return Promise.race(response)
  })
});