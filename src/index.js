import React from "react";
import ReactDom from "react-dom";
import './index.css'
const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} 
      alt="person" />

      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="John" job="developer" />
      <Person img="26" name="Bob" job="designer" >
        <p>
          Lorem iusfd kdsu gff
        </p>
      </Person>
      <Person img="13" name="David" job="the boss" />
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
