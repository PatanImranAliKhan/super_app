import React from 'react'

const RegisterForm = ({ userDetails, userDetailsError, handleSubmitEvent, handleOnchangeEvent }) => {
    return (
        <div>
            <p className='imageDesc'>Discover new things on Superapp</p>
            <div className='register'>
                <img src="/assets/register.png" alt="Register_Image" />
                <div className='createAccount'>
                    <form onSubmit={(e) => { handleSubmitEvent(e) }}>
                        <div className='heading'>
                            <h1>Super app</h1>
                            <p>Create your own account</p>
                        </div>
                        <div className='inputValues'>
                            <div className='inputDiv'>
                                <input type="text" name='name' placeholder='Name'
                                    style={{ border: userDetailsError.name ? '1px solid' : 'none', borderColor: 'red' }}
                                    value={userDetails.name} onChange={(e) => { handleOnchangeEvent(e) }} />
                                <span>
                                    {
                                        userDetailsError.name && (
                                            <span className='error'>{userDetailsError.name}</span>
                                        )
                                    }
                                </span>

                            </div>

                            <div className='inputDiv'>
                                <input type="text" name='username' placeholder='UserName'
                                    style={{ border: userDetailsError.username ? '1px solid' : 'none', borderColor: 'red' }}
                                    value={userDetails.username} onChange={(e) => { handleOnchangeEvent(e) }} />
                                <span>
                                    {
                                        userDetailsError.username && (
                                            <span className='error'>{userDetailsError.username}</span>
                                        )
                                    }
                                </span>
                            </div>

                            <div className='inputDiv'>
                                <input type="email" name='email' placeholder='Email'
                                    style={{ border: userDetailsError.email ? '1px solid' : 'none', borderColor: 'red' }}
                                    value={userDetails.email} onChange={(e) => { handleOnchangeEvent(e) }} />
                                <span>
                                    {
                                        userDetailsError.email && (
                                            <span className='error'>{userDetailsError.email}</span>
                                        )
                                    }
                                </span>
                            </div>

                            <div className='inputDiv'>
                                <input type="text" name='mobile' placeholder='Mobile'
                                    style={{ border: userDetailsError.mobile ? '1px solid' : 'none', borderColor: 'red' }}
                                    value={userDetails.mobile} onChange={(e) => { handleOnchangeEvent(e) }} />
                                <span>
                                    {
                                        userDetailsError.mobile && (
                                            <span className='error'>{userDetailsError.mobile}</span>
                                        )
                                    }
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className='checkboxContent'>
                                <input type="checkbox" name='confirmation' onChange={(e) => { handleOnchangeEvent(e) }} />
                                <span>Share my registration data with Superapp</span>
                            </div>
                            <br />
                            <span>
                                {
                                    userDetailsError.confirmation && (
                                        <span className='error'>{userDetailsError.confirmation}</span>
                                    )
                                }
                            </span>
                        </div>
                        <button className='submitbut' type='submit'>SIGN UP</button>
                        <div className='policy'>
                            <p>By clicking on Sign up. you agree to Superapp <span className='highlight'>Terms and Conditions of Use</span></p>
                            <p>To learn more about how Superapp collects, uses, shares and protects your personal
                                data please head Superapp <span className='highlight'>Privacy Policy</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm