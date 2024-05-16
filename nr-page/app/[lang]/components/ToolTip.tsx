import React from "react";

interface ToolTipProps{
    text:string;
    children: React.ReactNode;

}

const ToolTip : React.FC<ToolTipProps> = ( {text , children} ) =>{
    return (  
        <picture>

            {children}
            <div role="tooltip" className="tool-tip p-2 bg-white text-black">
                {text}
            </div>
        </picture>
    );
}

export default ToolTip;