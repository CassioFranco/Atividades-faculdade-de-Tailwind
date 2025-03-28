import { FaUser, FaLock } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Input = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login realizado com sucesso!");

  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center text-white">
      <section className="flex w-[30rem] flex-col space-y-10 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center text-4xl font-medium text-gray-900">Login</div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <div className="flex items-center space-x-2 justify-between mr-4">
              <input
                type="text"
                placeholder="Email or Username"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
              <FaUser className="text-gray-400 ml-2" />
            </div>
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <div className="flex items-center space-x-2 justify-between mr-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
              <FaLock className="text-gray-400 ml-2"/>
            </div>
          </div>

          <button
            type="submit"
            className="w-full transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          >
            Entrar
          </button>
        </form>

        <a
          href="#"
          className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
        >
          Esqueceu a senha?
        </a>

        <p className="text-center text-gray-500 text-lg">
          Não tem conta?
          <a
            href="#"
            className="font-medium text-indigo-500 underline-offset-4 hover:underline"
          >
            Cadastrar-se
          </a>
        </p>
      </section>
      <ToastContainer />
    </main>
  );
};

export default Input;
