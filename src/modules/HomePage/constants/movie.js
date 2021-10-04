// Lợi ích của việc tách action type ra file constants
// - Khi cần sửa, ta chỉ cần sửa ở file constants
// - Ta có thể đính kèm prefix cho action name
//   + Ta có thể dễ dàng biết đc là action xuất phát từ module nào khi xem devtool
//   + không sợ bị trùng lặp type giữa các reducer

const PREFIX = "HomePage";

export const GET_MOVIES_REQUEST = `${PREFIX}/GET_MOVIES_REQUEST`;
export const GET_MOVIES_SUCCESS = `${PREFIX}/GET_MOVIES_SUCCESS`;
export const GET_MOVIES_FAILURE = `${PREFIX}/GET_MOVIES_FAILURE`;
