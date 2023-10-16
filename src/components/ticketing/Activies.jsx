import React from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { useGetTicketsQuery } from "../../api/ticketingQueries";
import TicketingTable from "./TicketingTable";

const shortenText = (text, n) => {
  if (text.length > n) {
    const shortenedText = text.substring(0, n).concat(" ...");
    return shortenedText;
  }
  return text;
};

const datas = [
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
  {
    user: "John Doe",
    email:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nemo error beatae veniam ducimus deserunt dolores iusto accusamus alias porro. Quisquam quo laudantium autem explicabo nesciunt quasi ducimus reiciendis ex!",
  },
];

const Activies = ({ user, email }) => {
  const { data, isLoading } = useGetTicketsQuery();
  return (
    <TicketingTable />
    // <div>
    //   <table className="w-full mt-2">
    //     {/* head */}
    //     <thead className="">
    //       <tr className="rounded-full bg-primary">
    //         <th className="p-2 text-xl font-semibold capitalize border"></th>
    //         <th className="p-2 text-xl font-semibold capitalize border">
    //           Users
    //         </th>
    //         <th className="p-2 text-xl font-semibold capitalize border">
    //           All activies
    //         </th>
    //         <th className="p-2 text-xl font-semibold capitalize border"></th>
    //       </tr>
    //     </thead>
    //     <tbody className="">
    //       {data?.data.map((data, index) => {
    //         const { user, email } = data;
    //         return (
    //           <tr className="text-center hover:bg-primary">
    //             <th className="p-1 px-2 text-xl duration-500 border">
    //               {index + 1}
    //             </th>
    //             <td className="p-1 px-2 text-xl font-thin duration-500 border">
    //               {user}
    //             </td>
    //             <td className="p-1 px-2 text-xl font-thin duration-500 border">
    //               {shortenText(email, 70)}
    //             </td>
    //             <td className="p-1 text-xl font-thin duration-500 border">
    //               <Link to="/ticketing-details" className="m-0">
    //                 <p className={`${styles.btn} my-0`}>Open</p>
    //               </Link>
    //             </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default Activies;
