import { intervalToDuration, isValid } from 'date-fns';

const optimalNumberOfGrids = 8;

const gridSnappingPoints: Duration[] = [
  { months: 1 },
  // { months: 2 },
  // { months: 6 },
];

const toMonths = (duration: Duration): Duration => ({
  ...duration,
  months: (duration.months || 0) + (duration.years || 0) * 12,
});

const isBetter = (points: number, otherPoints: number): boolean => {
  if (points == 0 && otherPoints != 0) return true;
  return (
    Math.abs(optimalNumberOfGrids - otherPoints) <
    Math.abs(optimalNumberOfGrids - points)
  );
};
export const monthDivide = (
  duration: Duration,
  gridDuration: Duration
): number => {
  const monthDuration = toMonths(duration);
  return Math.ceil((monthDuration.months || 0) / (gridDuration?.months || 1));
};

const bestGrid = (duration: Duration): Duration => {
  const best = gridSnappingPoints.reduce(
    (currentBest, nextSnapCandidate) => {
      const points = monthDivide(duration, nextSnapCandidate);
      return isBetter(currentBest.points, points)
        ? { duration: nextSnapCandidate, points }
        : currentBest;
    },
    {
      duration: { months: 0 } as Duration,
      points: 0,
    }
  );
  return best.duration;
};

export const getGridSize = (start: Date, end: Date): Duration => {
  if (!isValid(start) || !isValid(end)) return { months: 0 };
  const duration = intervalToDuration({ start, end });
  const gridSize = bestGrid(duration);
  return gridSize;
};
