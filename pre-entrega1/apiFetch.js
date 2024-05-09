export const getApi = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        resolve(data);
        console.log(data);
      } catch (error) {
        reject(error);
      }
    }, 3000); 
  });
};


