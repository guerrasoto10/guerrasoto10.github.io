import React from "react"


export default (props) => (
    <li className="flex items-center">
        <div className="flex-1">
            <h4 className="text-gray-800 font-bold"> <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">{props.repo.name}</a></h4>
            <p className="text-sm text-gray-700 overflow-y-hidden" style={{height:"1.5em"}}>{props.repo.description}</p>
        </div>
    </li>
    );