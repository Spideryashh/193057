export const getTrains = () => {
    return axios
      .get("/api/trains?timestamp={timestamp}")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };