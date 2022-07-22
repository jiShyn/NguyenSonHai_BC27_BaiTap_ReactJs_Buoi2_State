import React, { Component } from "react";
import data from "./dataGlasses.json";
import GlassList from "./GlassList";

export default class Main extends Component {
   constructor() {
      super();

      this.state = {
         imgUrl: null,
         selectedGlass: null,
         displayInfo: false,
      };
   }

   handleChangeGlass = (glass) => {
      const imgUrl = glass.url;
      this.setState({ imgUrl });
   };

   handleSelect = (glass) => {
      console.log(glass);
      this.setState({ selectedGlass: glass, displayInfo: true });
   };

   renderInfoGlass = () => {
      if (this.state.selectedGlass) {
         return (
            <div>
               <h1 className="text-center">{this.state.selectedGlass.name}</h1>
               <p>Price: {this.state.selectedGlass.price}$</p>
               <p>{this.state.selectedGlass.desc}</p>
            </div>
         );
      }
   };

   render() {
      return (
         <div className="container">
            <div className="banner">
               <h2 className="text-white bg-dark w-100">
                  TRY GLASS APP ONLINE
               </h2>
            </div>
            <div className="row mt-5">
               <div className="col-sm-12">
                  <div className="row">
                     <div className="col-sm-4 position-relative">
                        <img
                           src="/img/model.jpg"
                           alt="model"
                           width="300px"
                           height="400px"
                        />
                        <img
                           className="img position-absolute img-glass"
                           src={this.state.imgUrl}
                           width="170px"
                           height="80px"
                           alt=""
                        />
                     </div>

                     <div className="col-sm-4">{this.renderInfoGlass()}</div>

                     <div className="col-sm-4">
                        <img
                           src="/img/model.jpg"
                           alt="model"
                           width="300px"
                           height="400px"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-sm-12 mt-5">
                  <GlassList
                     glasses={data}
                     onChange={this.handleChangeGlass}
                     onSelect={this.handleSelect}
                  />
               </div>
            </div>
         </div>
      );
   }
}
