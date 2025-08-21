/**
 * 用户数据类型定义
 * 定义用户对象的数据结构，用于类型约束和IDE智能提示
 */
export interface IUser {
    /** 用户唯一标识符 */
    id: number,
    /** 用户姓名 */
    name: string,
}