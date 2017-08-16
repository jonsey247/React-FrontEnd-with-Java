import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const TvCard = function (props) {
    return (
        <div className='box'>
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <Link to={'/tvs/' + props.tv_id}>
                            <h2 className="title is-3">{props.model}</h2>
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

TvCard.propTypes = {
    model: PropTypes.string.isRequired,
    tv_id: PropTypes.number.isRequired
};

export default TvCard;