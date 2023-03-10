import React, { useState } from "react";
import { apiKey } from "../data/Data";
import { FaRegArrowAltCircleUp, FaUserAlt, FaBrain } from "react-icons/fa";

export default function Chat() {
  const [value, setValue] = useState("");
  const [conversations, setConversations] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleConversation = (e) => {
    conversations.splice(0, 0, e);
    setConversations([...conversations]);
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
        console.log(jsonResponse);
        const something = {
          id: jsonResponse.id,
          q: value,
          a: jsonResponse.choices[0].text,
        };
        handleConversation(something);
        setValue("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="chat">
      {/* <div className="answer">{answer !== "" ? <div>{answer}</div> : null}</div> */}
      <div className="conversation">
        {conversations.map((conversation) => {
          return (
            <div className="something" key={conversation.id}>
              <div className="question">{conversation.q}</div>
              <div className="answer">{conversation.a}</div>
            </div>
          );
        })}
      </div>
      <div className="chat-area">
        <textarea
          name=""
          id=""
          rows="1"
          value={value}
          onChange={handleChange}
          placeholder="ask me a question"
          style={{
            border: "none",
            padding: "0.5rem",
            background: "#343434",
            color: "white",
          }}
        />
        <button onClick={callApi}>
          <FaRegArrowAltCircleUp />
        </button>
      </div>
    </div>
  );
}
