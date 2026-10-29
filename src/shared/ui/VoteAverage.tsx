import StarSvg from '@/shared/assets/icons/star.svg'
import clsx from "clsx";

interface VoteAverageProps {
  vote: number;
  className?: string;
  iconClass?:string
}

export const VoteAverage = ({vote, className, iconClass}: VoteAverageProps) => {
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <StarSvg className={clsx('shrink-0 text-orange-400', iconClass)} />
      <span>{vote.toFixed(1)}</span>
    </div>
  );
};
