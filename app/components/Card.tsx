import {Info, Bug, NotebookTabs, CircleStar, Globe} from 'lucide-react'
import { ReactNode } from "react";

type Resource = {
    id: number,
    icon: ReactNode,
    context: string;
    rate: string | number;
    highlight?: boolean;
    iconColor: string;
}

const Card = () => {
    const details: Resource[] = [
        {
            id:   1,
            icon: <Info />,
            context: 'Version',
            rate: '1.2.4',
            iconColor: "text-dark-500",
        },
        {
            id:   2,
            icon: <Bug />,
            context: 'Vulnerabilities',
            rate: 5,
            iconColor: "text-[#C10007]",
        },
        {
            id:   3,
            icon: <NotebookTabs />,
            context: 'OpenSSF Scorecard',
            rate: '9.5/10',
            iconColor: "text-dark-500",
        },
        {
            id:   4,
            icon: <CircleStar />,
            context: 'License',
            rate: 'Apache-2.0',
            highlight: true,
            iconColor: "text-dark-500",
        },

        {
            id:   5,
            icon: <Globe />,
            context: 'Ecosystem',
            rate: 'Go',
            iconColor: "text-dark-500",
        },
    ]
  return (
    <div className=" mt-4 flex items-center gap-3">
      {details.map(({id, icon, context, rate}) => (
        <div key={id} className="card">
            <div className="flex items-center gap-3">
                <h3 className={`text-${iconColor}
                    border p-1 rounded border-light-500 text-[12px]`}>{icon}</h3>
                <h3 className="text-light-400">{context}</h3>
            </div>
            <h1 className={`mt-5  ${
        context === "OpenSSF Scorecard"
          ? "text-dark-500"
          : "text-black"
      }`}>{rate}</h1>
        </div>
      ))}
    </div>
  )
}

export default Card
 