import React from 'react';
import classnames from "classnames";

const TextFieldGroup = (props) => {
    return (
        <div className="form-group">
            <textarea
                className={classnames("form-control form-control-lg", {
                    'is-invalid': props.error
                })}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            {props.info && <small className={'form-text text-muted'}>{props.info}</small>}
            {props.error && (<div className={'invalid-feedback'}>{props.error}</div>)}
        </div>
    )
};

export default TextFieldGroup;