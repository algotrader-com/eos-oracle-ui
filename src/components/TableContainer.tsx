import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { securityTypesMap } from "../constants/securityTypesMap";
import Table from "./Table";
import './TableContainer.css';



export default function TableContainer(props: RouteComponentProps) {
    const [securityType, setSecurityType] = useState(props.match.path.substr(1));
    useEffect(() => {
        setSecurityType(props.match.path.substr(1));
    }, [props.match.path])

    return (
        <div className='container'>
            <h3 className='subtitle' >{securityTypesMap[securityType as keyof typeof securityTypesMap].name}</h3>
            <Table securityType={securityType} />
        </div >
    );
}