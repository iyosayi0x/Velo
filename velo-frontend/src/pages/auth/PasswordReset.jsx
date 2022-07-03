import secure_svg from '../../assets/ilstrs/secure.svg'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useRequestPasswordReset} from '../../adapters/auth'
import Message from '../../components/Message'
import {notEmptyString} from '../../utils'

const PasswordReset=()=>{
    const [email , setEmail] = useState('')
    const [isLoading, setIsLoading]= useState(false)
    const [messages , setmessages] = useState([])

    const nav=useNavigate()

    const request_password_reset= useRequestPasswordReset()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(isLoading){
            return
        }
        if(notEmptyString(email)){
            setIsLoading(true)
            const res = await request_password_reset(email)
            if(res.success){
                setmessages(currmessags => [...currmessags, <Message type='success' Text={<div>Success! Check your mail for password reset instructions </div>}/>])
                setIsLoading(false)
            }
            setIsLoading(false)
            setmessages(currmessags => [...currmessags, <Message type='error' Text={<div>Unable to request password reset</div>}/>])
        }
    }

    return (
        <main className='auth__main'>

            <section className='auth__ilstrWrapper'>
                <div className='w-3/4'>
                    <img src={secure_svg} alt='Welcome'/>
                </div>
            </section>

            <section className='auth__formWrapper'>
                <h1 className='text-3xl'>Reset your password!</h1>
                <small className='text-xs'>Enter your email</small>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <div className='my-4'>
                        <label htmlFor='email'>Email</label><br/>
                        <input type='email' required={true} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <button className={isLoading ? 'auth__btn auth__btn--loading' : 'auth__btn'}>{isLoading ? 'Loading...' : 'Reset Password'}</button>
                    </div>
                </form>
                <p  className='text-sm my-5'>Return back to login <Link to='/login'>Login</Link></p>
            </section>
        </main>
    )
}
export default PasswordReset