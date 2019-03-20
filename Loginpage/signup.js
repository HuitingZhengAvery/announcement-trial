import React from 'react';


class SignUp extends React.Component {

        state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
        };

  

    handleChange = (e) => {
        this.setState({ 
            [e.target.id]: e.target.value
         });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        console.log(this.state);
        }

    render() {
        return (
            <div className='container'>
                <h2>Sign up</h2>
                <form className = 'form' onSubmit={this.handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor='username'>Username</label>
                        <input type="text" className='form-control' id="username"  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password"  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName"  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName"  onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }  }




export default SignUp;