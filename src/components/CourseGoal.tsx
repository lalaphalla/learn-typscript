//{title, description} javascript desrtucturing

import { FC, type PropsWithChildren } from 'react';

// type CourseGoalProps = {
//   title: string;
//   description: string;
// };
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode
// }
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

const CourseGoal: FC<CourseGoalProps> = ({ id, title, onDelete, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};
export default CourseGoal;
