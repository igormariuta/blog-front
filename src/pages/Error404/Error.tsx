import { EmojiFrown } from "react-bootstrap-icons";

function Error404() {
  return (
    <div className="container-sm">
      <div className="d-flex flex-column align-items-center">
        <h2 className="d-flex align-items-center">
          <EmojiFrown className="me-2" size={25} />
          Ошибка 404
        </h2>
        <p>
          К сожалению, запрашиваемая страница не найдена, но есть другие, тоже
          хорошие
        </p>
      </div>
    </div>
  );
}

export default Error404;
