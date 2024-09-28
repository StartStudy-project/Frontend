'use client'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { SigninInfo } from '@/types/Dto'
import { useAuthStore } from '@/lib/zustand/store'
import { createSigninConfig } from '@/lib/axios/AxiosModule'
import { useToast } from '@/hooks/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Loader } from '@/components/index'
import { SigninValidation } from '@/lib/validation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui'

type props = {
  handleTarget: (_target: '회원가입' | '로그인' | null) => void
  closeModal: () => void
}

export default function SigninForm({ handleTarget, closeModal }: props) {
  const { toast } = useToast()

  const signIn = useAuthStore((state) => state.signin)

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      pwd: '',
    },
  })

  const handleSignin = async (data: SigninInfo) => {
    try {
      await signIn(data)
      closeModal()
    } catch (e) {
      toast({
        title: '로그인 중 서버에러가 발생했습니다.',
      })
      console.log(e)
    }
  }

  return (
    <Form {...form}>
      <div className='flex flex-col items-center sm:w-420'>
        <form
          onSubmit={form.handleSubmit(handleSignin)}
          className='flex flex-col gap-5 w-full min-w-[360px]'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='shad-form_label'>이메일</FormLabel>
                <FormControl>
                  <Input type='email' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='pwd'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='shad-form_label'>비밀번호</FormLabel>
                <FormControl>
                  <Input type='password' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='shad-button_primary'>
            {/* {isSigningInUser || isUserLoading ? (
              <div className='flex-center gap-2'>
                <Loader />
              </div>
            ) : (
              '로그인'
            )} */}
            로그인
          </Button>

          <p className='text-small-regular text-light-2 text-center mt-2'>
            계정이 없나요?
            <button
              onClick={() => handleTarget('회원가입')}
              className='ml-1 text-blue-500 underline font-semibold'
            >
              회원가입
            </button>
          </p>
        </form>
      </div>
    </Form>
  )
}
