import type { IUser } from '@/type/user';
// 定义一个全局的数据
const data = {
    user: {}
} as {
    user: IUser
}

export const useAuth = () => {
    const user = (field: keyof IUser) => {
        return data.user[field];
    }
    return { user }
}

export type IUserAuth = ReturnType<typeof useAuth>;