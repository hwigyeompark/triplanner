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
                    URLKeys = {{ key : "AIzaSyDgWYXsjLiOk_LjeD36Q15aGXwPpuOJxTE" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >

                      <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          text={'Kreyser Avroro'}
                      />
                </GoogleMapReact>
              </div>
          </section>
        );
    }
}

export default Content;