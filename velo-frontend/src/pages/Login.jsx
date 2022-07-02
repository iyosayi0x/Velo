import welcome_svg from '../assets/ilstrs/welcome.svg'
import {Link} from 'react-router-dom'

const Login=()=>{
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
                <form className='auth__form'>
                    <div className='my-4'>
                        <label htmlFor='email'>Email</label><br/>
                        <input type='email' required={true}/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor='password'>Password</label><br/>
                        <input type='password' required={true}/>
                    </div>
                    <div>
                        <button className='auth__btn'>Login</button>
                    </div>
                </form>
                <p  className='text-sm my-5'>Already have an account? <Link to='/signup'>Signup</Link></p>
            </section>
        </main>
    )
}
export default Login