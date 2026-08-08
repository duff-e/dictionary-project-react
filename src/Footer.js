export default function Footer() {
  return (
    <div className="p-4">
      <hr />
      <div className="footer text-center m-5">
        Coded by{" "}
        <a href="https://github.com/duff-e" target="_blank" rel="noreferrer">
          {" "}
          Elise Duffy
        </a>{" "}
        is open sourced by{" "}
        <a
          href="https://github.com/duff-e/dictionary-project-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://lovely-tanuki-e192fc.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>{" "}
      </div>
    </div>
  );
}
