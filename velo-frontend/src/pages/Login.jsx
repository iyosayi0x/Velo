import welcome_svg from '../assets/ilstrs/welcome.svg'
import {Link, useNavigate} from 'react-router-dom'
import {useLogin} from '../adapters/auth'
import {useState} from 'react'

const Login=()=>{
    const login = useLogin()
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading]= useState(false)

    const nav=useNavigate()

    const handleSubmit=async(e)=>{
        if(isLoading){
            return
        }
        e.preventDefault()

        if(email.trim() !== '' && password.trim() !==''){
            setIsLoading(true)
            const res = await login(email, password)
            if(res.success){
                nav('/')
            }
            setIsLoading(false)
        }
    }

    return (
        <main className='auth__main'>

            <section className='auth__ilstrWrapper'>
                <div className='w-3/4'>
                    <img src={welcome_svg} alt='Welcome'/>
                </div>
            </section>

            <section className='auth__formWrapper'>
                <h1 className='text-3xl'>Welcome back!</h1>
                <small className='text-xs'>Login to your account</small>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <div className='my-4'>
                        <label htmlFor='email'>Email</label><br/>
                        <input type='email' required={true} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor='password'>Password</label><br/>
                        <input type='password' required={true} value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button className={isLoading ? 'auth__btn auth__btn--loading' : 'auth__btn'}>{isLoading ? 'Loading...' : 'Login'}</button>
                    </div>
                </form>
                <p  className='text-sm my-5'>Don't have an account? <Link to='/signup'>Signup</Link></p>
            </section>
        </main>
    )
}
export default Login