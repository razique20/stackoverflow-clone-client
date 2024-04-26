import React from "react";
import pen from "../../assets/pen.svg";
import message from "../../assets/message.svg"
import blackLogo from "../../assets/blackLogo.svg"
import "./RightSidebar.css";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The overflow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            Observability is the key to the future of software(and your Devops
            career)
          </p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            Podcast 324 How Valuable is your screen name?
          </p>
        </div>
      </div>


      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={message} alt="pen" width="18" />
          <p>
            Review queue workflows-Final Release
          </p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={message} alt="pen" width="18" />
          <p>
            Please welcome Valued Associates:#958 <br />
            -V2Blast #959 - SpencerG
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18" />
          <p>
            Outdated Answers:accepted answer is <br />
            now unpinned on Stack Overflow
          </p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>
           Why was this spam flag declined,yet <br />
           the question marked as spam?
          </p>
        </div>

        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
           What is the best course of action when <br />
                a user has high enough rep to..
              </p>
        </div>

        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>
            Is a link to the "How to ask" help page a <br />
            usefull comment?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
