
// import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { EXIST_LOCAL_STORAGE, CURRENT_USER } from './constants'
import { Toast } from './toast';
import { history } from '../helpers'
// export const axiosInstance = axios.create({
//   // baseURL: process.env.REACT_APP_BASE_URL,
//   headers: {

//   }
// });


export const logout = () => {
  // axiosInstance.defaults.headers.common['Authorization'] = '';
  localStorage.clear();
  // history.push('/');
  window.location.reload(true);
};

export const isAuthenticated = (req, res, next) => {
  let accessToken = localStorage.getItem(EXIST_LOCAL_STORAGE.AUTHTOKEN);
  let themeMode = localStorage.getItem(EXIST_LOCAL_STORAGE.THEME_MODE);
  if (!!accessToken) {
    const jwtDecoded = jwtDecode(accessToken);
    if (new Date() < new Date(jwtDecoded.exp * 1e3)) {
      return true;
    } else {
      localStorage.clear();
     localStorage.setItem(EXIST_LOCAL_STORAGE.THEME_MODE,themeMode);
      Toast({ type: 'danger', message: 'Your Session has expired', title: 'Error' })
      console.error('session expired');
      history.push('/')
      return false
    }

  } else {
    localStorage.clear();
    localStorage.setItem(EXIST_LOCAL_STORAGE.THEME_MODE,themeMode);
    Toast({ type: 'danger', message: 'Your Session has expired', title: 'Error' })
    console.error('session expired');
    history.push('/')
  }

}

export const jwtDecodeDetails = (req, res, next) => {
  let accessToken = localStorage.getItem(EXIST_LOCAL_STORAGE.AUTHTOKEN);
  if (!!accessToken) {
    let userObj = JSON.parse(localStorage.getItem(CURRENT_USER))
    return { ...jwtDecode(accessToken), userObj };

  } else {
    console.error('Jwd null')
  }

}

export const getCandidateWeekOff = (setCourseStartDate, diff, joinedCourses = []) => {

  let count = 0
  for (let i = 0; i < diff + 1; i++) {
      const weekDay = setCourseStartDate.format('e')
      joinedCourses?.map(({ classDays }) => {
          if (Array.isArray(joinedCourses) && !classDays?.includes(Number(weekDay))) {
              count++
          }
      })
      setCourseStartDate.add(1, 'd');
  };
  return count

}