import { useState } from "react";

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Person) => {
  const [personBio, setPersonBio] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };

  return (
    <div>
      <>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>This person {props.isMarried}</p>
      </>
      <p>
        {" "}
        {props.name}Bio: {!personBio ? "no bio available" : personBio}{" "}
      </p>
      <input onChange={handleChange} />
    </div>
  );
};
