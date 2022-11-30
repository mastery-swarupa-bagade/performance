// @ts-ignore
import { getLoadQuery } from '../../src/getLoad/graphql/queries.ts'
// @ts-ignore
import { getLoadVariables } from '../../src/getLoad/graphql/variables.ts'
// @ts-ignore
import { getHeader } from '../../src/getLoad/graphql/headers.ts'
// @ts-ignore
import { devUrl, executor, rate, timeUnit, durationCAR, preAllocatedVUs, maxVUs } from '../../utils/config.ts'
// @ts-ignore
import { generateToken } from '../../utils/loginToken.ts';


import http from 'k6/http';
import { check } from 'k6';
let token;
export const options = {
  scenarios: {
    constant_request_rate: {
      executor: executor,
      rate: rate,
      timeUnit: timeUnit,
      duration: durationCAR,
      preAllocatedVUs: preAllocatedVUs,
      maxVUs: maxVUs,
      exec: 'getLoadScenario',
    },
  },
};

export function setup() {
            token = generateToken();
     return token

}
export function getLoadScenario(token) {
  const res = http.post(devUrl,
    JSON.stringify({ query: getLoadQuery, variables: getLoadVariables }),
    { headers: getHeader(token) }
  )
 let code = String(res.body).slice(String(res.body).indexOf(',\"code') + 9, String(res.body).indexOf(',\"code') + 19);
  //console.log("code*****"+code)
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  check(code, {
    'is codes length 10': (r) => code.length === 10,
  });
  // sleep(2)
}
