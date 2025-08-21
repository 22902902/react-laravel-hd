import type { IUser } from '@/type/user';

/**
 * 全局用户数据存储
 * 简单的内存存储，用于保存当前登录用户的信息
 * 注意：这是一个简化的实现，生产环境中应该使用更完善的状态管理方案
 */
const data = {
    user: {}
} as {
    user: IUser
}

/**
 * 用户认证状态管理Hook
 * 提供用户信息的访问接口，用于在整个应用中获取用户数据
 * 
 * @returns {Object} 包含用户信息访问方法的对象
 */
export const useAuth = () => {
    /**
     * 获取用户信息的指定字段
     * 
     * @param {keyof IUser} field - 要获取的用户信息字段名
     * @returns {any} 对应字段的值
     */
    const user = (field: keyof IUser) => {
        return data.user[field];
    }
    
    return { user }
}

/**
 * 导出useAuth Hook的返回类型
 * 用于在其他组件中进行类型约束
 */
export type IUserAuth = ReturnType<typeof useAuth>;