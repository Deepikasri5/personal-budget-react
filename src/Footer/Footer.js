import React from "react";

function Footer() {
  return (
    <footer id = "foot" className="bottom">
        <div className="center">
            All rights reserved &copy; Deepika Sri
        </div>
        <div id = "git">
            <a role= "link" href="http://github.com/deepikasri5">
                <button >Github <i className="fa fa-github"></i></button>
            </a>
        </div>
    </footer>
  );
}

export default Footer;