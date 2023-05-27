export const Icon = ({ icon, style }) => {
  return (
    <li className={style} >
      <img src={icon.path} alt={icon.alt} />
      <a href="##">{icon.link}</a>
    </li>
  );
};
