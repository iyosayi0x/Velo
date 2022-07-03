import secure_svg from '../../assets/ilstrs/secure.svg'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'
import Message from '../../components/Message'
import {notEmptyString} from '../../utils'

const PasswordResetConfirm=()=>{
    const [passwordData, setPasswordData] = useState({
        password:'',
        re_password:''
    })
    const [isLoading, setIsLoading]= useState(false)
    const [messages, setMessages] = useState([])

    const nav=useNavigate()
    const params = useParams()

    const {password , re_password} = passwordData

    const handlePasswordChange=(e)=>{
        setPasswordData(currPassword => ({...currPassword, [e.target.name]:e.target.value}))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(isLoading){
            return
        }
        if(params.uidb64 && params.token && notEmptyString(password) && notEmptyString(re_password)){
            const res = await confirm_password_reset(params.uidb64 , params.token, passwordData)
            if(res.success){
                setMessages(currMessages => [...currMessages , <Message type='success' text={<div>Password reset successful <Link to='/login'>Login</Link></div>}/>])
            }
            setMessages(currMessages => [...currMessages , <Message type='success' text={<div>Password reset failed <Link to='/password-reset-request'>try again</Link></div>}/>])
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
                    <div className='my-4'>
                            <label htmlFor='password'>Password</label><br/>
                            <input type='password' required={true} name='password' value={password} onChange={(e)=> handlePasswordChange(e)}/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor='re_password'>Confirm Password</label><br/>
                        <input type='password' required={true} name='re_password' value={re_password} onChange={(e)=> handlePasswordChange(e)}/>
                    </div>
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