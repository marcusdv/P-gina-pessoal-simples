import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen w-full bg-[linear-gradient(to_right,_#E6DACE_40%,_#ffffff_30%)] ">
            {/* quadrado */}
            <div className="flex flex-col md:flex-row items-center justify-center w-[80%] xl:w-[50%] shadow-[rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px]">
                <div className="flex flex-col items-center gap-4 py-10 bg-[#f8f1e9] w-full h-full">
                    <Image
                        className="rounded-full mx-auto"
                        src={'/eu-quadrado.jpg'}
                        alt="Minha foto"
                        width={200}
                        height={200}
                    />
                    <div className='text-center border-b border-blue-400 pb-4'>
                        <h2 className="text-4xl font-bold">Marcus</h2>
                        <h2 className="text-4xl font-bold">Costa</h2>
                    </div>
                    <p className='font-light '>DESENVOLVEDOR FRONTEND</p>
                </div>
                <div className="flex flex-col gap-4 py-8 px-16 h-full w-full bg-white">
                    <h1 className="text-8xl font-extrabold mb-4">Olá</h1>
                    <p className="">
                        Sou um desenvolvedor frontend apaixonado por criar
                        interfaces incríveis e funcionais.
                        <br />
                        <br />
                        Com experiência em tecnologias como HTML, CSS,
                        JavaScript, React e Next.js, estou sempre em busca de
                        melhorar a experiência do usuário e criar soluções
                        eficientes e responsivas.
                    </p>
                </div>
            </div>
        </div>
    );
}
