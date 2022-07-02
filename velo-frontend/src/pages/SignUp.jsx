import welcome_svg from '../assets/ilstrs/welcome.svg'
import {Link} from 'react-router-dom'

const SignUp=()=>{
    return (
        <main className='auth__main'>

            <section className='auth__ilstrWrapper'>
                <div className='w-3/4'>
                    <img src={welcome_svg} alt='Welcome'/>
                </div>
            </section>

            <section className='auth__formWrapper'>
                <h1 className='text-3xl'>Welcome to Velo!</h1>
                <small className='text-xs'>Create an account</small>
                <form className='auth__form'>
                    <div className='auth__customNameField'>
                        <div className='my-4'>
                            <label htmlFor='first_name'>First Name</label><br/>
                            <input type='first_name' required={true}/>
                        </div>
                        <div className='my-4'>
                            <label htmlFor='last_name'>Last Name</label><br/>
                            <input type='last_name' required={true}/>
                        </div>
                    </div>
                    <div className='my-4'>
                            <label htmlFor='email'>Middle Name (optional)</label><br/>
                            <input type='email' required={false}/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor='email'>Email</label><br/>
                        <input type='email' required={true}/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor='password'>Password</label><br/>
                        <input type='password' required={true}/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor='re_password'>Confirm Password</label><br/>
                        <input type='re_password' required={true}/>
                    </div>
                    <div>
                        <button className='auth__btn'>SignUp</button>
                    </div>
                </form>
                <p  className='text-sm my-5'>Already have an account? <Link to='/login'>Login</Link></p>
            </section>
        </main>
    )
}
export default SignUp