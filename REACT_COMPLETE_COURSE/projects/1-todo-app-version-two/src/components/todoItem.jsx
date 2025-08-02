function TodoItem({todoname, tododate}) {
  
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-5 item-container">{todoname}</div>
        <div className="col-4 item-container">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
