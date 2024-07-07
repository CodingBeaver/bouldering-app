function Login() {


    return (
        <div className="flex h-screen justify-center align-middle items-center text-center">
            <form>
                <div className="flex-col">
                    <div className="flex-row">
                        <label htmlFor="username">Username:</label>
                        <input name="username" placeholder="Enter username"></input>
                    </div>
                    <div className="flex-row">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" placeholder="*******"></input>
                    </div>
                    <button type="submit">Login</button>
                </div>
            </form >
        </div>
    )

}



export default Login