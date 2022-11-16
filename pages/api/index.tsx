interface Response {
    data: {
        user: {

            email: string;
            password: string;
        };
        token: string;
    };
}

export function post(text: string, user: object): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    token:
                        '91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f',
                    user: {
                        email: 'ducilio.manjate@test.com',
                        password: '1234',
                    },
                },
            });
        }, 2000);
    });
}

export const defaults = {
    headers: {
        Authorization: '',
    },
};