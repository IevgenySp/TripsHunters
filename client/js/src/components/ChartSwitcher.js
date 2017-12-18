/**
 * Created by isp on 11/9/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    getEchartsBarsParams,
    getEchartsPointsParams
} from '../utils/getEchartsData';

let animationStyle = {
    position: 'absolute',
    top: 15
};

class ChartSwitcher extends Component {

    constructor(props) {
        super(props);

        this.state = {
            animationLayerActive: false,
            //chart: {}
        };
    }

    buildChart(container) {
        this.chart = echarts.init(container);
        this.chart.setOption(this.props.chart);

        // this.fluidCanvas = new FluidCanvas(
        //     container.childNodes[0].childNodes[0]);

        this.fCanvas =
            this.animationLayer(this.chart, this.animationCanvas);

        this.fluidCanvas = new FluidCanvas(this.fCanvas);
//debugger;
        //this.setState({})

    }

    updateChart() {
        console.log(this.chart.getOption().series);

        if (this.chart.getOption().series.length === 0) {
            return;
        }

        let getType = () => {
            return this.chart.getOption().series[0].type;
        };
        let getGeometry = () => {
            let geometry;

            switch(getType()) {
                case 'bar':
                    geometry = 'rectangle';
                    break;
                case 'line':
                    geometry = 'line';
                    break;
                default:
                    geometry = 'polygon';
            }

            return geometry;
        };
        let startShapes = this.getEchartParams(getType());
        let endShapes;
        let startGeometries;
        let endGeometries;
        let self = this;
        let startGeometryType = getGeometry();
        let endGeometryType;


        //let fContext = self.fCanvas.getContext("2d");

        //fContext.clearRect(0, 0, fContext.width, fContext.height);

        //this.chart.clear();
        this.chart.setOption(this.props.chart);
        //this.chart.clear();

        endShapes = this.getEchartParams(getType());
        endGeometryType = getGeometry();

        //this.chart.clear();
        startGeometries = this.getShapeGeometry(startGeometryType, startShapes);
        endGeometries = this.getShapeGeometry(endGeometryType, endShapes);
        
        if (startGeometries === endGeometries) {
            return;
        }

        this.fluidCanvas.animate(startGeometries, endGeometries);

        this.fluidCanvas.once('onAnimationStart', function() {
            self.chart.clear();
//debugger;
            animationStyle = Object.assign({}, animationStyle);
            animationStyle.display = 'block';

            // self.setState({
            //     animationLayerActive: true
            // })

        });

        this.fluidCanvas.on('onAnimationStop', function() {
            //canvasEl.style.display = 'none';

            /*if (currentChart === 'line') {
                myChart.setOption(line);
            } else if (currentChart === 'bar') {
                bars.animation = false;
                myChart.setOption(bars);
            } else if (currentChart === 'usMap') {
                myChart.setOption(usMap, { notMerge: true });
            }*/

            //console.log(this.props.chart)

            //animationStyle = Object.assign({}, animationStyle);
            //animationStyle.display = 'none';

            self.fluidCanvas.clear();
console.log('test')
            console.log(self.fluidCanvas.storage);
            self.props.chart.animation = false;
            self.chart.setOption(self.props.chart);

            // self.setState({
            //     animationLayerActive: false
            // });

            //self.forceUpdate();

        });

    }

    getEchartParams(type) {
        let chartType = this.chart.getOption().series[0].type;
        let shapes;

        switch(type) {
            case 'bar':
                shapes = getEchartsBarsParams(this.chart);
                break;
            case 'line':
                shapes = getEchartsPointsParams(this.chart);
                break;
        }

        return shapes;
    }

    getShapeGeometry(shapeType, shapesArr) {
        let shapeGeometry = [];

        shapesArr.forEach(shape => {
            shapeGeometry.push(
                this.fluidCanvas.shape(shapeType, shape));
        });

        return shapeGeometry;
}


    animationLayer(chart, canvas) {
        let PIXEL_RATIO = (() => {
            let ctx = document.createElement("canvas").getContext("2d"),
                dpr = window.devicePixelRatio || 1,
                bsr = ctx.webkitBackingStorePixelRatio ||
                    ctx.mozBackingStorePixelRatio ||
                    ctx.msBackingStorePixelRatio ||
                    ctx.oBackingStorePixelRatio ||
                    ctx.backingStorePixelRatio || 1;

            return dpr / bsr;
        })();

        let createHiDPICanvas = (w, h, ratio) => {
            if (!ratio) { ratio = PIXEL_RATIO; }
            var can = document.getElementsByClassName("animizerCanvasMain")[0];
            can.width = w * ratio;
            can.height = h * ratio;
            can.style.width = w + "px";
            can.style.height = h + "px";
            can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
            return can;
        };

        return createHiDPICanvas(chart.getWidth(), chart.getHeight());
    }

    componentDidMount() {
        this.buildChart(this.container);
    }

    componentDidUpdate() {
        this.updateChart(this.container);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.chart !== this.props.chart ||
            nextState.animationLayerActive !== this.state.animationLayerActive;
    }

    render() {
        if (!window.echarts)
            throw new Error('ECharts library is not defined');

        let style = {
            width: this.props.width !== undefined ?
                this.props.width + 'px' : 300 + 'px',
            height: this.props.height !== undefined ?
                this.props.height + 'px' : 200 + 'px'
        };

        return (
            <div>
                <div style={style} ref={(element) => { this.container = element }}></div>
                <canvas style={animationStyle} className="animizerCanvasMain" ref={
                    (element) => { this.animationCanvas = element }} />
            </div>
        );
    }
}

ChartSwitcher.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    chart: PropTypes.object.isRequired
};

ChartSwitcher.defaultProps = {
    width: 300,
    height: 200
};

export default ChartSwitcher;