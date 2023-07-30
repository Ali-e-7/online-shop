import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx'
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user}  = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>I am SignIn Page</h1>
            <button onClick={logGoogleUser}>sign in with google</button>
            <SignUpForm />
        </div>
    )
}
export default SignIn;