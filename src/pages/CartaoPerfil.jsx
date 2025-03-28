import React from "react";

const CartaoPerfil = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full shadow-lg rounded-xl mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full flex justify-center">
                            <div className="relative">
                                <img
                                    src="https://avatars.githubusercontent.com/u/160799907?v=4"
                                    alt="Perfil"
                                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                                />
                            </div>
                        </div>
                        <div className="w-full text-center mt-20">
                            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                <div className="p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                                        269
                                    </span>
                                    <span className="text-sm text-slate-400">Commits</span>
                                </div>
                                <div className="p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                                        37
                                    </span>
                                    <span className="text-sm text-slate-400">PRs</span>
                                </div>
                                <div className="p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                                        1
                                    </span>
                                    <span className="text-sm text-slate-400">Contributed to</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                            Cássio Franco
                        </h3>
                        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                            Guarapuava, Brasil
                        </div>
                    </div>
                    <div className="mt-6 py-6 border-t border-slate-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <p className="font-light leading-relaxed text-slate-600 mb-4">
                                    Sou Cássio Franco, atualmente tenho 22 anos. Curso Engenharia de Software pela Faculdade Campo Real, estou em busca de uma oportunidade profissional para que eu possa mostrar minhas habilidades e conhecimentos.
                                </p>
                                <a
                                    href="https://github.com/CassioFranco" target=""
                                    className="font-normal text-slate-700 hover:text-slate-400"
                                >
                                    Go to my github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartaoPerfil;
