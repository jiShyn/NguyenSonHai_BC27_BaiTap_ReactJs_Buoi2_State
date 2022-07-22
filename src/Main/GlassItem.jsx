import React from "react";

const GlassItem = ({ glass, onChange, onSelect }) => {
   return (
      <div>
         <img
            src={glass.url}
            alt={glass.name}
            width="50px"
            height="35px"
            onClick={() => {
               onSelect(glass);
               onChange(glass);
            }}
         />
      </div>
   );
};

export default GlassItem;
