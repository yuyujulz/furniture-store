import "../index.scss"

export default function SignUp(){
    return(
        <div >
            

                <form action="submit" className="loginForm signUp" >
                    <label>EMAIL</label>
                        <input
                        className="email"
                        type="email"
                        name="email"
                        // onChange={(e) => setEmail(e.target.value)}
                        // value={email}
                        />

                    <label>PASSWORD</label>
                        <input
                        className="password"
                        type="password"
                        name="password"
                        // onChange={(e) => setPassword(e.target.value)}
                        // value={password}
                        />

                    <label>FULL NAME</label>
                        <input
                        className="userName"
                        type="userName"
                        name="userName"
                        // onChange={(e) => setUserName(e.target.value)}
                        // value={userName}
                        />
                
                    <button type="submit" className="btn">SIGNUP</button>
                </form>


            

        </div>
    )
}