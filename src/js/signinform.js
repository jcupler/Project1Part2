function CreateAccountForm(
    {
        createName,
        setCreateName,
        createEmail,
        setCreateEmail,
        createUsername,
        setCreateUsername,
        createPassword,
        setCreatePassword,
        submitCreate
    })
{
    return (
        <div className="col-12 col-lg-6">
            <h3 className="mb-2">Create Account</h3>
            <div className="container-fluid">
                <form onSubmit={submitCreate} className="row g-4">
                    <input

                        className="form-control"
                        placeholder="Name"
                        value={createName}
                        onChange={(e) => setCreateName(e.target.value)}
                        required
                    />

                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        value={createEmail}
                        onChange={(e) => setCreateEmail(e.target.value)}
                        required
                    />

                    <input
                        className="form-control"
                        placeholder="Username"
                        value={createUsername}
                        onChange={(e) => setCreateUsername(e.target.value)}
                        required
                    />

                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        value={createPassword}
                        onChange={(e) => setCreatePassword(e.target.value)}
                        required
                    />

                    <button className="btn btn-success" type="submit">Enter</button>
                </form>
            </div>
        </div>
    );
}

function Signinform() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [userField, setUserField] = React.useState("");
    const [passwordField, setPasswordField] = React.useState("");
    const [showCreateAccount, setShowCreateAccount] = React.useState(false);
    const [createName, setCreateName] = React.useState("");
    const [createEmail, setCreateEmail] = React.useState("");
    const [createUsername, setCreateUsername] = React.useState("");
    const [createPassword, setCreatePassword] = React.useState("");

    function submitLogin(e) {
        e.preventDefault();
        // By default, we say success for now
        setLoggedIn(true);
        setUsername(userField);
        setUserField("");
        setPasswordField("");
        setShowCreateAccount(false);
    }

    function submitCreate(e) {
        e.preventDefault();
        setUserField(createUsername);
        setPasswordField(createPassword);
        setShowCreateAccount(false);
        setCreateName("");
        setCreateEmail("");
        setCreateUsername("");
        setCreatePassword("");
    }

    return (
        <div className="container-fluid">
            <div className="row g-5">
                <div className="col-12 col-lg-6">
                    <h3 className="mb-2">Sign In</h3>
                    <form onSubmit={submitLogin}>
                        <div>
                            <label className="form-label">Username</label>
                            <input
                                className="form-control"
                                value={userField}
                                onChange={(e) => setUserField(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="form-label">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                value={passwordField}
                                onChange={(e) => setPasswordField(e.target.value)}
                                required
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <button className="btn btn-primary ms-5" type="button" onClick={(e) => setShowCreateAccount(true)}>
                            Create Account
                        </button>
                        {/*If user is logged in, will state what logged in as below buttons*/}
                        {loggedIn ? (
                            <div className="pt-5 mt5">
                                Logged in as: {username}
                            </div>
                        ) : null }
                    </form>
                </div>

                {showCreateAccount ? (
                        <CreateAccountForm
                            createName={createName}
                            setCreateName={setCreateName}
                            createEmail={createEmail}
                            setCreateEmail={setCreateEmail}
                            createUsername={createUsername}
                            setCreateUsername={setCreateUsername}
                            createPassword={createPassword}
                            setCreatePassword={setCreatePassword}
                            submitCreate={submitCreate}
                        />
                ) : null
                }
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("signinform-root")).render(<Signinform />);