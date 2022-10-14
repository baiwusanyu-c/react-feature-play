```typescript jsx
import React, { FC } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { getInfoAsync, selectUser, logout } from "@pages/login/slice";

function withAuthorization(WrappedComponent: FC) {
	return () => {
		const location = useLocation();
		const dispatch = useAppDispatch();
		const navigate = useNavigate();
		const user = useAppSelector(selectUser);

		if (user.token) {
                //如果仓库中存在token
			if (location.pathname === "/login" || location.pathname === "/register") {
                        //如果用户想要去登录或注册
				return <Navigate to="/" replace />;
			}//重定向到首页

			if (user.name) {
				return <WrappedComponent />;
			}//若同时也存在用户信息，则放行

			
			dispatch(getInfoAsync()).then((res) => {
				// 若仓库中不存在用户信息
				//发请求获取用户信息
				if (res.type === "user/getInfo/rejected") {
                                //获取不到用户信息则token过期需要重新登录
					dispatch(logout());
                                        //清除store中旧数据，清除本地token存储跳转到登录页面
					navigate("/login");
				}
			});

			return <WrappedComponent />;
		} else {
                //若无token，则若想要去的是登录则放行，若不是登录，跳转到登录
			if (location.pathname === "/login") {
				return <WrappedComponent />;
			} else {
				return <Navigate to="/login" />;
			}
		}
	};
}

export default withAuthorization;

```

