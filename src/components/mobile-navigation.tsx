import Link from 'next/link';
import { Home, LogIn, LogOut, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { auth, signIn, signOut } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export async function MobileNavigation() {
  const session = await auth();

  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
          <span className="sr-only">Open main menu</span>
        </SheetTrigger>
        <SheetContent className="w-screen p-0 overflow-auto scrollbar-none">
          <div className="flex justify-between sticky p-4 top-0 z-50 w-full border-b border-border/40 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/90">
            <SheetClose asChild>
              <Link href="/" className="shrink-0">
                <Home />
              </Link>
            </SheetClose>
            <SheetClose>
              <X />
            </SheetClose>
          </div>
          <div className="flex flex-col items-end space-y-1 w-full p-4">
            <SheetClose asChild>
              <Link
                href="/"
                className={cn(buttonVariants({ variant: 'link' }), 'pr-0')}
              >
                Home
              </Link>
            </SheetClose>
            {session?.user ? (
              <>
                <div className="flex items-center gap-x-2 text-sm font-medium">
                  <Avatar>
                    {session.user.image && (
                      <AvatarImage src={session.user.image} />
                    )}
                    <AvatarFallback>
                      {session.user.name?.substring(0, 1)}
                    </AvatarFallback>
                  </Avatar>

                  {`${session.user.name} (${session.user.email})`}
                </div>
                <form
                  action={async () => {
                    'use server';
                    await signOut();
                  }}
                >
                  <Button type="submit" variant="link" className="pr-0">
                    Sign Out <LogOut />
                  </Button>
                </form>
              </>
            ) : (
              <form
                action={async () => {
                  'use server';
                  await signIn('github');
                }}
              >
                <Button type="submit" variant="link" className="pr-0">
                  Sign in <LogIn />
                </Button>
              </form>
            )}
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
  //   <div className="flex lg:hidden">
  //     <Sheet>
  //       <SheetTrigger asChild>
  //         <button
  //           type="button"
  //           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
  //           // onClick={() => setMobileMenuOpen(true)}
  //         >
  //           <span className="sr-only">Open main menu</span>
  //           <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  //         </button>
  //       </SheetTrigger>
  //       <SheetContent>
  //         {/* <Dialog
  //         as="div"
  //         className="lg:hidden"
  //         open={mobileMenuOpen}
  //         onClose={setMobileMenuOpen}
  //       > */}
  //         <div className="fixed inset-0 z-10" />
  //         <div className="flex items-center justify-between">
  //           <a href="/" className="-m-1.5 p-1.5">
  //             <span className="sr-only">hack</span>
  //             <Logo className="h-8 w-auto pr-16" />
  //           </a>
  //           {/* <button
  //             type="button"
  //             className="-m-2.5 rounded-md p-2.5 text-gray-700"
  //             onClick={() => setMobileMenuOpen(false)}
  //           >
  //             <span className="sr-only">Close menu</span>
  //             <XMarkIcon className="h-6 w-6" aria-hidden="true" />
  //           </button> */}
  //         </div>
  //         <div className="mt-6 flow-root">
  //           <div className="-my-6 divide-y divide-gray-500/10">
  //             <div className="space-y-2 py-6">
  //

  //               {/* <Disclosure as="div" className="-mx-3">
  //                 {({ open }) => (
  //                   <>
  //                     <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
  //                       Services
  //                       <ChevronDownIcon
  //                         className={` ${
  //                           open ? 'rotate-180' : ''
  //                         } h-5 w-5 flex-none`}
  //                         aria-hidden="true"
  //                       />
  //                     </Disclosure.Button>
  //                     <Disclosure.Panel className="mt-2 space-y-2">
  //                       {[...SERVICES, ...CALLS_TO_ACTION].map((item) => (
  //                         <Disclosure.Button
  //                           key={item.name}
  //                           as="a"
  //                           href={item.href}
  //                           className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  //                         >
  //                           {item.name}
  //                         </Disclosure.Button>
  //                       ))}
  //                     </Disclosure.Panel>
  //                   </>
  //                 )}
  //               </Disclosure> */}

  //             </div>
  //           </div>
  //         </div>
  //       </SheetContent>
  //     </Sheet>
  //   </div>
  // );
}
