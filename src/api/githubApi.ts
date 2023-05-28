import axios from "axios";
// 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

export const githubApi = axios.create({
  baseURL:'https://api.github.com/repos/facebook/react',
  headers:{
    Authorization:'Bearer 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'
  }
})