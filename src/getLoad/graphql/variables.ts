import { SharedArray } from 'k6/data';

const dataPath='../../getLoad/data/loadId.json';
    const data = new SharedArray('variables', function () {
        return JSON.parse(open(dataPath));
      }); 

 var loadID=data[Math.floor(Math.random() * data.length)];

export const getLoadVariables = `
{
  "useCustomerV2": true,
  "useEmployeeV2": true,
  "useFacilityV2": true,
  "useCarrierV2": true,
  "useCityStateStop": true,
  "useCustomerLoadDefaults": true,
  "id": "${loadID}"
}
`;

