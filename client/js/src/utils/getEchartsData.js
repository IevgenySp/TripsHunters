/**
 * Created by isp on 11/19/17.
 */

import forEach from 'lodash/forEach';
import flattenDeep from 'lodash/flattenDeep';

export function getEchartsBarsParams(eInstance) {
    let paramsArr = [];
    let shapes = [];

    eInstance._chartsViews.forEach(group => {
        group._data._itemLayouts.forEach(item => {
            item.color =  group._data._visual.color;
        });

        shapes = shapes.concat(group._data._itemLayouts);
    });

    forEach(shapes, function(obj, index) {
        let params = {};

        params.x = obj.x;
        params.y = obj.y;
        params.width = obj.width;
        params.height = obj.height;

        params.advanced = {
            isPolygonRender: false,
            drawAsCanvasShape: true,
            interpolation: 'linear'
        };
        params.style = {
            isFill: true,
            //color: '#f78518'
            color: obj.color
        };

        paramsArr.push(params);
    });
    
    return paramsArr;
}

export function getEchartsPointsParams(eInstance) {
    let paramsArr = [];
    let shapes = [];

    eInstance._chartsViews.forEach(group => {
        group._data._itemLayouts.forEach(item => {
            item.color =  group._data._visual.color;
        });

        shapes = shapes.concat(group._data._itemLayouts);
    });

    forEach(shapes, function(obj, index) {
        let params = {};

        if (shapes[index + 1]) {
            params.points = [
                obj[0], obj[1],
                shapes[index + 1][0], shapes[index + 1][1]
            ];

            params.advanced = {
                isPolygonRender: false,
                drawAsCanvasShape: true,
                interpolation: 'linear'
            };
            params.style = {
                isFill: true,
                //color: '#1e88e5'
                color: obj.color
            };

            paramsArr.push(params);
        }

    });

    return paramsArr;
}

export function getEchartsMapsParams(eInstance) {
    let paramsArr = [];
    let shapes = eInstance._chartsViews[0].group.__storage._displayList;

    forEach(shapes, function(obj, index) {
        let params = {};

        if (obj.shape && obj.shape.paths) {
            let points = obj.shape.paths[0].shape.points;
            let transformedPoints = [];
            let color = obj.style.fill;

            function applyTransform(out, v, m) {
                let x = v[0];
                let y = v[1];
                out[0] = m[0] * x + m[2] * y + m[4];
                out[1] = m[1] * x + m[3] * y + m[5];
                return out;
            }

            points.forEach((point, index) => {

                transformedPoints.push(
                    applyTransform([], point, obj.transform));

            });

            transformedPoints.pop();

            params.points = flattenDeep(transformedPoints);

            params.advanced = {
                isPolygonRender: false,
                drawAsCanvasShape: false,
                interpolation: 'linear'
            };
            params.style = {
                isFill: true,
                color: color,
                state: 'State_' + index
            };

            paramsArr.push(params);
        }

    });

    return paramsArr;
}
        
export default {
    getEchartsBarsParams,
    getEchartsPointsParams,
    getEchartsMapsParams
};