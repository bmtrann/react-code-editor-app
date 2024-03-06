import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const FAST_API_URL = import.meta.env.FAST_API_URL

// const API = axios.create({
//   baseURL: "https://emkc.org/api/v2/piston",
// });

export const executeCode = async (language, currentQuestion, sourceCode) => {
  const payload = {
    "language": language,
    "submitted_code": sourceCode
  };
  const url = `${FAST_API_URL}/${currentQuestion}/submit`;
  // console.log(url);
  return await axios.post(url, payload);

  // const response = await API.post("/execute", {
  //   language: language,
  //   version: LANGUAGE_VERSIONS[language],
  //   files: [
  //     {
  //       content: sourceCode,
  //     },
  //   ],
  // });
  // return response.data;
};
