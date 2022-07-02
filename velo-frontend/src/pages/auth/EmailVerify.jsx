import secure_svg from '../../assets/ilstrs/secure.svg'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'
import {useEmailVerify} from '../../adapters/auth'

const PasswordReset=()=>{
    const params = useParams();
    const [isLoading, setIsLoading]= useState(false)
    const [messags, setmessags] = useState([])

    const verify_mail = useEmailVerify()

    const nav=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(isLoading){
            return
        }

        if(params.uidb64 && params.token){
            setIsLoading(true)
            const res = await verify_mail(params.uidb64, params.token)
            if (res.success !== true){
                setmessags(currmessags=> [...currmessags, {type:'error', text:<div>Failed to verify mail <Link to='/email-verify-request'>Try again</Link></div>}])
            }
            setIsLoading(false)
        }else{
            setmessags(currmessags=> [...currmessags, {type:'error', text:<div>Invaid credentials</div>}])
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
                <h1 className='text-3xl'>Verify your mail!</h1>
                <small className='text-xs my-6'>Click Verify mail to verify your mail</small>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <div>
                        <button className={isLoading ? 'auth__btn auth__btn--loading' : 'auth__btn'}>{isLoading ? 'Loading...' : 'Verify email'}</button>
                    </div>
                </form>
                <p  className='text-sm my-5'>Return back to login <Link to='/signup'>signup</Link></p>
            </section>
        </main>
    )
}
export default PasswordReset