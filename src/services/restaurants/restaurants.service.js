import { mocks } from "./mock";
import camelize from "camelize";

const restaurantsRequest = (
  location = "37.7750214302915, -122.4202089697085"
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
};
restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log("error");
  });
