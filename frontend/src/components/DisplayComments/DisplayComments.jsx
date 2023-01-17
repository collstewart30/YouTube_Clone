const DisplayComments = (props) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="text-muted" style={{ margin: "1em" }}>COMMENTS</th>
          <th className="text-muted" style={{ margin: "1em" }}>USER</th>
        </tr>
      </thead>
      <tbody>
        {props.parentDisplayComments.map((comment, index) => {
          return (
            <tr>
              {/* <td>{index + 1}</td> */}
              <td>{comment.text}</td>
              <td>{comment.user_id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayComments;
