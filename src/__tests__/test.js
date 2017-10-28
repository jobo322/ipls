// var intervalPLS = require('../index');
// var rand = require('generate-dataset');
// var options = {
//     keepDataClass: true,
//     keepCompositionMatrix: false,
//     dummyMatrix: true,
//     seed: 22,
//     classes: [
//         {
//             nbSample: 500,
//             elements: [
//                 {
//                     index: 0,
//                     distribution: {
//                         name: 'normal',
//                         parameters: {
//                             mean: 9.4,
//                             standardDesviation: 0.1
//                         }
//                     }
//                 },
//                 {
//                     index: 1,
//                     distribution: {
//                         name: 'normal',
//                         parameters: {
//                             mean: 9.4,
//                             standardDesviation: 0.1
//                         }
//                     }
//                 },
//                 {
//                     index: 2,
//                     distribution: {
//                         name: 'normal',
//                         parameters: {
//                             mean: 9.4,
//                             standardDesviation: 0.1
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             nbSample: 500,
//             elements: [
//                 {
//                     index: 0,
//                     distribution: {
//                         name: 'normal',
//                         parameters: {
//                             mean: 9.4,
//                             standardDesviation: 0.1
//                         }
//                     }
//                 },
//                 {
//                     index: 1,
//                     distribution: {
//                         name: 'normal',
//                         parameters: {
//                             mean: 10.3,
//                             standardDesviation: 0.15
//                         }
//                     }
//                 },
//                 {
//                     index: 2,
//                     distribution: {
//                         name: 'normal',
//                         parameters: {
//                             mean: 9.4,
//                             standardDesviation: 0.1
//                         }
//                     }
//                 }
//             ]
//         }
//     ]
// };
// var intervals = [
//     [
//         {
//             from: 0,
//             to: 6
//         }
//     ],
//     [
//         {
//             from: 1,
//             to: 2
//         }
//     ],
//     [
//         {
//             from: 3,
//             to: 4
//         }
//     ],
//     [
//         {
//             from: 5,
//             to: 6
//         }
//     ]
// ];
// let pureElements = [
//     [0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0]
// ];
// for (let i of pureElements) {
//     for (let j = 0; j < i.length; j++) {
//         i[j] += Math.random() / 1000;
//     }
// }
// describe('dataset generated from a small matrix of pureElements', () => {
//     it('should has a standar desviation closest to provided', () => {
//         let result = rand(pureElements, options);
//         let iplsResult = intervalPLS(intervals, result.dataset, result.dataClass);
//         let maxIndex = 0
//         for (let i = 1; i < iplsResult.length; i++) {
//             if (iplsResult[maxIndex] < iplsResult[i]) maxIndex = i;
//         }
//         expect(maxIndex).toEqual(3); // that because the interval 3 contain the marker of the dataset
//     });
// });
