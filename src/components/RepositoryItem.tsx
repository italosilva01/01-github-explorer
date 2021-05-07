interface RepositoryItemProps {
  repository: {
    name: string;
    link: string;
    description: string;
  };
}
export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      dasd
      <a href={props.repository.link}>Acessar repositorio</a>
    </li>
  );
}
