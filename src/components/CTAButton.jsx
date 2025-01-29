/* eslint-disable react/prop-types */
import { ChevronsRight, ChevronsLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTAButton = ({ href, ctaText }) => {
    return (
        <Link to={href}
            className="text-link group relative inline-flex justify-center items-center transition-all duration-300 tracking-wide hover:tracking-wider  border-2 border-slate-500  p-2 rounded-lg"
        >
            <ChevronsLeft className="transition-all duration-300 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:-translate-x-1" />
            <span className="uppercase">{ctaText}</span>
            <ChevronsRight className="transition-all duration-300 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-1" />
        </Link>
    )
}

export default CTAButton