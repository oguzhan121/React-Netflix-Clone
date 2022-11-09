import React from "react";
import { Link,useNavigate } from "react-router-dom";
import {UserAuth} from '../context/AuthContext';

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {user,logIn} = UserAuth()
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            await logIn(email,password)
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }
    return(
        <>
             <div className="w-full h-screen">
                <img className="hidden sm:block absolute w-full h-full object-cover" src="https://occ-0-4451-784.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeAtTysoZVorf6Iz2JY07zkxFRRsPOWBNj-KkDduGpKrZLVcNTfkY0aDvaCRLi8_KX6_Un43QIsYrkHTMbvZLb4XcMV-vpNwPdtT.webp?r=881" />
                <div className="bg-block/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign In</h1>
                            <form className="w-full flex flex-col py-4">
                                <input type="email"    onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rouded" placeholder="Email" autoComplete="email"/>
                                <input type="password" className="p-3 my-2 bg-gray-700 rouded" placeholder="Password" autoComplete="current-password"/>
                                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>   
                                <div className="flex justify-between items-center text-sm text-gray-600"> 
                                    <p><input  className="mr-2" type="checkbox" />Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8"><span className="text-gray-600">New to Netflix?</span>
                                    <Link to="/signup">
                                    Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;