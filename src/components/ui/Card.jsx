import { Spot } from "../fx";

export const Card = ({ children, className = "", tilt }) => <Spot tilt={tilt} className={`rounded-2xl border border-line bg-surface/70 p-5 sm:p-6 ${className}`}>{children}</Spot>;
