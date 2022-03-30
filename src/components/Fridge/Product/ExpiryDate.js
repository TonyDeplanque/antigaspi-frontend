import react from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarXmark} from "@fortawesome/free-regular-svg-icons";
import date from "../../../lib/date";
import React from "react";
import './ExpiryDate.scss';

const relativeTime = require('dayjs/plugin/relativeTime')

const ExpiryDate = (props) => {
    const { expiryDate } = props;
    const formattedDate = date(expiryDate).format('DD/MM/YYYY');

    // NEED CACHE
    const now = date()
    date.extend(relativeTime)

    const diff = date(expiryDate).diff(now, 'days');
    const isExpired = diff < 0
    const isExpiredSoon = diff < 7
    const isGood = !isExpired && !isExpiredSoon;

    const getColor = () => {
        if (isExpired) {
            return 'red'
        }

        if (isExpiredSoon) {
            return 'orange'
        }

        return 'black'
    }

    const getStatus = () => {
        if (isExpired) {
            return 'expired'
        }

        if (isExpiredSoon) {
            return 'soon'
        }

        return 'good'
    }

    const getLabel = () => {
        if (isExpired) {
            return 'Périmé'
        }

        if (isExpiredSoon) {
            return 'Bientôt périmé'
        }

        return ''
    }

    return (
        <div className={'expiryDate expiryDate--'+getStatus()}>
            <div>
                <FontAwesomeIcon className="expiryDate__icon" color={getColor()} icon={faCalendarXmark} size="lg"/>
                <span>{ formattedDate }</span>
            </div>
            { !isGood && <div className="expiryDate__label">{ getLabel() }</div> }
        </div>
    )
}

export default ExpiryDate;