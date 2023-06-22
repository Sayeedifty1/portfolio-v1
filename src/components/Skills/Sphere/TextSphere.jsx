import { useEffect } from "react";

import "./TextSphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "NPM",
        "VERCEL",
        "NETLIFY",
        "FIREBASE",
        "MONGODB",
        "MYSQL",
        "EXPRESS",
        "TAILWIND",
        "MATERIAL UI",
        "BOOTSTRAP",
        "SURGE",

        "VSCODE",
        "CODEPEN",
        "STACKOVERFLOW",
        "REACT ROUTER",
        "REACT HOOKS",
        "REACT CONTEXT",
        "REACT REDUX",
        "REACT NATIVE",
        "NEXT JS",

      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
