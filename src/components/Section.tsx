import React from "react";
import { Button } from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll'

interface SectionProps {
  section: string,
  title: string,
  subtitle: string,
  dark: boolean,
  id: string
}


// const Intro = ({ title, subtitle, dark, id }) => (
//   <div className={"section" + (dark ? " section-dark" : "")}>
//     <div className="section-content" id={id}>
//       <h1>{title}</h1>
//       <p>{subtitle}</p>
//       <Link
//         activeClass="active"
//         to="secondDrug"
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={500}
//       >
//         <Button variant="contained" color="primary">Próximo</Button>
//       </Link>
//     </div>
//   </div>
// )

// const FirstDrug : React.FC<SectionProps> = ({ title, subtitle, dark, id }) => (
//   <div className={"section" + (dark ? " section-dark" : "")}>
//     <div className="section-content" id={id}>
//       <h1>{title}</h1>
//       <p>{subtitle}</p>
//       <Link
//         activeClass="active"
//         to="secondDrug"
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={500}
//       >
//         <Button variant="contained" color="primary">Próximo</Button>
//       </Link>
//     </div>
//   </div>
// )

// const SecondDrug : React.FC<SectionProps> = ({ title, subtitle, dark, id }) => (
//   <div className={"section" + (dark ? " section-dark" : "")}>
//     <div className="section-content" id={id}>
//       <h1>{title}</h1>
//       <p>{subtitle}</p>
//       <Link
//         activeClass="active"
//         to="section2"
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={500}
//       >
//         <Button variant="contained" color="primary">Próximo</Button>
//       </Link>
//     </div>
//   </div>
// )



const Section: React.FC<SectionProps> = ({ section, title, subtitle, dark, id }) => {
  let component
  return (
   <div>
   
   </div> 
  )
}

export default Section
