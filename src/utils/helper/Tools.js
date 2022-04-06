import { Style, ImgStyle } from "../tools"

class Tools {

    static Form = () => {}
    
    static Input = ({ type, name, className, id=null, value=null, placeholder=null }) => {
        return (
            <input 
                type={type}
                name={name}
                value={value} 
                className={className}
                id={id}
                placeholder={placeholder}
            />
        )
    }
    
    static Button = ({ type, name, value, className=null, id=null }) => {
        return (
            <button
                type={type}
                name={name}
                className={className}
                id={id}
            >
                {value}
            </button>
        )
    }
    
    static Select = ({ name, key, value, className, id }) => {
        return (
            <select 
                name={name} 
                className={className} 
                id={id}
            >
                <option key={key}>{value}</option>
            </select>
        )
    }
    
    static TextArea = ({ name, value, className=null, id=null }) => {
        return (
            <textArea 
                name={name} 
                className={className} 
                id={id}
            >
                {value}
            </textArea>
        )
    }
    
    static Label = ({ htmlFor, value }) => {
        return (
            <label htmlFor={htmlFor} style={Style}>{value}</label>
        )
    }
    
    static Table = () => {}
    
    static THead = () => {}
    
    static TBody = () => {}
    
    static Th = ({ className, value }) => {
        return (
            <th className={className}>{value}</th>
        )
    }
    
    static Td = ({ className, value }) => {
        return (
            <td className={className}>{value}</td>
        )
    }
    
    static Tr = ({ className, value }) => {
        return (
            <tr className={className}>{value}</tr>
        )
    }
    
    static Img = ({ width, height, className, value }) => {
        return (
            <img width={width} height={height} className={className} src={value} style={ImgStyle} />
        )
    }
}

export default Tools;