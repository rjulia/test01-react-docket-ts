import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'

function UseStateComponents() {
  type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
  };
  const [array, setArray] = useState<number[]>([])
  const [name, setName] = useState<string | null>(null)
  const [usersArray, setUsers] = useState<User[]>([])

  useEffect(() => {
    const users: User[] = []
    for (let i = 0; i < 20; i += 1) {
      const user: User = {
        id: i + 1,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        avatar: faker.image.url(),
      }
      users.push(user)
    }
    setUsers(users)
  }, [])

  return (
    <div className="max-w-[900px] m-auto pt-10">
      <h1 className="text-4xl font-bold mb-5">useState</h1>

      <button
        type="button"
        onClick={() => setArray([...array, array.length + 1])}
        className="btn btn-primary bg-red-500 p-2 mb-5"
      >
        Add Array
      </button>
      <ul>
        {
          array.map((item: number) => (
            <li key={item}>{usersArray[item].name}</li>
          ))
        }
      </ul>
      <button
        type="button"
        onClick={() => setName('jack')}
        className="btn btn-primary bg-red-500 p-2 mb-5"
      >
        Set name
      </button>
      <p>{name}</p>
      <div className="grid grid-cols-3 gap-4">
        {
          usersArray.map((user: User) => (
            <div key={user.id} className="flex items-center mb-5">
              <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full mr-5" />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-xs">{user.email}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default UseStateComponents
