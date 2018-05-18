import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>

class Content extends Component{
    static defaultProps = {
        center:{
            lat:59.95,
            lng:30.33
        },
        zoom:11
    };
    render(){
        return(
          <section>
              <div>
                <GoogleMapReact

                />
              </div>
          </section>
        );
    }
}

export default Content;