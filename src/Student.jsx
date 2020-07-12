import React from "react";
import Score from "./Score";

const Student = props => (
    <div>
        {props.students.map((s, idx) => (
            <div key = {"student" + idx}>
                <h4>{s.name}</h4>
                <p>{s.bio}</p>
                {s.scores.map(score => (
                    <div>
                        Date:{score.date}
                        <br></br>
                        Score:{score.score}
                        <br></br>
                    </div>
                ))}
            </div>
        ))}
    </div>
);

export default Student;