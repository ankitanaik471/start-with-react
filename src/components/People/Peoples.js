import React from "react";
import People from "./People";

const people = [
    {
      id: 'p_1',
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 'p_2',
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 'p_3',
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]


const Peoples = () => {
    return <ul>
                {people.map((p) => (
                    <li key={p.id} className="py-4">
                        <People name={p.name} email={p.email} image={p.image} />
                    </li>
                ))}
                
            </ul>
}

export default Peoples;