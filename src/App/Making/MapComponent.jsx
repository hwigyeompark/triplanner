import React, {Component} from 'react';
import styled from 'styled-components'

export default class MapComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementById('map');
        let map = new daum.maps.Map(container, {
            center: new daum.maps.LatLng(33.450701, 126.570667),
            level: 3
        });
/*        let options = {
            center: new window.daum.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        let map = new window.daum.maps.Map(container, options);*/
    }

    render() {
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4022af925de8b3f98dee3cd8942a68f4">

        </script>
        return (
            <div id="map" style={{width: "500px", height: "400px"}}>
            </div>
        );
    }
}