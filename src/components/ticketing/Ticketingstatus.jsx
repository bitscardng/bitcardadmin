import React from 'react'



const priority = [
  { id: "rad1", value: "urgent" },
  { id: "rad2", value: "medium" },
  { id: "rad3", value: "low" },
];
const status = [
  { id: "rad1", value: "urgent" },
  { id: "rad2", value: "medium" },
  { id: "rad3", value: "low" },
];



const Ticketingstatus = () => {
  return (
    <div>
        <div>
            <div>
                <h1>priority</h1>
            </div>
            <div><h1>status</h1></div>
        </div>
        <div></div>
    </div>
  )
}

export default Ticketingstatus