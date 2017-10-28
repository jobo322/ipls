var {Matrix} = require('ml-matrix');
var {PLS} = require('ml-pls');

function intervalPLS(intervalsList, dataSet, dataClass, options = {}) {
    //should has a checkArguments function
    dataSet = new Matrix(dataSet);
    var nRows = dataSet.rows;
    var nCols = dataSet.columns;
    dataSet = dataSet.transpose();
    var results = new Array(intervalsList.length);
    let counter = 0;
    for (let intervals of intervalsList) {
        let subDataset = _getSubDataSet(intervals, dataSet);
        subDataset = Matrix.checkMatrix(subDataset);
        let pls = new PLS({
            latentVectors: 1,
            tolerance: 1e-4
        });
        pls.train(subDataset, dataClass);
        let predicted = pls.predict(subDataset);
        let q2 = _computeQ2(predicted, dataClass);
        results[counter++] = q2;
    }
    return results;
}

function _getSubDataSet(intervals, dataSet) {
    let subDataset = [];
    for (let interval of intervals) {
        let from = interval.from;
        let to = interval.to;
        if (from > to) {
            [from, to] = [to, from];
        }
        for (let j = from; j < to; j++) {
            subDataset.push(dataSet[j]);
        }
    }
    result = new Matrix(subDataset);
    return result.transpose();
}

function _computeQ2(realY, predictedY) {
    realY = Matrix.checkMatrix(realY);
    predictedY = Matrix.checkMatrix(predictedY);
    let meansY = _mean(realY)
    let press = predictedY.map((row, rowIndex) => {
        return row.map((element, colIndex) => {
            return Math.pow(realY[rowIndex][colIndex] - element, 2);
        });
    });

    let tss = predictedY.map((row) => {
        return row.map((element, colIndex) => {
            return Math.pow(element - meansY[colIndex], 2);
        })
    });

    press = Matrix.checkMatrix(press).sum();
    tss = Matrix.checkMatrix(tss).sum();

    return 1 - press / tss;
}

function _mean(matrix, dimension) {
    var rows = matrix.length,
        cols = matrix[0].length,
        theMean, N, i, j;

    theMean = new Array(cols);
    N = rows;
    for (j = 0; j < cols; j++) {
        theMean[j] = 0;
        for (i = 0; i < rows; i++) {
            theMean[j] += matrix[i][j];
        }
        theMean[j] /= N;
    }
    return theMean;
}
module.exports = intervalPLS;
