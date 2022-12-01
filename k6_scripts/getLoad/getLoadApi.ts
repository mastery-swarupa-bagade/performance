import {getHeader} from '../../src/getLoad/graphql/headers.ts'
import {getLoadQuery} from '../../src/getLoad/graphql/queries.ts'
import {getLoadVariables} from '../../src/getLoad/graphql/variables.ts'
import {
  devUrl,
  durationCAR,
  executor,
  maxVUs,
  preAllocatedVUs,
  rate,
  timeUnit
} from '../../utils/config.ts'
import {generateToken} from '../../utils/loginToken.ts'

import {check} from 'k6'
import http from 'k6/http'
   let token
export const options = {
  scenarios: {
    constant_request_rate: {
      executor: executor,
      rate: rate,
      timeUnit: timeUnit,
      duration: durationCAR,
      preAllocatedVUs: preAllocatedVUs,
      maxVUs: maxVUs,
      exec: 'getLoadScenario'
    }
  }
}

export function setup() {
  token = generateToken()
  return token
}
export function getLoadScenario(token) {
  const res = http.post(
    devUrl,
    JSON.stringify({query: getLoadQuery, variables: getLoadVariables}),
    {headers: getHeader(token)}
  )
  const code = String(res.body).slice(
    String(res.body).indexOf(',"code') + 9,
    String(res.body).indexOf(',"code') + 19
  )
  //console.log("code*****"+code)
  check(res, {
    'is status 200': r => r.status === 200
  })
  check(code, {
    'is codes length 10': code => code.length === 10
  })
  // sleep(2)
}
