import welcome_svg from '../assets/ilstrs/welcome.svg'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useSignUp} from '../adapters/auth'

const SignUp=()=>{
    const [formData, setFormData] = useState({
        email:'',
        first_name:'',
        last_name:'',
        middle_name:'',
        password:'',
        re_password:''
    })

    const signup = useSignUp()
    const [isLoading, setIsLoading]= useState(false)
    const {email , first_name, last_name, middle_name, password,re_password} = formData

    const handleFormChange=(e)=>{
        setFormData(currFormData=> ({...currFormData, [e.target.name]:e.target.value}))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(isLoading){
            return
        }

        if(notEmptyString(email) && notEmptyString(first_name) && notEmptyString(last_name) && notEmptyString(password) && notEmptyString(re_password)){
            setIsLoading(true)
            const res = await signup(formData)
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
                <h1 className='text-3xl'>Welcome to Velo!</h1>
                <small className='text-xs'>Create an account</small>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <div className='auth__customNameField'>
                        <div className='my-4'>
                            <label htmlFor='first_name'>First Name</label><br/>
                            <input type='first_name' required={true} name='first_name' value={first_name} onChange={e=>handleFormChange(e)}/>
                        </div>
                        <div className='my-4'>
                            <label htmlFor='last_name'>Last Name</label><br/>
                            <input type='last_name' required={true} name='last_name' value={last_name} onChange={e=>handleFormChange(e)}/>
                        </div>
                    </div>
                    <div className='my-4'>
                            <label htmlFor='middle_name'>Middle Name (optional)</label><br/>
                            <input type='middle_name' required={false} name='middle_name' value={middle_name} onChange={e=>handleFormChange(e)}/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor='email'>Email</label><br/>
                        <input type='email' required={true} name='email' value={email} onChange={e=>handleFormChange(e)}/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor='password'>Password</label><br/>
                        <input type='password' required={true} name='password' value={password} onChange={e=>handleFormChange(e)}/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor='re_password'>Confirm Password</label><br/>
                        <input type='password' required={true} name='re_password' value={re_password} onChange={e=>handleFormChange(e)}/>
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