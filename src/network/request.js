import Axios from "axios";

export function request(config) {

  const instance = Axios.create({
   baseURL:'http://106.54.54.237:8000/api/hy',
 })

  instance.interceptors.response.use(res => {
    return res.data
  })

  return instance(config)
}

