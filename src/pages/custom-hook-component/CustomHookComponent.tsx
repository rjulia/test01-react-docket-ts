import React, { useState, useEffect, useMemo } from "react"

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData<Payload>(
  url: string
): {
  data: Payload | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Payload | null>(null)
  const [done, doneSet] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        dataSet(d)
        doneSet(true)
      })
  }, [url])

  return {
    data,
    done,
  }
}

function CustomHookComponent() {
  const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json")
  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  )

  if (!done) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full m-auto p-10">
      <div className="m-auto grid grid-cols-2 sm:grid-cols-3   gap-5">
        {portlandTaps.length && portlandTaps.map((bev) => (
          
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={bev.name +bev.beverageName}>
            <div className="flex items-center justify-center p-4">
              <img className="w-full rounded-t-lg" src={bev.logo} alt="Sunset in the mountains"/>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"> <h2>{bev.name}</h2></div>
              <p>{bev.producerName}</p>
              <p className="text-gray-700 text-base">{bev.beverageName}</p>
              <div className="flex flex-row justify-start items-center">
                <p className="text-gray-700 text-base mr-2">color: 
                </p>
                <div 
                  style={{backgroundColor: bev.beverageColor}}
                  className="h-4 w-4 ">
                </div>
              </div>
              <p className="text-gray-700 text-base">{bev.beverageStyle}</p>
              <p className="text-gray-700 text-base">{bev.producerLocation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomHookComponent