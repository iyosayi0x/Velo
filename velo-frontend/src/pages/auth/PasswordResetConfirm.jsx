import secure_svg from '../../assets/ilstrs/secure.svg'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'

const PasswordResetConfirm=()=>{
    const [email , setEmail] = useState('')
    const [isLoading, setIsLoading]= useState(false)
    const [messages, setMessages] = useState([])

    const nav=useNavigate()
    const params = useParams()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(isLoading){
            return
        }
        if(params.uidb64 && params.token){
            confirm_password_reset(params.uidb64 , params.token)
            setMessages(currMessages => [...currMessages , {type:'success', text:<div>Password Reset Success</div>}])
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
                <small className='text-xs'>Click reset password to reset your password</small>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <div>
                        <button className={isLoading ? 'auth__btn auth__btn--loading' : 'auth__btn'}>{isLoading ? 'Loading...' : 'Reset Password'}</button>
                    </div>
                </form>
                <p  className='text-sm my-5'>Return back to login <Link to='/signup'>signup</Link></p>
            </section>
        </main>
    )
}
export default PasswordResetConfirm