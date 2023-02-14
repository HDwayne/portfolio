import Button from "../Button";

import data from "../../data/portfolio.json";

const Socials = ({ classes }) => {
  return (
    <div className={`${classes} flex flex-wrap link`}>
      {data.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => window.open(social.link)}
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
