import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/auth/login')({
    component: RouteComponent,
})

function RouteComponent() {
    return <main className="w-screen h-screen flex justify-center items-center">
        <section className='bg-red-300 w-52 h-72'></section>
        <div></div>
        <div style={{
            backgroundImage: 'images/logo.png',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}></div>
    </main>
}