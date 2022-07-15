import React, { Component } from "react";

export default class Main extends Component {
   constructor() {
      super();

      this.state = {
         imgUrl: '/img/v1.png',
      };
   }

   changeGlass = (code) => {
      const imgUrl = `/img/${code}.png`;
      this.setState({ imgUrl });
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
                     <div className="col-sm-6 position-relative">
                        <img
                           src="/img/model.jpg"
                           alt="model"
                           width="300px"
                           height="400px"
                        />
                        <img
                           className="img position-absolute"
                           src={this.state.imgUrl}
                           width="170px"
                           height="80px"
                           alt=""
                        />
                     </div>
                     <div className="col-sm-6">
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
                  <div className="w-75 row mx-auto py-3 bg-secondary">
                     <div className="col">
                        <img
                           src="/img/g1.jpg"
                           alt=""
                           width="50px"
                           height="35px"
													 onClick={() => this.changeGlass('v1')}
                        />
                     </div>
                     <div className="col">
                        <img
                           src="/img/g2.jpg"
                           alt=""
                           width="50px"
                           height="35px"
													 onClick={() => this.changeGlass('v2')}
                        />
                     </div>
                     <div className="col">
                        <img
                           src="/img/g3.jpg"
                           alt=""
                           width="50px"
                           height="35px"
													 onClick={() => this.changeGlass('v3')}
                        />
                     </div>
                     <div className="col">
                        <img
                           src="/img/g4.jpg"
                           alt=""
                           width="50px"
                           height="35px"
													 onClick={() => this.changeGlass('v4')}

                        />
                     </div>
                     <div className="col">
                        <img
                           src="/img/g5.jpg"
                           alt=""
                           width="50px"
                           height="35px"
													 onClick={() => this.changeGlass('v5')}

                        />
                     </div>
                     <div className="col">
                        <img
                           src="/img/g6.jpg"
                           alt=""
                           width="50px"
                           height="35px"
													 onClick={() => this.changeGlass('v6')}

                        />
                     </div>
                     <div className="col">
                        <img
                           src="/img/g7.jpg"
                           alt=""
                           width="50px"
                           height="35px"
													 onClick={() => this.changeGlass('v7')}

                        />
                     </div>
                     <div className="col">
                        <img
                           src="/img/g8.jpg"
                           alt=""
                           width="50px"
                           height="35px"
													 onClick={() => this.changeGlass('v8')}

                        />
                     </div>
                     <div className="col">
                        <img
                           src="/img/g9.jpg"
                           alt=""
                           width="50px"
                           height="35px"
													 onClick={() => this.changeGlass('v9')}

                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
