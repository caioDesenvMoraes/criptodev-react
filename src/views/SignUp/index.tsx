import react, { useState, useCallback, FormEvent } from "react"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { Container } from "./style"

interface Idata {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const [ data, setData ] = useState<Idata>({} as Idata)
    const [ load, setLoad ] = useState(false)

    const history = useHistory()
    
    const hadleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        api.post("", data).then(
            response => {
                setLoad(false)
                console.log(response.data)
                toast.success("Cadastro realizado com sucesso", {
                    hideProgressBar: false,
                    onClose: () => history.push("/signin")
                })
            }
        ).catch( e => {
            toast.error("Ops algo deu errado...")
            setLoad(false)
        })
    }, [data, history])

    if(load) { 
        return (
            <div>
                <h1>Aguarde Carregando...</h1>
            </div>
        )
    }

    return (
        <Container>
            <div className="card">
                <h5>Cadastre-se</h5>
                <form onSubmit={ hadleSubmit }>
                    <input 
                        type="text" 
                        placeholder="Informe seu nome"
                        onChange={ e => setData({ ...data, name: e.target.value})}
                    />
                    <input 
                        type="text" 
                        placeholder="Informe seu e-mail"
                        onChange={ e => setData({ ...data, email: e.target.value})}
                    />

                    <input
                        type="password"
                        placeholder="Informe a sua senha"
                        onChange={ e => setData({ ...data, password: e.target.value})}
                    />

                    <input type="submit" value="Cadastrar"/>
                </form>
            </div>
        </Container>
    )
}

export default SignUp