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
          Asignaturas en las que he participado, tanto en{" "}
          <a href="https://eseiaat.upc.edu">ESEIAAT</a> como en el{" "}
          <a href="https://citm.upc.edu">CITM</a>:
        </p>
        <ul className="courses">
          {(courses as Array<Course>).map((course) => (
            <li key={course.href}>
              <a href={course.href}>{course.title}</a> ({course.content})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};