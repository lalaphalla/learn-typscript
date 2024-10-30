
import { type ReactNode } from 'react';

interface CourseGoalProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export default function Header({ image, children }: CourseGoalProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
