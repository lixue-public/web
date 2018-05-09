/**
 * Created by xli5 on 5/9/2018.
 */

"use strict";
// prepare redux方法
 const Redux = require("redux");
 const createStore = Redux.createStore;
 const combineReducers = Redux.combineReducers;

// state -> {a:[], b[]}
// action -> {type, data(string)}  // 必须有type,来甄别被 哪个reducer处理
// reducerA  -> function(state, action){}
// reducers = { a: reducerA, b:reducerB };//

function reducerA (state,action){}  // reducerA中的state对应的是state中，a:[]的值， reducer处理指定type的action,去影响指定的state
   if(typeof state === 'undefined') return []; // to handle, createStore, state还没ready的时候？
   switch(action.type){
    case 'a' :
      return state.concat([action.data]);
    default:
      return state;
}
function reducerB (state,action){}
   if(typeof state === 'undefined') return []; // state在初始化的时候，存在undefined的情况，处理这种情况，初始化state(默认去createStore中的默认值）;  createStore的时候，也可以直接初始化
   switch(action.type){
     case 'b' :
       return state.concat([action.data]);
     default:
       return state;
}

let reducers = {reducerA,reducerB};
const reducer= combineReducers(reducers);

const store = createStore(reducer,{a:[111],b:[222]});
//添加 store的订阅者

store.subscribe(function listener(){
  console.log( store.getState());
})

let action = {
  type: 'a',
  data: 'lixue'
}
store.dispatch(action);
