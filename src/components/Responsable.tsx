import React from "react";

interface ResponsableProps {
  pc?: React.ReactNode;
  tablet?: React.ReactNode;
  mobile?: React.ReactNode;
}

const Responsable: React.FC<ResponsableProps> = ({ pc, tablet, mobile }) => {
  return (
    <>
      <div className="1200px:block 780px:hidden 560px:hidden 360px:hidden  max-360px:hidden">
        {pc}
      </div>
      <div className="1200px:hidden 780px:block 560px:hidden 360px:hidden max-360px:hidden">
        {tablet}
      </div>
      <div className="1200px:hidden 780px:hidden 560px:block 360px:hidden  max-360px:hidden">
        {mobile}
      </div>
      <div className="1200px:hidden 780px:hidden 560px:hidden 360px:block  max-360px:block">
        {mobile}
      </div>
    </>
  );
};

export default Responsable;
