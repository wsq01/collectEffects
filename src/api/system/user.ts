import request from '@/utils/request'

// 查询列表
export function listUser(params: any) {
  return request({ url: '/system/user/list', params })
}
// 查询详细
export function getUser(userId?: any) {
  return request({ url: '/system/user/' + userId || '' })
}
// 新增
export function addUser(data: any) {
  return request({ url: '/system/user', method: 'post', data })
}
// 修改
export function updateUser(data: any) {
  return request({ url: '/system/user', method: 'put', data })
}
// 删除
export function delUser(userId: any) {
  return request({ url: '/system/user/' + userId, method: 'delete' })
}
// 用户密码重置
export function resetUserPwd(userId: any, password: any) {
  const data = { userId, password }
  return request({ url: '/system/user/resetPwd', method: 'put', data })
}
// 用户状态修改
export function changeUserStatus(userId, status) {
  const data = { userId, status }
  return request({ url: '/system/user/changeStatus', method: 'put', data })
}
// 查询用户个人信息
export function getUserProfile() {
  return request({ url: '/system/user/profile' })
}
// 修改用户个人信息
export function updateUserProfile(data) {
  return request({ url: '/system/user/profile', method: 'put', data })
}
// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
  const params = { oldPassword, newPassword }
  return request({ url: '/system/user/profile/updatePwd', method: 'put', params })
}
// 用户头像上传
export function uploadAvatar(data: any) {
  return request({ url: '/system/user/profile/avatar', method: 'post', data })
}
// 查询授权角色
export function getAuthRole(userId: any) {
  return request({ url: '/system/user/authRole/' + userId })
}
// 保存授权角色
export function updateAuthRole(params: any) {
  return request({ url: '/system/user/authRole', method: 'put', params })
}
// 查询部门下拉树结构
export function deptTreeSelect() {
  return request({ url: '/system/user/deptTree' })
}
