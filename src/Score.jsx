import React from "react";

const Score = props => (
    <div>
        {props.students.map((s, idx) => (
            <div key = {"student" + idx}>
                {s.scores.map(score => (
                    <div>
                        Date:{score.date}
                        Score:{score.score}
                    </div>
                ))}
            </div>
        ))}
    </div>
);
export default Score;