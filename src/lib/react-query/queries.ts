import { useMutation, useQuery } from '@tanstack/react-query'
import {
  createComment,
  createPost,
  deleteCommentById,
  deletePost,
  deletePostFromAdmin,
  getAdminDashboard,
  getLikedPosts,
  getPostById,
  getPosts,
  getUserInfo,
  getUserPosts,
  getUsersInfoFromAdmin,
  likePostById,
  signInAccount,
  signOutAccount,
  signUpAccount,
  unlikePostById,
  updateComment,
  updatePost,
  updateRecruit,
  updateUserInfo,
} from '@/lib/axios/api'
import { QUERY_KEYS } from '@/lib/react-query/queryKeys'
import {
  AddCommentRequestDto,
  BoardRequestDto,
  DeletePostInfo,
  EditCommentRequestDto,
  ModifyPostInfo,
  ModifyRecruitInfo,
  ModifyUserInfo,
  SigninInfo,
  SignupRequestDto,
  UserListRequestInfo,
  WritePostRequestDto,
} from '@/types/Dto'

export const useSignUpAccount = () => {
  return useMutation({
    mutationFn: (data: SignupRequestDto) => signUpAccount(data),
  })
}

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (data: SigninInfo) => signInAccount(data),
  })
}

export const useSingoutAccount = () => {
  return useMutation({
    mutationFn: () => signOutAccount(),
  })
}

export const useGetPosts = (requestBody: BoardRequestDto) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_POSTS],
    queryFn: () => getPosts(requestBody),
  })
}

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (data: WritePostRequestDto) => createPost(data),
  })
}

export const useGetPostById = (boardId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_POST_BY_ID],
    queryFn: () => getPostById(boardId),
  })
}

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: (data: ModifyPostInfo) => updatePost(data),
  })
}

export const useUpdateRecruit = () => {
  return useMutation({
    mutationFn: (data: ModifyRecruitInfo) => updateRecruit(data),
  })
}

export const useDeletePost = () => {
  return useMutation({
    mutationFn: (requestBody: DeletePostInfo) => deletePost(requestBody),
  })
}

export const useGetUserPosts = (data: UserListRequestInfo) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER_POSTS],
    queryFn: () => getUserPosts(data),
  })
}

export const useGetUserInfo = (fetchOnMount?: boolean) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER_INFO],
    queryFn: () => getUserInfo(),
    enabled: fetchOnMount,
  })
}

export const useUpdateUserInfo = () => {
  return useMutation({
    mutationFn: (data: ModifyUserInfo) => updateUserInfo(data),
  })
}

export const useGetLikedPosts = (data: UserListRequestInfo) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_LIKED_POSTS],
    queryFn: () => getLikedPosts(data),
  })
}

export const useCrerateComment = () => {
  return useMutation({
    mutationFn: (data: AddCommentRequestDto) => createComment(data),
  })
}

export const useUpdateComment = () => {
  return useMutation({
    mutationFn: (data: EditCommentRequestDto) => updateComment(data),
  })
}

export const useDeleteCommentById = () => {
  return useMutation({
    mutationFn: (replyId: string) => deleteCommentById(replyId),
  })
}

export const useLikePostById = () => {
  return useMutation({
    mutationFn: ({
      boardId,
      signal,
    }: {
      boardId: string
      signal: AbortSignal
    }) => likePostById(boardId, signal),
  })
}

export const useUnlikePostById = () => {
  return useMutation({
    mutationFn: ({
      postLikeId,
      signal,
    }: {
      postLikeId: string
      signal: AbortSignal
    }) => unlikePostById(postLikeId, signal),
  })
}

export const useGetUsersFromAdmin = ({
  username,
  page,
}: {
  username?: string
  page?: string
}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USERS_FROM_ADMIN],
    queryFn: () => getUsersInfoFromAdmin({ username, page }),
  })
}

export const useGetAdminDashboard = (data: UserListRequestInfo) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ADMIN_DASHBOARD],
    queryFn: () => getAdminDashboard(data),
  })
}

export const useDeletePostFromAdmin = () => {
  return useMutation({
    mutationFn: (boardId: string) => deletePostFromAdmin(boardId),
  })
}
