import { useEffect, useState } from "react";
import { ancestors } from "../data";
import Modal from "./Modal";

export default function Carousel() {

  const [active, setActive] = useState(0);

  const [selected, setSelected] = useState(null);


  useEffect(() => {

    if (selected) return;

    const interval = setInterval(() => {

      setActive(prev =>
        (prev + 1) % ancestors.length
      );

    }, 2000);

    return () => clearInterval(interval);

  }, [selected]);


  function getPosition(index) {

    const total = ancestors.length;

    const diff =
      (index - active + total) % total;


    if (diff === 0)
      return "center";

    if (diff === 1)
      return "right";

    if (diff === total - 1)
      return "left";

    if (diff === 2)
      return "far-right";

    if (diff === total - 2)
      return "far-left";

    return "hidden";
  }


  return (

    <>
      <div className="carousel">

        {ancestors.map((person, index) => {

          const position = getPosition(index);

          return (

            <div
              key={person.id}
              className={`card ${position}`}

              onClick={() => setSelected(person)}
            >

              <img src={person.image} />

              <div className="card-info">

                <h3>{person.name}</h3>

                <p>{person.relation}</p>

                <p>Nascimento: {person.birth}</p>

              </div>

            </div>

          );

        })}

      </div>


      <Modal
        person={selected}
        onClose={() => setSelected(null)}
      />

    </>

  );
}
