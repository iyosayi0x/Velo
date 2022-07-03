import secure_svg from '../../assets/ilstrs/secure.svg'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useRequestEmailVerify} from '../../adapters/auth'
import {notEmptyString} from '../../utils'

const PasswordReset=()=>{
    const [email , setEmail] = useState('')
    const [isLoading, setIsLoading]= useState(false)

    const nav=useNavigate()
    const request_email_verify = useRequestEmailVerify()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(isLoading){
            return
        }
        if(notEmptyString(email)){
            setIsLoading(true)
            const res = await request_email_verify(email)
            if(res.success){
                setIsLoading(false)
                nav('/')
            }
            setIsLoading(false)
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
                <small className='text-xs'>Request email verification</small>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <div className='my-4'>
                        <label htmlFor='email'>Email</label><br/>
                        <input type='email' required={true} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
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