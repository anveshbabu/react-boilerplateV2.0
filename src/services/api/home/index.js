import { collection, addDoc, getDoc, updateDoc, query, doc, where, getDocs, deleteDoc, orderBy, startAfter, endAt, limit } from "firebase/firestore";
// import { getDatabase, ref,  orderByChild ,equalTo,get} from "firebase/database";
import { getAuth, deleteUser } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { isAuthenticated, jwtDecodeDetails } from '../../utilities';
import { STATUS } from '../../constants'
import { CURRENT_USER } from '../../constants'
import { Toast } from '../../toast';