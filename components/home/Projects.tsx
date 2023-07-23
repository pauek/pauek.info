export const Projects = () => {
  return (
    <>
      <h2>Proyectos</h2>
      <ul className="nobullet">
        <li>
          <a href="https://github.com/pauek/norvig-sudoku">
            Implementación en C++
          </a>{" "}
          del{" "}
          <a href="https://norvig.com/sudoku.html">
            solucionador de Sudokus de Peter Norvig
          </a>
        </li>
        <li>
          <a href="https://github.com/pauek/miniwin">MiniWin</a>, una librería
          de gráficos minimalista.
          <div className="comment">
            <a href="https://miniwin.readthedocs.org/en/latest/">
              Documentación
            </a>{" "}
            y ejemplos:{" "}
            <a href="https://youtu.be/hSUtZowDDYk">pelotita con gravedad</a>,{" "}
            <a href="https://www.youtube.com/playlist?list=PLBF37E6885CD3A358">
              Tetris
            </a>
            ,{" "}
            <a href="https://www.youtube.com/playlist?list=PLDD6B727E5B6B5E33">
              Asteroids
            </a>
            .
          </div>
        </li>
        <li>
          <a href="https://github.com/pauek/minicc">MiniCC</a>, un intérprete de
          C++ para usos pedagógicos.
        </li>
        <li>
          <a href="https://github.com/pauek/Kwidgin">Kwidgin</a>, generador de
          preguntas de test permutadas.
        </li>
        <li>
          <a href="https://github.com/pauek/SpeakerFeedback">SpeakerFeedback</a>
          , una <i>app</i> Android para votación de preguntas a un
          conferenciante, usando Firebase.
        </li>
        <li>
          <a href="https://github.com/pauek/Ejemplos-Android">
            Ejemplos Android
          </a>
          , respositorio con aplicaciones Android de ejemplo.
        </li>
        <li>
          <a href="https://github.com/pauek/garzon">Garzón</a>, un juez para
          problemas de programación.
        </li>
        <li>
          <a href="https://github.com/pauek/CodeBoard">CodeBoard</a>, una
          pizarra de código fuente en tiempo real.
        </li>
        <li>
          <a href="https://github.com/pauek/arc-sbcl">arc-sbcl</a>,{" "}
          <a href="https://arclanguage.org">arc</a> implementado en{" "}
          <a href="https://www.sbcl.org/">SBCL</a>.
        </li>
      </ul>
    </>
  );
};
