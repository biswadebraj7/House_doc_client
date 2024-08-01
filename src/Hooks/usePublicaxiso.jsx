import axios from 'axios'


const axisocreate= axios.create({
  baseURL:"http://localhost:5000"
})


const usePublicaxiso = () => {
  return axisocreate;
}

export default usePublicaxiso
