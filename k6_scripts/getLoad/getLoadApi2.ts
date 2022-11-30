import  { getLoadQuery2 }  from '../../src/getLoad/queries.ts'
import  { getLoadVariables } from '../../src/getLoad/variables.ts'
import  { getHeader } from '../../src/getLoad/headers.ts'
import  { devUrl,executor,rate,timeUnit,durationCAR,preAllocatedVUs,maxVUs }  from '../../utils/config.ts'
import { check } from 'k6';
import http from 'k6/http';

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: executor,
      rate: rate,
      timeUnit: timeUnit, 
      duration: durationCAR,
      preAllocatedVUs: preAllocatedVUs, 
      maxVUs: maxVUs, 
      exec: 'getLoadScenario2',
    },
  },
};

   export function getLoadScenario2() {
   const res = http.post(devUrl,
    JSON.stringify({query:getLoadQuery2,variables:getLoadVariables}), 
    { headers: getHeader() }
    )
   
    let code=String(res.body).slice(String(res.body).indexOf(',\"code')+9,String(res.body).indexOf(',\"code')+19); 
    check(res, {
      'is status 200': (r) => r.status === 200,
    });
    console.log('Status Code :'+code);
   // sleep(2)
  }