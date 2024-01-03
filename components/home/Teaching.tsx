import courses from "./courses.json";

type Course = {
  href: string;
  title: string;
  content: string;
};

export const Teaching = () => {
  return (
    <>
      <h2>Docencia</h2>
      <div>
        <p>
          Asignaturas en las que he participado, en <a href="https://eseiaat.upc.edu">ESEIAAT</a>, 
          el <a href="https://citm.upc.edu">CITM</a>, y la <a href="https://fib.upc.edu">FIB</a>:
        </p>
        <ul className="courses">
          {(courses as Array<Course>).map((course) => (
            <li key={course.href} className="course">
              <a href={course.href}>{course.title}</a> 
              <span className="content">[{course.content}]</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
