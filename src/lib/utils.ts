import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 条件样式类名合并工具函数
 * 结合clsx和tailwind-merge的功能，提供智能的CSS类名合并
 * 
 * 功能说明:
 * 1. 使用clsx处理条件样式类名
 * 2. 使用tailwind-merge解决Tailwind CSS类名冲突
 * 3. 确保相同属性的类名不会冲突（如同时存在多个width类名时，后者覆盖前者）
 * 
 * @param {...ClassValue[]} inputs - 可以是字符串、对象、数组等多种类型的类名
 * @returns {string} 合并后的类名字符串
 * 
 * @example
 * cn('px-2 py-1', 'px-4') // 返回 'py-1 px-4' (px-2被px-4覆盖)
 * cn('text-red-500', { 'text-blue-500': isActive }) // 根据条件返回相应颜色
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
