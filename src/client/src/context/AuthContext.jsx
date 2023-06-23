import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { api } from '@/services/api'
import { useRouter } from 'next/router';

const AuthContext = createContext();

export default AuthContext;

//https://djoser.readthedocs.io/en/latest/social_endpoints.html#
export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const token = Cookies.get('token');
    const router = useRouter();

    const loadUserData = async () => {
        if (token) {
            try {
                const { data } = await api.get(`auth/users/me/`, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                })

                let userObj = data

                if( !userObj?.first_name ){
                    userObj.first_name = "Unknown"
                }
                
                setUserData(userObj)
                setIsLoggedIn(true);
            } catch (error) {
                setIsLoggedIn(false);
            }
        } else {
            setIsLoggedIn(false);
            setUserData(null);
        }
        console.log(token)
    }

    useEffect(() => {
        loadUserData()
    }, []);

    const login = async ({ username, password }) => {
        const body = JSON.stringify({
            email: username,
            password: password
        })
        const { data } = await api.post(`auth/token/login/`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        Cookies.set('token', data?.auth_token)
        if( data?.auth_token ){
            router.push('/');
        }
    }

    const signUp = async ({ first_name, last_name, email, password, re_password }) => {
        const body = JSON.stringify({
            email: email,
            password: password
        })
        const { data } = await api.post(`/auth/users/`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        Cookies.set('token', data?.auth_token)
    }

    const authWith = async (provider) => {
        if (provider == 'google') {
            try {
                const redirect_url = `${location.origin}/_api/auth/${provider}/callback`;
                const res = await api.get(`auth/o/google-oauth2/?redirect_uri=${redirect_url}`)
                const { authorization_url } = res.data;
                window.location.replace(authorization_url);
            } catch (err) {
                console.error(err);
            }
        }
    }

    const logout = async () => {
        await api.post(`auth/token/logout/`, {}, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        setIsLoggedIn(false);
        setUserData(null);
        Cookies.remove('token')
        router.push('/');
    }

    const value = {
        isLoggedIn,
        userData,
        login,
        signUp,
        authWith,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};