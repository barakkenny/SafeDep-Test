import Card from "./Card";

type Info = {
  id: number;
  source: string;
  desc: string;
}

const Hero = () => {
    const info:Info[] = [
    {
      id: 1,
      source: 'Analysed',
      desc: '24 Oct 2025, 10:06',
    },
    {
      id: 2,
      source: 'Source',
      desc: 'https://registry.npmjs.org/next/-/next-15.5.4tgz',
    },
    {
      id: 3,
      source: 'SHA256',
      desc: '5188d186e94a8d5470af6ed2725d209d8b2abc29cc7d6bedd58a748efd7e89f9',
    },
    {
      id: 4,
      source: 'Confidence',
      desc: '5188d186e94a8d5470af6ed2725d209d8b2abc29cc7d6bedd58a748efd7e89f9',
    },
  ]


  return (
    <div className='border border-light-500 bg-light-200 min-w-full py-2 mt-5 pl-4 pr-1 rounded'>
      <div className="flex items-center gap-1">
        33
        <h3 className="text-dark-800 font-medium text-[20px]">next@15.5.4</h3>
      </div>

      <div className="mt-2">
      {info.map(({id, source, desc}) => (
        <div key={id}>
          <h3 className="h3-medium leading-6">{source} <span className="text-[#020618] font-normal">{desc}</span></h3>
      </div>
      ))}
      </div>

      <div>
        <Card />
      </div>

    </div>
  )
}

export default Hero
