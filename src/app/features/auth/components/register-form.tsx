"use client"
import {zodResolver} from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
//import { authClient} from '@/lib/auth-client'
import { cn } from '@/lib/utils'
import { authClient } from '@/lib/auth-client'

const registerSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Email is invalid'),
    password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(1, 'Confirm Password is required'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
})
type RegisterFormValues = z.infer<typeof registerSchema>
export function RegisterForm() {
    const router = useRouter()
    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    })
    const onSubmit = async (data: RegisterFormValues) => {
        await authClient.signUp.email({
            name: data.email.split('@')[0],
            email: data.email,
            password: data.password,
            callbackURL: `${window.location.origin}/`,
        },
        {
            onSuccess: () => {
                toast.success('Account created successfully');
                router.push('/');
            },
            onError: (ctx) => {
                toast.error(ctx.error.message || 'Something went wrong');
            }
        })
    };
    const isPending = form.formState.isSubmitting
    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className='text-center'>
                    <CardTitle>Get Started!</CardTitle>
                    <CardDescription>Sign up for a new account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid gap-6"> 
                                <div className="flex flex-col gap-4">
                                    <Button 
                                    variant={'outline'}
                                    className={cn('w-full')}
                                    type='button'
                                    disabled={isPending}
                                    >
                                        Continue with Github
                                    </Button>
                                    <Button 
                                    variant={'outline'}
                                    className={cn('w-full')}
                                    type='button'
                                    disabled={isPending}
                                    >
                                        Continue with Google
                                    </Button>
                                </div>
                                <div className="grid items-center gap-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input type='email' 
                                                    placeholder="Enter your email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type='password' 
                                                    placeholder="*********" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem className='w-full'>
                                                <FormLabel>Confirm Password</FormLabel>
                                                <FormControl>
                                                    <Input type='password' 
                                                    placeholder="*********" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                  <Button type='submit' disabled={isPending}>Sign Up</Button>
                                </div>
                                <div className="text-sm text-muted-foreground text-center">
                                    Already have an account?{' '}
                                    <Link
                                        href="/sign-in"
                                        className="font-medium text-primary underline"
                                    >
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
