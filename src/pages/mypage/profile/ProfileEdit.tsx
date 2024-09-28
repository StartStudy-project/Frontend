import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ProfileValidation } from '@/lib/validation'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Loader } from '@/components/index'
import { useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui'

export default function ProfileEdit() {
  const { toast } = useToast()
  //   const params = useParams<{ id: string }>()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof ProfileValidation>>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      file: [],
      //   username: user.username,
      //   email: user.email,
    },
  })

  //   useEffect(() => {
  //     if (user) {
  //       form.reset({
  //         file: [],
  //         username: user.username,
  //         email: user.email,
  //       })
  //     }
  //   }, [user])

  const handleSubmit = () => {}
  // Handler
  //   const handleSubmit = async (value: z.infer<typeof ProfileValidation>) => {
  // if (currentUser) {
  //   const updatedUser = await updateUser({
  //     userId: currentUser.$id,
  //     username: value.username,
  //     file: value.file,
  //     imageUrl: currentUser.imageUrl,
  //     imageId: currentUser.imageId,
  //   })

  //   if (!updatedUser) {
  //     toast({
  //       title: `유저 업데이트에 실패했습니다. 다시 시도해 주세요`,
  //     })
  //     return
  //   }

  //   setUser({
  //     ...user,
  //     username: updatedUser?.username,
  //     imageUrl: updatedUser?.imageUrl,
  //   })
  //   router.push(`/profile/${params.id}`)
  // }
  //   }

  //   if (!currentUser || isLoadingUser)
  //     return (
  //       <div className='flex-center w-full h-full'>
  //         <Loader />
  //       </div>
  //     )

  //   if (!isAuthenticated) {
  //     router.push('/signin')
  //     return
  //   }

  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col w-full'>
          <h2 className='text-3xl font-bold'>프로필 수정</h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='mt-10 space-y-8'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input disabled {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>닉네임</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex gap-2'>
                <Button
                  type='button'
                  //   disabled={isLoadingUpdate}
                  onClick={() => navigate(-1)}
                  className='text-black bg-white hover:bg-white'
                >
                  취소
                </Button>
                <Button type='submit'>
                  저장
                  {/* {isLoadingUpdate ? <Loader /> : '저장'} */}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
