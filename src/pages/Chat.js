import React, { useState } from "react";
import { apiKey } from "../data/Data";

export default function Chat() {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const callApi = async () => {
    const APIBody = {
      model: "text-davinci-003",
      prompt: value,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiKey,
        },
        body: JSON.stringify(APIBody),
      });
      if (response.ok) {
        const jsonResponse = await response.json(response);
        setAnswer(jsonResponse.choices[0].text);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="chat">
      <textarea
        name=""
        id=""
        rows="1"
        value={value}
        onChange={handleChange}
        placeholder="ask me a question"
      />
      <button onClick={callApi}>submit</button>
      <div className="answer">{answer !== "" ? <div>{answer}</div> : null}</div>
    </div>
  );
}
