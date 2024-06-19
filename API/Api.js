import axios from "axios";
import { Alert, Text } from "react-native";
import { BASE_URL, STATUS_CODE } from "./CommonApi";
// import Toast from "react-native-toast-message";
// import { token } from "../Globalcomponents/gettingTokenfromAsync";
// import Toast from 'react-native-simple-toast';
 
// Request Methods
const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};
/*
 * API controller that for handling the request
 */
class Api {
//   isLoggedIn = false;
//   userData = {};
//   userToken = null;
  constructor() {
    this.baseURL = BASE_URL;
  }
  get(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.GET, url, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.POST, url, data)
        .then((response) => {
          resolve(response);
          // console.log('response',response);
        })
        .catch((error) => {
          // console.log(error);
        });
    });
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.PUT, url, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          // console.log(error);
        });
    });
  }
  delete(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.DELETE, url, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
 
 
 
 
 
 
  // Main function with hold the axios request param
  api(method, url, data) {
    return new Promise((resolve, reject) => {
      let axiosConfig = {};
      axiosConfig.method = method;
      axiosConfig.url = this.baseURL + url;
      axiosConfig.headers = this.setHeaders(data);
      console.log("axiosConfig.headers", axiosConfig.headers)
      if (data) {
        if (data) axiosConfig.data = data;
      }
 
      axios(axiosConfig)
        .then((response) => {
          if (
            response &&
            response.status === STATUS_CODE.INTERNAL_SERVER_ERROR
          ) {
            Alert.alert("Something went wrong!!");
          } else {
            // resolve(response.data);  
            resolve(response);
            if (response) {
              console.log('response', response);
              // Toast.show(response.data.messages, Toast.LONG, {
              //   duration: 3000,
              //   backgroundColor: "blue",
              //   textColor: "green"
              // });
            }
          }
          // console.log("response", response);
        })
        .catch((error) => {
          let err = error?.response;
          let errData = error?.response.data;
          console.log("ERROR is the error", error);
          // console.log("error.response.data?.email",errData?.errors[0])
    //       if (
    //         error.response.data?.email &&
    //         error.response.data.email.length > 0
    //       ) {
    //         Toast.show({
    //           type: "error",
    //           text1: `Email ${error.response.data.email[0]}`,
    //           position: "bottom",
    //           visibilityTime: 5000,
    //           text1Style: {
    //             color: "red",
    //             fontSize: 16
    //           }
    //         })
 
    //       } else if (
    //         error.response.data?.phone_number &&
    //         error.response.data.phone_number.length > 0
    //       ) {
    //         Toast.show({
    //           type: "error",
    //           text1: `Mobile Number ${error.response.data.phone_number[0]}`,
    //           position: "bottom",
    //           visibilityTime: 5000,
    //           text1Style: {
    //             color: "red",
    //             fontSize: 16
    //           }
    //         })
 
    //       } else if (
    //         error.response.data.message
    //       ) {
    //         Toast.show({
    //           type: "error",
    //           text1: error.response.data.message,
    //           position: "bottom",
    //           visibilityTime: 5000,
    //           text1Style: {
    //             color: "red",
    //             fontSize: 16
    //           }
    //         })
    //       } else if (err?.status === 401) {
    //         Toast.show({
    //           type: "error",
    //           text1: error?.response.data.errors,
    //           position: "bottom",
    //           visibilityTime: 5000,
    //           text1Style: {
    //             color: "red",
    //             fontSize: 16
    //           }
    //         })
    //       }
    //       else if (err?.status === 422 && error?.response.data.messages) {
    //         Toast.show({
    //           type: "error",
    //           text1: error?.response.data.messages,
    //           position: "bottom",
    //           visibilityTime: 5000,
    //           text1Style: {
    //             color: "red",
    //             fontSize: 16
    //           }
    //         })
    //       }
       
    //     else if (err?.status === 422 && error?.response.data.errors[0]) {
    //       const errorMessage = Array.isArray(error?.response.data.errors) ?
    //           error?.response.data.errors[0] :
    //           error?.response.data.errors;
    //       Toast.show({
    //           type: "error",
    //           text1: errorMessage,
    //           position: "bottom",
    //           visibilityTime: 5000,
    //           text1Style: {
    //               color: "red",
    //               fontSize: 16
    //           }
    //       });
    //   }
     
    //       else {
    //         Toast.show({
    //           type: "error",
    //           text1: "An error occurred",
    //           position: "bottom",
    //           visibilityTime: 5000,
    //           text1Style: {
    //             color: "red",
    //             fontSize: 16,
    //           }
    //         })
    //       }
          //DEFAULT ERROR HANDLING
        });
    });
  }
  // Set the header for request
  setHeaders(data) {
    console.log("i am in set headers", data)
    let headers = {};
 
    headers["accept-language"] = "en";
 
    headers["Content-Type"] = "application/json";
 
    headers["Accept"] = "application/json";
    // headers["Authorization"] = token;
    console.log("hii")
 
    if (data) {
      if (data.isMultipart) {
 
        headers["Content-Type"] = "multipart/form-data";
      }
      if (data.headers) {
        for (var key in data.headers) {
          if (data.headers.hasOwnProperty(key)) {
            headers[key] = data.headers[key];
          }
        }
      }
    }
    return headers;
  }
}
export default Api;