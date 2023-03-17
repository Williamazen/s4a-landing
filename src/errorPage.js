import { useRouteError } from "react-router-dom";
import "./reset.css";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div style={{
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "justify-content": "center",
            "width": "100%",
            "height": "100vh",
            "gap": "16px",

        }}
        >

            <h1>Oops!</h1>
            <p>It looks like you found an error!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}