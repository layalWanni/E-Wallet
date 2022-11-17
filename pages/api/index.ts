interface User {
    email: string;
    senha: string;
}


export default function fakeFetchApi(user) {
    try {
        const users = [
            {
                email: 'layal@gmail.com',
                senha: '#jjasjjs'
            },
            {
                email: 'ducy@gmail.com',
                senha: '!DigdimDigdim!2'
            },
            {
                email: 'khensane@gmail.com',
                senha: '#PegueiSdsdeusDados123'
            },

        ];

        const { email, senha } = user;

        let correctUser = false;

        for (let i = 0; i < users.length; i += 1) {
            if (users[i].email === email && users[i].senha === senha) {
                correctUser = true;

                break;
            }
        }

        if (correctUser) {
            return { message: "login feito com sucesso!", status: 200 };
        }

        return { message: "usuário e/ou senha incorretos.", status: 401 };
    } catch (err) {
        return { message: "usuário e/ou senha incorretos.", status: 401 };
    }
}