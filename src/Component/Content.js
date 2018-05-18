import React, {Component} from 'react';
import GoogleDistanceMatrix from 'google-distance-matrix';

class Content extends Component{
    static defaultProps = {
        origins : 'San Francisco CA',
        destinations : {
            city : 'New York NY',
            num : '41.8337329'
        }
    };

    render(){
        return(
          <section>
              <div style={{height:'100vh', width:'100%'}}>
                <GoogleDistanceMatrix
                    URLKeys = {{ key : "AIzaSyDgWYXsjLiOk_LjeD36Q15aGXwPpuOJxTE" }}
                    defaultOrigin={this.props.origins}
                    defaultDestinations={this.props.destinations}
                >
                </GoogleDistanceMatrix>
              </div>
          </section>
        );
    }
}

export default Content;