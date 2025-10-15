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
import { authClient} from '@/lib/auth-client'
import { cn } from '@/lib/utils'

const loginSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Email is invalid'),
    password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
})
type LoginFormValues = z.infer<typeof loginSchema>
export function LoginForm() {
    const router = useRouter()
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })
    const onSubmit = async (data: LoginFormValues) => {
        await authClient.signIn.email({
            email: data.email,
            password: data.password,
        }
    ,{
        onSuccess: () => {
            toast.success('Logged in successfully');
            router.push('/');
        },
        onError: (ctx) => {
            toast.error(ctx.error.message);
        }
    });
    };
    const isPending = form.formState.isSubmitting
    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className='text-center'>
                    <CardTitle>Welcome back!</CardTitle>
                    <CardDescription>Sign in to your account</CardDescription>
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
                                  <Button type='submit' disabled={isPending}>Login</Button>
                                </div>
                                <div className="text-sm text-muted-foreground text-center">
                                    Don&apos;t have an account?{' '}
                                    <Link
                                        href="/sign-up"
                                        className="font-medium text-primary underline"
                                    >
                                        Sign up
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
