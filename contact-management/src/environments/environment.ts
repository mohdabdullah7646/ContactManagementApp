export interface Environment {
    production: boolean;
    apiUrl: string;
}

export const environment = {
    production : false,
    apiUrl : 'https://localhost:5001/api'
};
