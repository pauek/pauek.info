import { Blog, Codigo, Educacion, Docencia, Presentacion, Publicaciones } from '../components';

export default function Home() {
  return (
    <div id="content">
      <Presentacion />
      <Docencia />
      <Educacion />
      <Blog />
      <Codigo />
      <Publicaciones />
    </div>
  );
}
