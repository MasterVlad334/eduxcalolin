export default function MenuBar() {
  return (
    <div className="flex h-[10dvh] justify-between items-center p-4 bg-transparent shadow-md text-white">
      <h1 className="text-2xl w-2/12">Love</h1>
      <ul className="flex gap-4 w-10/12 justify-center mr-64">
        <li className="hover:scale-105">
          <a href="/">Inicio</a>
        </li>
        <li className="hover:scale-105">
          <a href="/momentos">Momentos</a>
        </li>
        <li className="hover:scale-105">
          <a href="/amores">Nossos Amores</a>
        </li>
        <li className="hover:scale-105">
          <a href="/memorias">Memórias</a>
        </li>
        <li className="hover:scale-105">
          <a href="/futuro">Futuro</a>
        </li>
      </ul>
    </div>
  );
}
