import React from "react";
import GlassItem from "./GlassItem";

const GlassList = ({ glasses, onChange, onSelect }) => {
   return (
      <div>
         <div className="w-75 row mx-auto py-3 bg-secondary">
            {glasses.map((glass) => {
               return (
								<div key={glass.id} className="col">
									<GlassItem glass={glass} onChange={onChange} onSelect={onSelect}/>
								</div>
							 );
            })}
         </div>
      </div>
   );
};

export default GlassList;
