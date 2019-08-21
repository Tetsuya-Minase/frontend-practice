import axios, {AxiosResponse} from 'axios';

export class AxiosService<T> {
    public async get(path: string): Promise<T> {
        return await axios.get<any, T>(path);
    }
}

