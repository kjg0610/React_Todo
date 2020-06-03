import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { todoAction } from './reducer';

const ApiClient = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
    
});

const getTodoAPi = () => {
    return ApiClient.get(`/todo`)
}

const postTodoAPi = (item) => {
    console.log(item)
    return ApiClient.post(`/todo`,item)
}
function* getTodo(action) {
	try {
		const result = yield call(getTodoAPi, action.payload);
		yield put(todoAction.getTodoS(result));
	} catch (error) {
        console.log(error)
        yield put(todoAction.getTodoF());
        // yield put(); TODO:: #5 API 콜을 실패 했을떄 어떤 이벤트를 호출해야 할까?
	}
}

function* fetchTodo(action) {
	try {
        yield call(postTodoAPi, action.payload);
        
		yield put(todoAction.addTodoS(action.payload));
	} catch (error) {
        console.log(error)
        yield put(todoAction.addTodoF());
        // yield put(); TODO:: #5 API 콜을 실패 했을떄 어떤 이벤트를 호출해야 할까?
	}
}


export function* watchTodo() {
	yield takeLatest(todoAction.getTodo, getTodo);
	yield takeLatest(todoAction.addTodo, fetchTodo);
}