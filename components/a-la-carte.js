import React, {Component} from 'react';
import Buy_Button from './buy-button'
import Fade from 'react-reveal/Fade'

class AlaCarte extends Component {
    constructor(){
        super();
        this.state= {
            list: [
                {
                    id: 1,
                    adTitle: "Stovetop Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                    price: '$29.99',
                    per: 'hour'
                },
                {
                    id: 2,
                    adTitle: "Wash Dishes",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                    price: '$15.99',
                    per: 'hour'
                },
                {
                    id: 3,
                    adTitle: "Vent Degreasing",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                    price: '$79.99',
                    per: 'week'
                },
                {
                    id: 4,
                    adTitle: "Trash Removal",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                    price: '$15.99',
                    per: 'hour'
                },
                {
                    id: 5,
                    adTitle: "Laundry/Wash/Fold",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                    price: '$15.99',
                    per: 'hour'
                },
                {
                    id: 6,
                    adTitle: "Baseboard Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                    price: '$15.99',
                    per: 'hour'
                },
                {
                    id: 7,
                    adTitle: "Carpet Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                    price: '$15.99',
                    per: 'hour'
                },
                {
                    id: 8,
                    adTitle: "Window Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                    price: '$15.99',
                    per: 'hour'
                },
                {
                    id: 9,
                    adTitle: "Appliance Cleaning",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                    price: '$15.99',
                    per: 'hour'
                },
                {
                    id: 10,
                    adTitle: "Pet Reset Package",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                    price: '$49.99',
                    per: 'day'
                }
            ]
        }
    }
    render(){
        return(
<>

   
<Fade bottom>
          <div className=" text-center">
              <h2 className="wow fadeInUp mt-6 body-color mb-6 display-4 bison-bold" data-wow-delay="0.2s">
              <span className="sacramento">Looking for something else?</span> <br /> Check out our individual services!</h2>                
            </div>
    </Fade>
             
                <div className="container mx-auto">
                    <div className="row">
                        {
                            this.state.list.map( list => {

return(

<div className="col-lg-3">
<div className=" mb-3 margin-auto price_content price_content_two">
    <Fade bottom>
       <div className="pr_list " key={list.id}>
                         <div className="price_item">
                         <div className="pr_title">{list.adTitle}</div>
                                        <div className="price f_700 f_size_40 t_color2">{list.price}<sub className="f_size_16 f_400"><br />{list.per}</sub></div>
                                        <div className="mt-3 margin-auto"><Buy_Button/> </div>
                                        </div>
                                        
                 </div>
                 </Fade>
 
          </div>







   </div>                                 
                                )
                            })
                        }
                       
                   
                </div>
               </div>
      
        </>
        )
    }
}


export default AlaCarte;