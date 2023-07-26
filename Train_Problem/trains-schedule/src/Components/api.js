export const getTrains = () => {
    return fetch("http://20.244.56.144:80/train/trains")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };