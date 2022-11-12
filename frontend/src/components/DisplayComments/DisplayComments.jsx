// const DisplayComments = (props) => {
//   // destructuring data: ({songs}) instead of props

//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           {/* <th>Entry Number</th> */}
//           <th>Comments</th>
//         </tr>
//       </thead>
//       <tbody>
//         {props.parentDisplayComments.map((comment, index) => {
//           // destructuring data: {songs.map((song) =>....rest of table)} then don't need "props."
//           return (
//             <tr>
//               {/* <td>{index + 1}</td> */}
//               <td>{comment.text}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default DisplayComments;
