import React from "react";
import "./style.css";
import { ListItem } from "../List";

const Books = ({
    title,
    authors,
    url,
    synopsis,
    image,
    Button
}) => {
    const truncateText = (str, length, ending) => {
        if (str) {
            if (length == null) {
                length = 100;
            }
            if (ending == null) {
                ending = "...";
            }
            if (str.length > length) {
                return str.substring(0, length - ending.length) + ending;
            } else {
                return str;
            }
        }
        return str;
    };

    const truncateDescription = truncateText(synopsis, 255, "...");

    return (
        <ListItem>
            <div className="media-snippet">
                <article className="media">
                    <figure className="media-left">
                        <p>
                            <img className="image is-128xauto" src={image} alt={title} />
                        </p>
                    </figure>
                    <div className="media-content">
                        <h3 className="heading-title">{title}</h3>
                        <p className="heading-authors">by {authors} (Author)</p>
                        <p className="p-books">{truncateDescription}</p>
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <a
                                    href={url}
                                    className="btn view-button heading-authors ml-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View
                </a>
                            </div>
                            <div className="p-2 bd-highlight">
                                <Button />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </ListItem>
    );
};

export default Books;