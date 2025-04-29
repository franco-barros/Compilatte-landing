export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Compilatte. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
