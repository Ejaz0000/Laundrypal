import {useRouter} from 'next/router'
import Login from '@/components/auth/login'
import Signup from '@/components/auth/signup'
import Becomeagent from '@/components/auth/becomeagent'
import Loginagent from '@/components/auth/loginagent'

const Auth = () => {
    const router = useRouter()
    const {auth} = router.query

    return (
        <div>
            {auth==='login' && <Login />}
            {auth==='signup' && <Signup />}
            {auth==='becomeagent' && <Becomeagent />}
            {auth==='loginagent' && <Loginagent />}
        </div>
    )
}
export default Auth