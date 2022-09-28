```typescript jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface IMsgState {
  msg: string;
}
// 定义 state
const initialState: IMsgState = {
  msg: '',
};

// 异步方法
const running = () =>{
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve('running...')
        },3000)
    })
}

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
// 可以理解为 vuex 中的 action，
// 这里导出它，在业务代码中通过 dispatch 触发即可将其结果传递个 extraReducers
export const startRunning = createAsyncThunk( 'movie/getMovie', 
  async () => {
    const res= await running();
    return res;
  }
);

// 创建一个 Slice 
export const msgSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    // 数据请求完触发
    startMsgEnd: (state, {payload}) => {
      state.msg = payload;
    },
  },
  // extraReducers 字段让 slice 处理在别处定义的 actions， 
  // 包括由 createAsyncThunk 或其他slice生成的actions。
  // 可以理解为 vuex 中的 getter  
  extraReducers(builder) {
    builder
    .addCase(startRunning.pending, (state) => {
      console.log("🚀 ~ 进行中！")
    })
    .addCase(startRunning.fulfilled, (state, {payload}) => {
      console.log("🚀 ~ fulfilled", payload);
      state.msg = payload.data.msg
    })
    .addCase(startRunning.rejected, (state, err) => {
      console.log("🚀 ~ rejected", err)
    });
  },
});

// 导出方法
export const { startMsgEnd } = msgSlice.actions;

// 默认导出
export default msgSlice.reducer;

```